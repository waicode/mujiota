<template>
  <article v-if="article" class="post">
    <h1 class="page-title">{{ article.title }}</h1>
    <div class="meta-wrap">
      <div class="date">
        <span class="date-published">
          <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
          <span>{{ article.createdAt | dateFormatted }}</span>
        </span>
        <span
          v-if="article.updatedAt != article.createdAt"
          class="date-updated"
        >
          <fa :icon="faRedoAlt" class="fa-redo-alt" />
          <span>{{ article.updatedAt | dateFormatted }}</span>
        </span>
      </div>
      <div v-if="article.tags" class="tags">
        <span v-for="tag in article.tags" :key="tag" class="tag is-light">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="eyecatch">
      <AppAssetsImage
        :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
      />
    </div>
    <div class="description">
      <p>{{ article.description }}</p>
    </div>
    <div class="toc-wrap">
      <AppTableOfContents v-if="article.toc.length > 0" :article="article" />
    </div>
    <AppShareButtonsTop
      :page-url="pageUrl"
      :title="article.title"
      :share-count-hatena="shareCountHatena"
      :share-count-twitter="shareCountTwitter"
      :share-count-facebook="shareCountFacebook"
      :share-count-pocket="shareCountPocket"
    />
    <NuxtContent class="article" :document="article" />
    <AppShareButtonsBottom
      :page-url="pageUrl"
      :title="article.title"
      :share-count-hatena="shareCountHatena"
      :share-count-twitter="shareCountTwitter"
      :share-count-facebook="shareCountFacebook"
      :share-count-pocket="shareCountPocket"
    />
    <AppRelatedPosts :articles="relatedArticles" />
  </article>
</template>

<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api'
import useHeaderMeta from '@/composables/useHeaderMeta'

