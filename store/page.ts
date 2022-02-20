// eslint-disable-next-line import/no-extraneous-dependencies
import { mutationTree } from 'typed-vuex'

export const state = () => ({
  article: {},
})

export const mutations = mutationTree(state, {
  setArticle(state, { article }) {
    state.article = article
  },
})
