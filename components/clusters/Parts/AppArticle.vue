<template>
  <article class="AppArticle">
    <NuxtLink
      :to="`/${article.id}/${article.slug}`"
      @click.native="$emit('link-click')"
    >
      <div class="columns">
        <div
          class="AppArticle__Eyecatch column is-5-desktop is-4-tablet is-12-mobile"
        >
          <AppAssetsImage
            :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
          />
        </div>
        <div
          class="AppArticle__Contents column is-7-desktop is-8-tablet is-12-mobile"
        >
          <h2 class="AppArticle__Title">
            {{ article.title }}
          </h2>
          <div class="AppArticle__Description">
            <p>
              {{ article.description }}
            </p>
          </div>
          <div class="AppArticle__Meta">
            <div class="AppArticle__Date">
              <span
                class="AppArticle__DatePublished"
                itemprop="createdAt"
                :content="article.createdAt"
              >
                <b-icon pack="far" icon="calendar-alt" />
                <span>{{ article.createdAt | dateFormatted }}</span>
              </span>
              <span
                v-if="article.updatedAt != article.createdAt"
                class="AppArticle__DateUpdated"
                itemprop="updatedAt"
                :content="article.updatedAt"
              >
                <b-icon pack="fas" icon="calendar" />
                <span>{{ article.updatedAt | dateFormatted }}</span>
              </span>
            </div>
            <div v-if="article.tags" class="AppArticle__Tags">
              <span
                v-for="tag in article.tags"
                :key="`${article.id}-${tag}`"
                class="AppArticle__Tag tag is-light"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { Article } from '~/store'

/**
 * ## 記事
 *
 * 一覧表示用の記事コンポーネント。
 * 記事（Article）を受け取り、情報を表示する。
 * アイキャッチ画像・タイトル・リード文・日付・タグで構成される。
 */
export default defineComponent({
  name: 'AppArticle',
  /**
   * 記事（Article）。
   */
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  emits: [
    /**
     * リンクがクリックされたとき。
     * 検索モーダル画面を閉じるときに使われる。
     */
    'link-click',
  ],
})
</script>
<style lang="scss">
.AppArticle {
  height: 216px;
  @media (max-width: $desktop) {
    height: auto;
  }
  @media (max-width: $tablet) {
    height: auto;
  }
  &__Eyecatch {
    height: auto;
    padding: $scale32;
    @media (max-width: $desktop) {
      padding: $scale12;
    }
    img {
      height: auto;
      max-height: 100%;
      vertical-align: top;
      border-radius: $border-width2;
    }
  }
  &__Contents {
    min-height: 172px;
  }
  &__Title {
    margin-bottom: $scale8;
    font-size: $font-size-124rem;
    font-weight: $font-weight-700;
    color: $text;
    @media (max-width: $desktop) {
      font-size: $font-size-110rem;
    }
    @media (max-width: $tablet) {
      font-size: $font-size-124rem;
    }
  }
  &__Description {
    margin-bottom: $scale12;
    font-size: $font-size-086rem;
    font-weight: $font-weight-400;
    line-height: $line-height-160;
    color: $text;
    @media (max-width: $desktop) {
      font-size: $font-size-081rem;
    }
    @media (max-width: $tablet) {
      font-size: $font-size-086rem;
    }
  }
  &__Meta {
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
}
</style>
