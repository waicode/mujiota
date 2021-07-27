<template>
  <article v-if="article" class="post">
    <h1 class="page-title">{{ article.title }}</h1>
    <div class="meta-wrap">
      <div class="date">
        <span class="date-published">
          <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
          <span>{{ article.publishedAt | dateFormatted }}</span>
        </span>
        <span class="date-updated">
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
      <AssetsImage
        :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
      />
    </div>
    <div class="description">
      <p>{{ article.description }}</p>
    </div>
    <TableOfContents :article="article" />
    <ShareButtonsTop :article="article" />
    <NuxtContent class="article" :document="article" />
    <ShareButtonsBottom :article="article" />
    <RelatedPosts :articles="relatedArticles" />
  </article>
</template>

<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

import AssetsImage from '@/components/AssetsImage.vue'
import TableOfContents from '@/components/Parts/TableOfContents.vue'
import ShareButtonsTop from '@/components/Parts/ShareButtonsTop.vue'
import ShareButtonsBottom from '@/components/Parts/ShareButtonsBottom.vue'
import RelatedPosts from '@/components/Parts/RelatedPosts.vue'

export default {
  components: {
    AssetsImage,
    TableOfContents,
    ShareButtonsTop,
    ShareButtonsBottom,
    RelatedPosts,
  },
  async asyncData({ $content, params }) {
    let article = ''
    let relatedArticles = []
    try {
      article = await $content('articles', params.id, params.slug).fetch()
    } catch {
      // TODO:無い場合はリダイレクト
    }
    try {
      relatedArticles = await $content('articles', { deep: true })
        .where({
          category: article.category,
          id: { $ne: article.id },
        })
        .fetch()
    } catch {}
    return { article, relatedArticles }
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
<style lang="scss">
.post {
  h1.page-title {
    font-weight: bold;
    font-size: 1.28rem;
    margin-bottom: 0.4rem;
    margin-top: -16px;
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
  .eyecatch {
    img {
      width: 100%;
    }
  }
  .description {
    margin-top: 28px;
    p {
      margin-bottom: 18px !important;
    }
  }
  .description,
  .article {
    p {
      margin-bottom: 32px;
      line-height: 2;
    }
    h2 {
      position: relative;
      margin-top: 96px;
      margin-bottom: 40px;
      padding-bottom: 16px;
      font-size: 1.4rem;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background-image: repeating-linear-gradient(
          45deg,
          #e0e0e0 0,
          #e0e0e0 1px,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 50%
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
      margin-top: 64px;
      margin-bottom: 28px;
      padding-left: 24px;
      font-size: 1.3rem;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background-color: #e0e0e0;
      }
      a {
        .icon {
          display: none;
        }
      }
    }
    h4 {
      position: relative;
      margin-top: 40px;
      margin-bottom: 24px;
      padding-left: 24px;
      font-size: 1.2rem;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background-image: repeating-linear-gradient(
          #999,
          #999 1px,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 4px
        );
      }
      a {
        .icon {
          display: none;
        }
      }
    }
    h5 {
      font-size: 1.1rem;
      margin-top: 32px;
      margin-bottom: 12px;
      font-weight: bold;
      line-height: 2em;
      letter-spacing: 1px;
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
      list-style-type: none;
      margin-bottom: 32px;
    }
    ul li {
      list-style: none;
      position: relative;
      padding-left: 2rem;
      margin-left: 0.2rem;
      margin-bottom: 0.4rem;
      &::before {
        content: ' ';
        width: 10px;
        height: 10px;
        background: #3e3e3e;
        box-shadow: -1px -1px 1px rgba(97, 97, 97, 0.15) inset;
        display: block;
        position: absolute;
        border-radius: 20%;
        left: 0.32rem;
        top: 0.4rem;
      }
    }
    ol li {
      list-style: none;
      position: relative;
      padding-left: 2rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      margin-left: 0.4rem;
      margin-bottom: 0.2rem;
      &::before {
        background: #333;
        counter-increment: number;
        content: counter(number);
        color: #fff;
        width: 1.3rem;
        height: 1.3rem;
        font-size: 0.7em;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        display: block;
        text-align: center;
        line-height: 1.4rem;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0.28rem;
      }
    }
    strong {
      font-weight: bold;
    }
    span.line {
      display: inline;
      background: linear-gradient(rgba(255, 255, 141, 0) 50%, #fff59d 70%);
      padding-bottom: 0;
    }

    blockquote {
      position: relative;
      padding: 10px 15px 10px 60px;
      box-sizing: border-box;
      font-style: italic;
      background: #efefef;
      color: #555;
      margin-bottom: 32px;
    }

    blockquote::before {
      display: inline-block;
      position: absolute;
      top: 18px;
      left: 15px;
      content: '';
      color: #cfcfcf;
      font-size: 30px;
      line-height: 1;
      font-weight: 900;
    }

    blockquote p {
      padding: 0;
      margin: 10px 0;
      line-height: 1.7;
    }

    blockquote cite {
      display: block;
      text-align: right;
      color: #888;
      font-size: 0.9em;
    }
  }
}
</style>
