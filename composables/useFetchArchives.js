import { useContext } from '@nuxtjs/composition-api'

export default async (year, month) => {
  const { $content } = useContext()
  const articlesData = await $content('articles', { deep: true })
    .sortBy('createdAt', 'desc')
    .fetch()
  // eslint-disable-next-line no-useless-escape
  const pattern = new RegExp('^' + year + '-' + month)
  return articlesData.filter((data) => data.createdAt.match(pattern))
}
