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
  padding-bottom: 28px;
  font-size: 1.68rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: $tablet) {
    font-size: 1.32rem;
  }
  &::before,
  &::after {
    width: 2px;
    height: 1.68rem;
    content: '';
    background-color: $text;
  }
  &::before {
    margin-right: 32px;
    transform: rotate(-90deg);
  }
  &::after {
    margin-left: 32px;
    transform: rotate(90deg);
  }
}
.related-list {
  hr {
    margin: 0.24rem 0;
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .eyecatch {
      display: block;
      width: 28%;
      height: auto;
      padding: 0.8rem 0;
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
      padding: 0.8rem 0;
      .post-title {
        margin-bottom: 8px;
        font-size: 1.04rem;
        font-weight: bold;
        color: $text;
      }
      .post-description {
        font-size: 0.92rem;
        color: $text;
      }
      .meta-wrap {
        display: flex;
        justify-content: flex-start;
        color: $text;
        .post-date {
          display: flex;
          padding-top: 8px;
          font-size: 0.8rem;
          .date-published {
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
