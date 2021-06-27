<template>
  <div v-if="article" class="related-article-link">
    <nuxt-link :to="link">
      <figure>
        <AssetsImage
          :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
        />
      </figure>
      <div class="inbox">
        <p class="inbox-title">
          {{ article.title }}
        </p>
        <span class="inbox-date">{{ dateFormatted(article.publishedAt) }}</span>
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
    console.log('this.article', this.article)
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
          console.log('res', res)
          this.article = res[0]
        })
    },
  },
}
</script>
