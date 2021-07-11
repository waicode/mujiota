<template>
  <div v-if="article" class="related-link">
    <nuxt-link :to="link">
      <AssetsImage
        class="inbox-image"
        :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
      />
      <div class="inbox-contents">
        <div class="inbox-title">
          {{ article.title }}
        </div>
        <div class="inbox-date">{{ dateFormatted(article.publishedAt) }}</div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import { format } from 'date-fns'
import AssetsImage from '@/components/AssetsImage.vue'
export default {
  components: {
    AssetsImage,
  },
  props: {
    id: {
      require: true,
      type: String,
      default: null,
    },
  },
  data() {
    return {
      article: null,
      format,
    }
  },
  computed: {
    link() {
      return `/${this.article.id}/${this.article.slug}`
    },
  },
  mounted() {
    this.getContnt()
  },
  methods: {
    dateFormatted(dateStr) {
      if (dateStr) {
        const date = new Date(dateStr)
        return this.format(date, 'yyyy-MM-dd')
      } else {
        return ''
      }
    },
    async getContnt() {
      await this.$content('articles', this.id)
        .fetch()
        .then((res) => {
          this.article = res[0]
        })
        .catch()
    },
  },
}
</script>
<style lang="scss" scoped>
.related-link {
  margin: 1.8em 0;
  a {
    display: flex;
    justify-content: space-between;
    color: #333;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 0 #efefef;
    text-decoration: none;
    padding: 1rem;
    border-radius: 2px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #666;
      background: #e8eaf6;
    }
    .inbox-image {
      width: 20%;
    }
    .inbox-contents {
      width: 76%;
      .inbox-title {
        font-weight: bold;
        margin-bottom: 8px;
        &::before {
          content: '関連リンク';
          font-size: 0.7em;
          font-weight: bold;
          color: rgb(255, 255, 255);
          width: 6em;
          display: inline-block;
          position: relative;
          top: -2px;
          text-align: center;
          margin-right: 0.5em;
          background: rgb(17, 17, 17);
          padding: 0.2em;
          border-radius: 2px;
        }
      }
      .inbox-date {
        font-size: 0.84rem;
      }
    }
  }
}
</style>
