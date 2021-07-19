<template>
  <article class="archive">
    <NuxtLink :to="`/${article.id}/${article.slug}`">
      <div class="wrap">
        <div class="eyecatch">
          <AssetsImage
            :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
          />
        </div>
        <div class="contents">
          <h2 class="post-title">
            {{ article.title }}
          </h2>
          <div class="description">
            <p>
              {{ article.description }}
            </p>
          </div>
          <div class="meta-wrap">
            <div class="date">
              <span
                class="date-published"
                itemprop="publishedAt"
                :content="article.publishedAt"
              >
                <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
                <span>{{ article.publishedAt | dateFormatted }}</span>
              </span>
              <span
                class="date-updated"
                itemprop="updatedAt"
                :content="article.updatedAt"
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
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import AssetsImage from '@/components/AssetsImage.vue'
export default {
  components: {
    AssetsImage,
  },
  props: {
    article: {
      require: true,
      type: Object,
      default: null,
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
.archive {
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .eyecatch {
      display: block;
      padding: 24px;
      width: 40%;
      height: auto;
      img {
        vertical-align: top;
      }
    }
    .contents {
      width: 56%;
      .post-title {
        font-size: 1.24rem;
        font-weight: bold;
        color: $text;
        margin-bottom: 8px;
      }
      .description {
        font-size: 0.86rem;
        color: $text;
        margin-bottom: 12px;
      }
      .meta-wrap {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        color: $text;
        .date {
          display: flex;
          font-size: 0.8rem;
          padding-top: 2px;
          .date-published {
            margin-right: 12px;
          }
        }
        .tags {
          display: flex;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
