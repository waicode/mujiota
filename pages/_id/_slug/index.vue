<template>
  <article v-if="article" class="post">
    <h1 class="page-title">{{ article.title }}</h1>
    <div class="meta-wrap">
      <div class="date">
        <span class="date-published">
          <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
          <span>{{ dateFormatted(article.publishedAt) }}</span>
        </span>
        <span class="date-updated">
          <fa :icon="faRedoAlt" class="fa-redo-alt" />
          <span>{{ dateFormatted(article.updatedAt) }}</span>
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
    <TableOfContents :article="article" />
    <NuxtContent :document="article" />
  </article>
</template>

<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'

import AssetsImage from '@/components/AssetsImage.vue'
import TableOfContents from '@/components/Parts/TableOfContents.vue'
import Supplement from '@/components/Supplement.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import RelatedLink from '@/components/RelatedLink.vue'
import KaerebaLink from '@/components/KaerebaLink.vue'

export default {
  components: {
    AssetsImage,
    // eslint-disable-next-line vue/no-unused-components
    ExternalLink,
    // eslint-disable-next-line vue/no-unused-components
    RelatedLink,
    // eslint-disable-next-line vue/no-unused-components
    KaerebaLink,
    TableOfContents,
    // eslint-disable-next-line vue/no-unused-components
    Supplement,
  },
  async asyncData({ $content, params }) {
    let article = ''
    try {
      article = await $content('articles', params.id, params.slug).fetch()
    } catch {
      // TODO:無い場合はリダイレクト
    }
    return { article }
  },
  data() {
    return {
      format,
    }
  },
  computed: {
    faCalendarAlt() {
      return faCalendarAlt
    },
    faRedoAlt() {
      return faRedoAlt
    },
  },
  methods: {
    dateFormatted(dateStr) {
      const date = new Date(dateStr)
      return this.format(date, 'yyyy-MM-dd')
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
      height: 4px;
      background-image: repeating-linear-gradient(
        90deg,
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
      width: 4px;
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
      width: 4px;
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
}
</style>
