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
  margin: $scale28 0;
  a {
    .wrap {
      padding: $scale4;
      color: $black-color;
      text-decoration: none;
      background: $white-color;
      border: $border-width1 solid $border-gray-color;
      border-radius: $border-radius2;
      box-shadow: 0 0 2px $link-box-shadow-color;
      transition: 0.3s ease-in-out;
      &:hover {
        color: $link-hover-color;
        background: $link-hover-bg-color;
      }
      .link-image {
        img {
          vertical-align: top;
          border: $border-width1 solid $border-gray-color;
          box-shadow: 0 0 1px $link-image-shadow-color;
        }
      }
      .link-info {
        .link-title {
          margin-bottom: $scale8;
          font-weight: $font-weight-700;
          &::before {
            position: relative;
            top: -2px;
            display: inline-block;
            width: 6em;
            padding: $scale4;
            margin-right: $scale8;
            font-size: $font-size-070rem;
            font-weight: $font-weight-700;
            color: $white-color;
            text-align: center;
            content: '関連リンク';
            background: $dark-black-color;
            border-radius: $border-radius2;
          }
        }
        .link-date {
          font-size: $font-size-096rem;
        }
      }
    }
  }
}
</style>
