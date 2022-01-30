<template>
  <div v-if="article" class="AppRelatedLink">
    <nuxt-link :to="link">
      <div class="columns AppRelatedLink__LinkWrapper">
        <div
          class="AppRelatedLink__LinkImage column is-3-desktop is-5-tablet is-12-mobile"
        >
          <AppAssetsImage
            :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
          />
        </div>
        <div
          class="AppRelatedLink__LinkInfo column is-9-desktop is-7-tablet is-12-mobile"
        >
          <div class="AppRelatedLink__LinkTitle">
            {{ article.title }}
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
  onMounted,
  Ref,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { Article, isArticle } from '~/store'

export default defineComponent({
  name: 'AppRelatedLink',
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const article = ref() as Ref<Article>

    const { $content } = useContext()

    // TODO: composableへ
    const getContnt = async () => {
      // slugを指定しないため、記事が要素に1つ入った配列が返却される
      const articleDataArray = await $content('articles', props.id)
        .fetch<Article>()
        .catch()
      // 配列から1件取り出す
      const articles = articleDataArray as Article[]
      // eslint-disable-next-line prefer-destructuring
      article.value = articles[0]
    }

    onMounted(() => {
      getContnt()
    })

    const link = computed(() =>
      isArticle(article) ? `/${article.id}/${article.slug}` : ''
    )

    return {
      faCalendarAlt,
      link,
    }
  },
})
</script>

<style lang="scss">
.AppRelatedLink {
  margin: $scale28 0;
}
a {
  .AppRelatedLink {
    &__LinkWrapper {
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
    // &__LinkInfo {
    // }
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
    &__LinkDate {
      font-size: $font-size-096rem;
    }
  }
}
</style>
