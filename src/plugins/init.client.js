export default async function ({ app, store }) {
  if (!store.state.initialized) {
    await store.dispatch('nuxtServerInit', app.context)
  }
}
