// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'

// eslint-disable-next-line func-names
export default async function ({ app, store }: Context) {
  if (!store.state.initialized) {
    await store.dispatch('nuxtServerInit', app.context)
  }
}
