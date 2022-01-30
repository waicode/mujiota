// eslint-disable-next-line import/no-extraneous-dependencies
import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '~/plugins/firebase'

import * as page from '~/store/page'
import { Ref, unref } from '@nuxtjs/composition-api'

// Articleの型定義
export type Article = {
  id: number
  slug: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  imageFormat: string
  category: string
  tags: Array<string>
}
// Articleの型ガード関数
export const isArticle = (
  article: Article | Ref<Article> | undefined
): article is Article =>
  article === undefined
    ? false
    : 'id' in unref(article) && 'slug' in unref(article)

// Tagの型定義
export type Tag = {
  name: string
  count: string
}
// Tagの型ガード関数
export const isTag = (tag: Tag): tag is Tag => 'name' in tag && 'count' in tag

// Archiveの型定義
export type Archive = {
  month: string
  count: string
}
// Archiveの型ガード関数
export const isArchive = (archive: Archive): archive is Archive =>
  'month' in archive && 'count' in archive

export const state = () => ({
  initialized: false,
  articles: [] as Array<Article>,
  tags: [] as Array<Tag>,
  archives: [] as Array<Archive>,
  popularArticles: [] as Array<Article>,
})

export const mutations = mutationTree(state, {
  setInitialized(state) {
    state.initialized = true
  },
  setArticles(state, { articles }) {
    state.articles = articles
  },
  setTags(state, { tags }) {
    state.tags = tags
  },
  setArchives(state, { archives }) {
    state.archives = archives
  },
  setPopularArticles(state, { popularArticles }) {
    state.popularArticles = popularArticles
  },
})

type RootState = ReturnType<typeof state>

export const getters = {
  initialized: (state: RootState) => state.initialized,
  articles: (state: RootState) => state.articles,
  tags: (state: RootState) => state.tags,
  archives: (state: RootState) => state.archives,
  popularArticles: (state: RootState) => state.popularArticles,
}

export const actions = actionTree(
  { state, getters, mutations },
  {
    async nuxtServerInit({ commit, state }, { $content }: Context) {
      try {
        if (state.initialized) {
          return
        }
        // 全記事一覧
        const articles = await $content('articles', { deep: true })
          .sortBy('createdAt', 'desc')
          .fetch<Article>()
        commit('setArticles', { articles })
        // タグ
        const tagsObj: { [key: string]: number } = {}
        articles
          .map((data: Article) => data.tags)
          .flat()
          .forEach((tagName: string) => {
            // { tagName: count }
            tagsObj[tagName] = tagsObj[tagName] ? tagsObj[tagName] + 1 : 1
          })
        const tags = Object.entries(tagsObj).map(([name, count]) => ({
          name,
          count,
        }))
        commit('setTags', { tags })
        // アーカイブ
        const archivesObj: { [key: string]: number } = {}
        articles
          .map((data: Article) => data.createdAt.slice(0, 7)) // yyyy-mmを切り取り
          .forEach((monthKey: string) => {
            // { 'yyyy-mm': count }
            archivesObj[monthKey] = archivesObj[monthKey]
              ? archivesObj[monthKey] + 1
              : 1
          })
        const archives = Object.entries(archivesObj).map(([month, count]) => ({
          month,
          count,
        }))
        commit('setArchives', { archives })
        // 読まれている記事
        const COLLECTION_NAME = 'popular_posts_rank'
        const SUB_COLLECTION_NAME = 'rank'
        const querySnapshot = await getDocs(
          collection(db, COLLECTION_NAME, '90days', SUB_COLLECTION_NAME)
        )
        const popularArticles = querySnapshot.docs.map((doc) => ({
          rank: doc.id,
          data: doc.data(),
        }))
        commit('setPopularArticles', { popularArticles })
        // 初期化完了
        commit('setInitialized')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    page,
  },
})
