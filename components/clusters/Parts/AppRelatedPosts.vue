<template>
  <div class="AppRelatedPosts">
    <h2 class="AppRelatedPosts__RelatedTitle">あわせて読みたい</h2>
    <div class="AppRelatedPosts__RelatedPosts">
      <ul class="AppRelatedPosts__RelatedList">
        <template v-for="(article, index) in articles">
          <li :key="`li-${article.id}`">
            <NuxtLink :to="`/${article.id}/${article.slug}`">
              <div class="AppRelatedPosts__ArticleWrapper">
                <div class="AppRelatedPosts__ArticleEyecatch">
                  <AppAssetsImage
                    :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
                  />
                </div>
                <div class="AppRelatedPosts__ArticleContents">
                  <h3 class="AppRelatedPosts__ArticleTitle">
                    {{ article.title }}
                  </h3>
                  <div class="AppRelatedPosts__ArticleDescription">
                    {{ article.description }}
                  </div>

                  <div class="AppRelatedPosts__ArticleMeta">
                    <div class="AppRelatedPosts__ArticleDate">
                      <span
                        class="AppRelatedPosts__ArticleDateUpdated"
                        itemprop="updatedAt"
                        :content="article.updatedAt"
                      >
                        <fa :icon="faCalendarAlt" class="fa-redo-alt" />
                        <span>{{ article.updatedAt | dateFormatted }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
          <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
        </template>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

/**
 * ## 関連記事リスト
 *
 * 関連記事の一覧を表示するコンポーネント。
 * Contentの記事情報を受け取る。
 */
export default defineComponent({
  name: 'AppRelatedPosts',
  props: {
    /**
     * 記事一覧。
     * Contentの記事情報のリスト。
     * 表示する関連記事情報を受け取る。
     */
    articles: {
      required: true,
      type: Array,
    },
  },
  setup() {
    return {
      faCalendarAlt,
      faRedoAlt,
    }
  },
})
</script>
<style lang="scss">
.AppRelatedPosts {
  &__RelatedTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: $scale28;
    font-size: $font-size-168rem;
    font-weight: $font-weight-700;
    text-align: center;
    @media (max-width: $tablet) {
      font-size: $font-size-132rem;
    }
    &::before,
    &::after {
      width: $border-width2;
      height: $font-size-168rem;
      content: '';
      background-color: $text;
    }
    &::before {
      margin-right: $scale32;
      transform: rotate(-90deg);
    }
    &::after {
      margin-left: $scale32;
      transform: rotate(90deg);
    }
  }
  &__RelatedList {
    hr {
      margin: $scale4 0;
    }
  }
  &__ArticleWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__ArticleEyecatch {
    display: block;
    width: 28%;
    height: auto;
    padding: $scale8 0;
    img {
      vertical-align: top;
    }
  }
  &__ArticleContents {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 68%;
    height: auto;
    min-height: 132px;
    padding: $scale8 0;
  }
  &__ArticleTitle {
    margin-bottom: $scale8;
    font-size: $font-size-104rem;
    font-weight: $font-weight-700;
    color: $text;
  }
  &__ArticleDescription {
    font-size: $font-size-092rem;
    font-weight: $font-weight-400;
    line-height: $line-height-160;
    color: $text;
  }
  &__ArticleMeta {
    display: flex;
    justify-content: flex-start;
    color: $text;
  }
  &__ArticleDate {
    display: flex;
    padding-top: $scale8;
    font-size: $font-size-081rem;
  }
}
</style>