export default defineComponent({
  name: 'MujiotaIdSlugPage',
  setup() {
    const { $content, $config, store, params, app, error } = useContext()

    const article = ref()
    const relatedArticles = ref()
    const pageUrl = ref('')

    const { title, meta } = useMeta()

    const { fetch } = useFetch(async () => {
      let articleData = {}
      let imageUrl = ''
      // TODO: composableへ
      try {
        // APIからコンテンツを取得する処理
        articleData = await $content(
          'articles',
          params.value.id,
          params.value.slug
        ).fetch()

        if (!articleData) {
          // 見つからない場合はNOTFOUND
          error({
            statusCode: 404,
          })
        }

        article.value = articleData
        pageUrl.value = `${$config.baseUrl}/${articleData.id}/${articleData.slug}`

        imageUrl =
          $config.baseUrl +
          require(`~/assets/images/eyecatch/${articleData.id}/${articleData.slug}.${articleData.imageFormat}`)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }

      // TODO: composableへ
      try {
        // 関連記事
        const relatedArticlesData = await $content('articles', { deep: true })
          .where({
            category: articleData.category,
            id: { $ne: articleData.id },
          })
          .fetch()
        relatedArticles.value = relatedArticlesData
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }

      // メタ情報
      const metaData = app.$getMeta(
        articleData.title,
        articleData.description,
        pageUrl.value,
        imageUrl
      )
      title.value = articleData.title
      meta.value = useHeaderMeta(metaData).meta

      // 現在のページ情報をストアへ格納
      store.commit('page/setArticle', { articleData })
    })

    fetch()

    // TODO: バックエンドから取得したカウント数をどこかで設定
    const shareCountHatena = ref(0)
    const shareCountTwitter = ref(0)
    const shareCountFacebook = ref(0)
    const shareCountPocket = ref(0)

    return {
      article,
      pageUrl,
      faCalendarAlt,
      faRedoAlt,
      shareCountHatena,
      shareCountTwitter,
      shareCountFacebook,
      shareCountPocket,
      relatedArticles,
    }
  },
  head: {},
})
</script>
<style lang="scss">
.post {
  h1.page-title {
    margin-top: -16px;
    margin-bottom: 0.4rem;
    font-size: 1.28rem;
    font-weight: bold;
  }
  .meta-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    color: $text;
    .date {
      display: flex;
      flex-wrap: nowrap;
      padding: 4px;
      padding-right: 0;
      font-size: 0.8rem;
      .date-published {
        margin-right: 12px;
      }
    }
    .tags {
      display: flex;
      padding: 4px;
      padding-left: 0;
      font-size: 0.8rem;
    }
  }
  .toc-wrap {
    @media (max-width: $tablet) {
      // モバイルは目次を非表示
      display: none;
    }
  }
  .eyecatch {
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
  .description {
    margin-top: 28px;
    p {
      margin-bottom: 18px !important;
    }
  }
  .description,
  .article {
    p {
      margin-bottom: 32px;
      line-height: 2;
    }
    h2 {
      position: relative;
      padding-bottom: 16px;
      margin-top: 96px;
      margin-bottom: 40px;
      font-size: 1.4rem;
      font-weight: bold;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        content: '';
        background-image: repeating-linear-gradient(
          45deg,
          #e0e0e0 0,
          #e0e0e0 1px,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 50%
        );
        background-size: 8px 8px;
      }
      a {
        .icon {
          display: none;
        }
      }
    }
    h3 {
      position: relative;
      padding-left: 24px;
      margin-top: 64px;
      margin-bottom: 28px;
      font-size: 1.3rem;
      font-weight: bold;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        content: '';
        background-color: #e0e0e0;
      }
      a {
        .icon {
          display: none;
        }
      }
    }
    h4 {
      position: relative;
      padding-left: 24px;
      margin-top: 40px;
      margin-bottom: 24px;
      font-size: 1.2rem;
      font-weight: bold;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        content: '';
        background-image: repeating-linear-gradient(
          #999,
          #999 1px,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 4px
        );
      }
      a {
        .icon {
          display: none;
        }
      }
    }
    h5 {
      margin-top: 32px;
      margin-bottom: 12px;
      font-size: 1.1rem;
      font-weight: bold;
      line-height: 2em;
      letter-spacing: 1px;
      a {
        .icon {
          display: none;
        }
      }
    }
    ol {
      counter-reset: number;
    }
    ol,
    ul {
      padding: 0;
      margin-bottom: 32px;
      list-style-type: none;
    }
    ul li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 0.4rem;
      margin-left: 0.2rem;
      list-style: none;
      &::before {
        position: absolute;
        top: 0.4rem;
        left: 0.32rem;
        display: block;
        width: 10px;
        height: 10px;
        content: ' ';
        background: #3e3e3e;
        border-radius: 20%;
        box-shadow: -1px -1px 1px rgba(97, 97, 97, 0.15) inset;
      }
    }
    ol li {
      position: relative;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      padding-left: 2rem;
      margin-bottom: 0.2rem;
      margin-left: 0.4rem;
      list-style: none;
      &::before {
        position: absolute;
        top: 0.28rem;
        left: 0;
        display: block;
        width: 1.3rem;
        height: 1.3rem;
        font-family: 'Lato', sans-serif;
        font-size: 0.7em;
        font-weight: bold;
        line-height: 1.4rem;
        color: #fff;
        text-align: center;
        content: counter(number);
        counter-increment: number;
        background: #333;
        border-radius: 50%;
      }
    }
    strong {
      font-weight: bold;
    }
    span.line {
      display: inline;
      padding-bottom: 0;
      background: linear-gradient(rgba(255, 255, 141, 0) 50%, #fff59d 70%);
    }

    blockquote {
      position: relative;
      box-sizing: border-box;
      padding: 10px 15px 10px 60px;
      margin-bottom: 30px;
      font-style: italic;
      color: #555;
      background: #efefef;
    }

    blockquote::before {
      position: absolute;
      top: 18px;
      left: 15px;
      display: inline-block;
      font-family: 'Font Awesome 5 Free';
      font-size: 30px;
      font-weight: 900;
      line-height: 1;
      color: #cfcfcf;
      content: '\f10d';
    }

    blockquote p {
      padding: 0;
      margin: 10px 0;
      line-height: 1.7;
    }

    blockquote cite {
      display: block;
      font-size: 0.9em;
      color: #888;
      text-align: right;
    }
  }
}
</style>
