import { collection, getDocs } from 'firebase'
import { db } from '~/plugins/firebase.js'

export const state = () => ({
  initialized: false,
  articles: [],
  tags: [],
  archives: [],
  popularArticles: [],
})

export const mutations = {
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
}

export const actions = {
  async nuxtServerInit({ commit }, { $content, req }) {
    try {
      // 全記事一覧
      const articles = await $content('articles', { deep: true })
        .sortBy('createdAt', 'desc')
        .fetch()
      commit('setArticles', { articles })
      // タグ
      const tagsObj = {}
      articles
        .map((data) => data.tags)
        .flat()
        .forEach((data) => {
          tagsObj[data] = tagsObj[data] ? tagsObj[data] + 1 : 1
        })
      const tags = Object.entries(tagsObj).map(([name, count]) => ({
        name,
        count,
      }))
      commit('setTags', { tags })
      // アーカイブ
      const archivesObj = {}
      articles
        .map((data) => data.createdAt.slice(0, 7)) // yyyy-mmを切り取り
        .forEach((data) => {
          archivesObj[data] = archivesObj[data] ? archivesObj[data] + 1 : 1
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
      const popularArticles = querySnapshot.docs.map((doc) => {
        return { rank: doc.id, data: doc.data() }
      })
      commit('setPopularArticles', { popularArticles })
      // 初期化完了
      commit('setInitialized')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
