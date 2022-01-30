<template>
  <div class="MujiotaIdSlugPage">
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
  </div>
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
import useHeaderMeta from '~/composables/useHeaderMeta'

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
          // eslint-disable-next-line import/no-dynamic-require, global-require
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
.MujiotaIdSlugPage {
  .post {
    h1.page-title {
      margin-top: $scale-minus16;
      margin-bottom: $scale8;
      font-size: $font-size-128rem;
      font-weight: $font-weight-700;
    }
    .meta-wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-bottom: $scale8;
      color: $text;
      .date {
        display: flex;
        flex-wrap: nowrap;
        padding: $scale4;
        padding-right: 0;
        font-size: $font-size-081rem;
        .date-published {
          margin-right: $scale12;
        }
      }
      .tags {
        display: flex;
        padding: $scale4;
        padding-left: 0;
        font-size: $font-size-081rem;
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
        border-radius: $scale4;
      }
    }
    .description {
      margin-top: $scale28;
      p {
        margin-bottom: $scale16 !important;
      }
    }
    .description,
    .article {
      p {
        margin-bottom: $scale32;
        line-height: $line-height-200;
      }
      h2 {
        position: relative;
        padding-bottom: $scale16;
        margin-top: $scale96;
        margin-bottom: $scale40;
        font-size: $font-size-140rem;
        font-weight: $font-weight-700;
        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          content: '';
          background-image: repeating-linear-gradient(
            45deg,
            $repeating-linear-gradient-light-stripe-color 0,
            $repeating-linear-gradient-light-stripe-color 1px,
            transparent 0%,
            transparent 50%
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
        padding-left: $scale24;
        margin-top: $scale64;
        margin-bottom: $scale28;
        font-size: $font-size-132rem;
        font-weight: $font-weight-700;
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          content: '';
          background-color: $border-gray-color;
        }
        a {
          .icon {
            display: none;
          }
        }
      }
      h4 {
        position: relative;
        padding-left: $scale24;
        margin-top: $scale40;
        margin-bottom: $scale24;
        font-size: $font-size-120rem;
        font-weight: $font-weight-700;
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          content: '';
          background-image: repeating-linear-gradient(
            $repeating-linear-gradient-dark-stripe-color,
            $repeating-linear-gradient-dark-stripe-color 1px,
            transparent 0,
            transparent 4px
          );
        }
        a {
          .icon {
            display: none;
          }
        }
      }
      h5 {
        margin-top: $scale32;
        margin-bottom: $scale12;
        font-size: $font-size-110rem;
        font-weight: $font-weight-700;
        line-height: $line-height-200;
        letter-spacing: $letter-spacing-1;
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
        margin-bottom: $scale32;
        list-style-type: none;
      }
      ul li {
        position: relative;
        padding-left: $scale32;
        margin-bottom: $scale8;
        margin-left: $scale4;
        list-style: none;
        &::before {
          position: absolute;
          top: 8px;
          left: 4px;
          display: block;
          width: 10px;
          height: 10px;
          content: ' ';
          background: $list-disc-bg-color;
          border-radius: $border-radius-rate20;
          box-shadow: -1px -1px 1px $list-disc-box-shadow-color inset;
        }
      }
      ol li {
        position: relative;
        padding-left: $scale32;
        margin-bottom: $scale8;
        margin-left: $scale4;
        list-style: none;
        &::before {
          position: absolute;
          top: 8px;
          left: 4px;
          display: block;
          width: 21px;
          height: 21px;
          font-family: 'Lato', sans-serif;
          font-size: $font-size-070rem;
          font-weight: $font-weight-700;
          line-height: $font-size-140rem;
          color: $white-color;
          text-align: center;
          content: counter(number);
          counter-increment: number;
          background: $list-number-bg-color;
          border-radius: $border-radius-rate50;
        }
      }
      strong {
        font-weight: $font-weight-700;
      }
      span.line {
        display: inline;
        padding-bottom: 0;
        background: linear-gradient(
          $linear-gradient-white-color 50%,
          $linear-gradient-yellow-color 70%
        );
      }

      blockquote {
        position: relative;
        box-sizing: border-box;
        padding: $scale12 $scale16 $scale12 $scale60;
        margin-bottom: $scale32;
        font-style: italic;
        color: $blockquote-text-color;
        background: $blockquote-bg-color;
      }

      blockquote::before {
        position: absolute;
        top: 18px;
        left: 15px;
        display: inline-block;
        font-family: 'Font Awesome 5 Free';
        font-size: $font-size-180rem;
        font-weight: $font-weight-900;
        line-height: $line-height-100;
        color: $blockquote-icon-color;
        content: '\f10d';
      }

      blockquote p {
        padding: 0;
        margin: $scale12 0;
        line-height: $line-height-160;
      }

      blockquote cite {
        display: block;
        font-size: $font-size-092rem;
        color: $blockquote-cite-text-color;
        text-align: right;
      }
    }
  }
}
</style>
