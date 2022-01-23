<template>
  <div v-if="article" class="related-link">
    <nuxt-link :to="link">
      <div class="columns wrap">
        <div class="link-image column is-3-desktop is-5-tablet is-12-mobile">
          <AppAssetsImage
            :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
          />
        </div>
        <div class="link-info column is-9-desktop is-7-tablet is-12-mobile">
          <div class="link-title">
            {{ article.title }}
          </div>
          <div class="link-date">
            <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
            <span>{{ article.updatedAt | dateFormatted }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      article: null,
    }
  },
  computed: {
    faCalendarAlt() {
      return faCalendarAlt
    },
    link() {
      return `/${this.article.id}/${this.article.slug}`
    },
  },
  mounted() {
    this.getContnt()
  },
  methods: {
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
    .wrap {
      padding: 0.25rem;
      color: #333;
      text-decoration: none;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 2px;
      box-shadow: 0 0 1px #efefef;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #666;
        background: rgba(167, 255, 235, 0.24);
      }
      .link-image {
        img {
          vertical-align: top;
          border: 1px solid #e0e0e0;
          box-shadow: 0 0 1px #eee;
        }
      }
      .link-info {
        .link-title {
          margin-bottom: 8px;
          font-weight: bold;
          &::before {
            position: relative;
            top: -2px;
            display: inline-block;
            width: 6em;
            padding: 0.2em;
            margin-right: 0.5em;
            font-size: 0.7em;
            font-weight: bold;
            color: #fff;
            text-align: center;
            content: '関連リンク';
            background: #111;
            border-radius: 2px;
          }
        }
        .link-date {
          font-size: 0.84rem;
        }
      }
    }
  }
}
</style>
