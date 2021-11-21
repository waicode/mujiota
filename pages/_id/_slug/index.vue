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
      <AssetsImage
        :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
      />
    </div>
    <div class="description">
      <p>{{ article.description }}</p>
    </div>
    <div class="toc-wrap">
      <TableOfContents v-if="article.toc.length > 0" :article="article" />
    </div>
    <ShareButtonsTop
      :page-url="pageUrl"
      :title="article.title"
      :share-count-hatena="shareCountHatena"
      :share-count-twitter="shareCountTwitter"
      :share-count-facebook="shareCountFacebook"
      :share-count-pocket="shareCountPocket"
    />
    <NuxtContent class="article" :document="article" />
    <ShareButtonsBottom
      :page-url="pageUrl"
      :title="article.title"
      :share-count-hatena="shareCountHatena"
      :share-count-twitter="shareCountTwitter"
      :share-count-facebook="shareCountFacebook"
      :share-count-pocket="shareCountPocket"
    />
    <RelatedPosts :articles="relatedArticles" />
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

export default defineComponent({
  name: 'MujiotaIdSlugPage',
  setup() {
    const { $config, $content, store, params, app, error } = useContext()

    const article = ref()
    const relatedArticles = ref()
    const pageUrl = ref('')
    let imageUrl = ''

    const { title, meta } = useMeta()

    const { fetch } = useFetch(async () => {
      let articleData = {}
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
        pageUrl.value = `${$config.baseURL}/${articleData.id}/${articleData.slug}`
        const imagePath = require(`~/assets/images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`)
        imageUrl = `${$config.baseURL}${imagePath}`
      } catch (e) {}
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
      const metaDefault = app.$getMeta()
      title.value = articleData.title
      meta.value = [
        {
          hid: 'description',
          name: 'description',
          content: articleData.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: metaDefault.siteName,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: articleData.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: articleData.description,
        },
        { hid: 'og:url', property: 'og:url', content: pageUrl },
        {
          hid: 'og:image',
          property: 'og:image',
          content: imageUrl,
        },
        {
          hid: 'og:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'og:site',
          name: 'twitter:site',
          content: metaDefault.twitterUserName,
        },
        {
          hid: 'og:creator',
          name: 'twitter:creator',
          content: metaDefault.twitterUserName,
        },
      ]
      // 現在のページ情報をストアへ格納
      store.commit('page/setArticle', { articleData })
    })

    fetch()

    // TODO: バックエンドから取得したカウント数をどこかで設定
    const shareCountHatena = ref(0)
    const shareCountTwitter = ref(0)
    const shareCountFacebook = ref(0)
    const shareCountPocket = ref(0)

    // eslint-disable-next-line no-console
    console.log(article)

    return {
      article,
      pageUrl,
      imageUrl,
      meta,
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
    font-weight: bold;
    font-size: 1.28rem;
    margin-bottom: 0.4rem;
    margin-top: -16px;
  }
  .meta-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    justify-content: space-between;
    align-items: center;
    color: $text;
    .date {
      display: flex;
      flex-wrap: nowrap;
      font-size: 0.8rem;
      padding: 4px;
      padding-right: 0;
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
      margin-top: 96px;
      margin-bottom: 40px;
      padding-bottom: 16px;
      font-size: 1.4rem;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
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
      margin-top: 64px;
      margin-bottom: 28px;
      padding-left: 24px;
      font-size: 1.3rem;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
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
      margin-top: 40px;
      margin-bottom: 24px;
      padding-left: 24px;
      font-size: 1.2rem;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background-image: repeating-linear-gradient(
          #999,
          #999 1px,
          rgba(0, 0, 0, 0) 0px,
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
      font-size: 1.1rem;
      margin-top: 32px;
      margin-bottom: 12px;
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
      list-style-type: none;
      margin-bottom: 32px;
    }
    ul li {
      list-style: none;
      position: relative;
      padding-left: 2rem;
      margin-left: 0.2rem;
      margin-bottom: 0.4rem;
      &::before {
        content: ' ';
        width: 10px;
        height: 10px;
        background: #3e3e3e;
        box-shadow: -1px -1px 1px rgba(97, 97, 97, 0.15) inset;
        display: block;
        position: absolute;
        border-radius: 20%;
        left: 0.32rem;
        top: 0.4rem;
      }
    }
    ol li {
      list-style: none;
      position: relative;
      padding-left: 2rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      margin-left: 0.4rem;
      margin-bottom: 0.2rem;
      &::before {
        background: #333;
        counter-increment: number;
        content: counter(number);
        color: #fff;
        width: 1.3rem;
        height: 1.3rem;
        font-size: 0.7em;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        display: block;
        text-align: center;
        line-height: 1.4rem;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0.28rem;
      }
    }
    strong {
      font-weight: bold;
    }
    span.line {
      display: inline;
      background: linear-gradient(rgba(255, 255, 141, 0) 50%, #fff59d 70%);
      padding-bottom: 0;
    }

    blockquote {
      position: relative;
      padding: 10px 15px 10px 60px;
      box-sizing: border-box;
      font-style: italic;
      background: #efefef;
      color: #555;
      margin-bottom: 30px;
    }

    blockquote::before {
      display: inline-block;
      position: absolute;
      top: 18px;
      left: 15px;
      content: '\f10d';
      font-family: 'Font Awesome 5 Free';
      color: #cfcfcf;
      font-size: 30px;
      line-height: 1;
      font-weight: 900;
    }

    blockquote p {
      padding: 0;
      margin: 10px 0;
      line-height: 1.7;
    }

    blockquote cite {
      display: block;
      text-align: right;
      color: #888;
      font-size: 0.9em;
    }
  }
}
</style>
