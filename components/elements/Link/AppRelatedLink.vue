<template>
  <div v-if="article" class="AppRelatedLink">
    <nuxt-link :to="link">
      <div class="AppRelatedLink__Wrapper columns">
        <div
          class="AppRelatedLink__LinkImage column is-3-desktop is-5-tablet is-12-mobile"
        >
          <AppAssetsImage
            :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
          />
        </div>
        <div class="column is-9-desktop is-7-tablet is-12-mobile">
          <div class="AppRelatedLink__LinkTitle">
            {{ article.title }}
          </div>
          <div class="AppRelatedLink__LinkDescription">
            {{ article.description }}
          </div>
          <div class="AppRelatedLink__LinkDate">
            <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
            <span>{{ article.updatedAt | dateFormatted }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'

import useFetchPost from '~/composables/useFetchPost'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { Article, isArticle } from '~/store'

/**
 * ## 関連記事用リンクボックス
 *
 * 関連記事表示用のコンポーネント。
 * 記事IDを受け取り、関連記事のリンクボックスを表示する。
 */
export default defineComponent({
  name: 'AppRelatedLink',
  props: {
    /**
     * 記事ID。
     */
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const article = ref<Article>()

    const context = useContext()

    const { fetch } = useFetch(async () => {
      article.value = await useFetchPost(
        props.id,
        context as unknown as Context
      )
    })

    fetch()

    const link = computed(() =>
      isArticle(article.value)
        ? `/${article.value.id}/${article.value.slug}`
        : ''
    )

    return {
      article,
      faCalendarAlt,
      link,
    }
  },
})
</script>
<style lang="scss">
.AppRelatedLink {
  margin: $scale28 0;

  &__Wrapper {
    padding: $scale4;
    color: $black-color;
    text-decoration: none;
    background: $white-color;
    border: $border-width1 solid $border-gray-color;
    border-radius: $border-radius2;
    box-shadow: 0 0 2px $link-box-shadow-color;
    transition: 0.3s ease-in-out;
    &:hover {
      color: $link-hover-color;
      background: $link-hover-bg-color;
    }
  }

  &__LinkImage {
    img {
      vertical-align: top;
      border: $border-width1 solid $border-gray-color;
      box-shadow: 0 0 1px $link-image-shadow-color;
    }
  }

  &__LinkTitle {
    margin-bottom: $scale8;
    font-weight: $font-weight-700;
    &::before {
      position: relative;
      top: -2px;
      display: inline-block;
      width: 6em;
      padding: $scale4;
      margin-right: $scale8;
      font-size: $font-size-070rem;
      font-weight: $font-weight-700;
      color: $white-color;
      text-align: center;
      content: '関連リンク';
      background: $dark-black-color;
      border-radius: $border-radius2;
    }
  }
  &__LinkDescription {
    margin-bottom: $scale12;
    font-size: $font-size-086rem;
    font-weight: $font-weight-400;
    line-height: $line-height-160;
    color: $text;
  }

  &__LinkDate {
    font-size: $font-size-096rem;
  }
}
</style>
