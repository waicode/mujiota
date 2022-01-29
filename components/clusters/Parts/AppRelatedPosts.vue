<template>
  <div class="related">
    <h2 class="related-title">あわせて読みたい</h2>
    <div class="related-posts">
      <ul class="related-list">
        <template v-for="(article, index) in articles">
          <li :key="`li-${article.id}`">
            <NuxtLink :to="`/${article.id}/${article.slug}`">
              <div class="wrap">
                <div class="eyecatch">
                  <AppAssetsImage
                    :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
                  />
                </div>
                <div class="post-contents">
                  <h3 class="post-title">{{ article.title }}</h3>
                  <div class="post-description">
                    {{ article.description }}
                  </div>

                  <div class="meta-wrap">
                    <div class="post-date">
                      <span
                        class="date-updated"
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
<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    articles: {
      required: true,
      type: Array,
    },
  },
  computed: {
    faCalendarAlt() {
      return faCalendarAlt
    },
    faRedoAlt() {
      return faRedoAlt
    },
  },
}
</script>
<style lang="scss" scoped>
.related-title {
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
.related-list {
  hr {
    margin: $scale4 0;
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .eyecatch {
      display: block;
      width: 28%;
      height: auto;
      padding: $scale8 0;
      img {
        vertical-align: top;
      }
    }
    .post-contents {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      width: 68%;
      height: auto;
      min-height: 132px;
      padding: $scale8 0;
      .post-title {
        margin-bottom: $scale8;
        font-size: $font-size-104rem;
        font-weight: $font-weight-700;
        color: $text;
      }
      .post-description {
        font-size: $font-size-092rem;
        color: $text;
      }
      .meta-wrap {
        display: flex;
        justify-content: flex-start;
        color: $text;
        .post-date {
          display: flex;
          padding-top: $scale8;
          font-size: $font-size-081rem;
          .date-published {
            margin-right: $scale12;
          }
        }
      }
    }
  }
}
</style>
