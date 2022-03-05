<template>
  <div class="MujiotaIdSlugPage">
    <article v-if="article">
      <h1 class="MujiotaIdSlugPage__PageTitle">{{ article.title }}</h1>
      <div class="MujiotaIdSlugPage__MetaWrapper">
        <div class="MujiotaIdSlugPage__Date">
          <span class="MujiotaIdSlugPage__DatePublished">
            <b-icon pack="far" icon="calendar-alt" />
            <span>{{ article.createdAt | dateFormatted }}</span>
          </span>
          <span
            v-if="article.updatedAt != article.createdAt"
            class="MujiotaIdSlugPage__DateUpdated"
          >
            <b-icon pack="fas" icon="redo" />
            <span>{{ article.updatedAt | dateFormatted }}</span>
          </span>
        </div>
        <div v-if="article.tags" class="MujiotaIdSlugPage__Tags">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="MujiotaIdSlugPage__Tag tag is-light"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="MujiotaIdSlugPage__Eyecatch">
        <AppAssetsImage
          :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
        />
      </div>
      <div class="MujiotaIdSlugPage__Description">
        <p>{{ article.description }}</p>
      </div>
      <div class="MujiotaIdSlugPage__TocWrapper">
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
      <NuxtContent class="MujiotaIdSlugPage__Article" :document="article" />
      <AppShareButtonsBottom
        :page-url="pageUrl"
        :title="article.title"
        :share-count-hatena="shareCountHatena"
        :share-count-twitter="shareCountTwitter"
        :share-count-facebook="shareCountFacebook"
        :share-count-pocket="shareCountPocket"
      />
      <AppRelatedPosts v-if="relatedArticles" :articles="relatedArticles" />
    </article>
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

import useFetchPost from '~/composables/useFetchPost'
import useFetchRelatedPosts from '~/composables/useFetchRelatedPosts'
import useHeaderMeta from '~/composables/useHeaderMeta'

import { Article } from '~/store'

/**
 * ## 個別記事ページ
 */
export default defineComponent({
  name: 'MujiotaIdSlugPage',
  setup() {
    const context = useContext()
    const { $config, params, app, error } = context

    const article = ref<Article>()
    const relatedArticles = ref<Article[]>()
    const pageUrl = ref('')
    const imageUrl = ref('')

    const { title, meta } = useMeta()

    const { fetch } = useFetch(async () => {
      try {
        // 記事ページ情報を取得
        article.value = await useFetchPost(
          params.value.id,
          context as unknown as Context
        )

        if (!article.value) {
          // 見つからない場合はNOTFOUND
          error({
            statusCode: 404,
          })
        }

        pageUrl.value = `${$config.baseUrl}/${article.value.id}/${article.value.slug}`
        imageUrl.value =
          $config.baseUrl +
          // eslint-disable-next-line import/no-dynamic-require, global-require
          require(`~/assets/images/eyecatch/${article.value.id}/${article.value.slug}.${article.value.imageFormat}`)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }

      if (article.value) {
        if (article.value.category) {
          try {
            // 関連記事の取得
            relatedArticles.value = await useFetchRelatedPosts(
              article.value.category,
              article.value.id,
              context as unknown as Context
            )
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
          }
        }

        // メタ情報
        const metaData = app.$getMeta(
          article.value.title,
          article.value.description,
          pageUrl.value,
          imageUrl.value
        )
        title.value = article.value.title
        meta.value = useHeaderMeta(metaData).meta

        // 現在のページ情報をストアへ格納
        app.$accessor.setArticle({ article: article.value })
      }
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
  &__PageTitle {
    margin-top: $scale-minus16;
    margin-bottom: $scale8;
    font-size: $font-size-128rem;
    font-weight: $font-weight-700;
  }
  &__MetaWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $scale8;
    color: $text;
  }
  &__Date {
    display: flex;
    flex-wrap: nowrap;
    padding: $scale4;
    padding-right: 0;
    font-size: $font-size-081rem;
  }
  &__DatePublished {
    margin-right: $scale12;
  }
  &__Tags {
    display: flex;
    padding: $scale4;
    padding-left: 0;
    font-size: $font-size-081rem;
  }
  &__Tag {
    &:not(:last-child) {
      margin-right: $scale8;
    }
  }
  &__TocWrapper {
    @media (max-width: $tablet) {
      // モバイルは目次を非表示
      display: none;
    }
  }
  &__Eyecatch {
    img {
      width: 100%;
      border-radius: $scale4;
    }
  }
  &__Description {
    margin-top: $scale28;
    p {
      margin-bottom: $scale16 !important;
    }
  }
  &__Description,
  &__Article {
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
</style>
