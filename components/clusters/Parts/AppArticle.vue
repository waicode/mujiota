<template>
  <article class="archive">
    <NuxtLink
      :to="`/${article.id}/${article.slug}`"
      @click.native="$emit('link-click')"
    >
      <div class="columns wrap">
        <div class="eyecatch column is-5-desktop is-5-tablet is-12-mobile">
          <AppAssetsImage
            :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
          />
        </div>
        <div class="contents column is-7-desktop is-7-tablet is-12-mobile">
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
                itemprop="createdAt"
                :content="article.createdAt"
              >
                <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
                <span>{{ article.createdAt | dateFormatted }}</span>
              </span>
              <span
                v-if="article.updatedAt != article.createdAt"
                class="date-updated"
                itemprop="updatedAt"
                :content="article.updatedAt"
              >
                <fa :icon="faRedoAlt" class="fa-redo-alt" />
                <span>{{ article.updatedAt | dateFormatted }}</span>
              </span>
            </div>
            <div v-if="article.tags" class="tags">
              <span
                v-for="tag in article.tags"
                :key="`${article.id}-${tag}`"
                class="tag is-light"
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
<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'MujiotaAirticle',
  props: {
    article: {
      required: true,
      type: Object,
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
    .eyecatch {
      padding: 32px;
      @media (max-width: $desktop) {
        padding: 12px;
      }

      height: auto;
      img {
        vertical-align: top;
        height: auto;
        max-height: 100%;
        border-radius: 2px;
      }
    }
    .contents {
      min-height: 172px;
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
    }
  }
}
</style>