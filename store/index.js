import firebase from '~/plugins/firebase'

export const state = () => ({
  articles: [],
  tags: [],
  archives: [],
  popularArticles: [],
})

export const mutations = {
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
      const articles = await $content('articles', { deep: true })
        .sortBy('createdAt', 'desc')
        .fetch()

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

      const COLLECTION_NAME = 'popular_posts_rank'
      const db = firebase.firestore()

      const docsSnap = await db
        .collection(COLLECTION_NAME)
        .doc('90days')
        .collection('rank')
        .get()

      const popularArticles = docsSnap.docs.map((doc) => {
        return { rank: doc.id, data: doc.data() }
      })

      commit('setArticles', { articles })
      commit('setTags', { tags })
      commit('setArchives', { archives })
      commit('setPopularArticles', { popularArticles })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
