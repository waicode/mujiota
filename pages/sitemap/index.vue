<template>
  <div class="MujiotaSitemapPage">
    <div class="MujiotaSitemapPage__PostList">
      <template v-for="categorisedArticle in categorisedArticles">
        <h2 :key="`h2-${categorisedArticle.category}`">
          {{ categorisedArticle.icon }}
          {{ categorisedArticle.category }}
        </h2>
        <ul :key="`ul-${categorisedArticle.category}`">
          <li v-for="article in categorisedArticle.articles" :key="article.id">
            <nuxt-link :to="`/${article.id}/${article.slug}/`">{{
              article.title
            }}</nuxt-link>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'

import useHeaderMeta from '~/composables/useHeaderMeta'
import useFetchPosts from '~/composables/useFetchPosts'
import { Article } from '~/store'
import { getDefaultOgImageUrl } from '~/plugins/meta'

/**
 * ## サイトマップ
 */
export default defineComponent({
  name: 'MujiotaSitemapPage',
  setup() {
    const context = useContext()
    const { $config, app } = context
    const { title, meta } = useMeta()

    const articles = ref<Article[]>([])

    // [{category: "aaa", articles:[{...article1}, {...article2}, ...], icon: "😃"}]
    type CategorisedArticle = {
      category: string
      articles: Article[]
      icon: string
    }
    const categorisedArticles = ref<CategorisedArticle[]>([])

    const pageUrl = `${$config.baseUrl}/sitemap`

    const { fetch } = useFetch(async () => {
      articles.value = await useFetchPosts(context as unknown as Context)

      // メタ情報
      const SITEMAP_TITLE = 'サイトマップ'
      const SITEMAP_DESCRIPTION = '全記事の一覧です。'
      const metaData = app.$getMeta(
        SITEMAP_TITLE,
        SITEMAP_DESCRIPTION,
        pageUrl,
        getDefaultOgImageUrl($config.baseUrl)
      )
      title.value = SITEMAP_TITLE
      meta.value = useHeaderMeta(metaData).meta

      // カテゴリー別に集計した記事リスト
      const categories = Array.from(
        new Set(articles.value.map((article) => article.category))
      )
      const results: CategorisedArticle[] = []
      categories.forEach((category) => {
        const list: Article[] = []
        articles.value.forEach((article) => {
          if (category === article.category) {
            list.push(article)
          }
        })
        results.push({
          category,
          articles: list,
          icon: app.$getTagIcon(app.$getTagSlug(category)),
        })
      })
      categorisedArticles.value = results

      // 現在の記事情報をリセット
      app.$accessor.setArticle({ article: {} })
    })

    fetch()

    return {
      categorisedArticles,
    }
  },
  head: {},
})
</script>
<style lang="scss">
.MujiotaSitemapPage {
  h2 {
    margin-bottom: $scale12;
    font-size: $font-size-131rem;
    font-weight: $font-weight-700;
  }
  ul {
    margin-bottom: $scale28;

    li {
      font-size: $font-size-100rem;
      a {
        display: inline-block;
        padding: $scale4;
        margin-left: $scale8;
        font-size: $font-size-081rem;
        font-weight: $font-weight-700;
        line-height: $font-size-160rem;
        color: $sitemap-link-color;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
