<template>
  <article class="archive">
    <a href="#">
      <div class="wrap">
        <div class="eyecatch">
          <img :src="imgSrcPath" />
        </div>
        <div class="contents">
          <h2 class="post-title">
            {{ title }}
          </h2>
          <div class="description">
            <p>
              {{ description }}
            </p>
          </div>
          <div class="meta-wrap">
            <div class="date">
              <p
                class="date-published"
                itemprop="datePublished"
                :content="datePublished"
              >
                <fa :icon="faCalendarAlt" class="fa-calendar-alt" />
                <span>{{ dateFormatted(datePublished) }}</span>
              </p>
              <p
                class="date-updated"
                itemprop="dateUpdated"
                :content="dateUpdated"
              >
                <fa :icon="faRedoAlt" class="fa-redo-alt" />
                <span>{{ dateFormatted(dateUpdated) }}</span>
              </p>
            </div>
            <div class="tags">
              <span class="tag is-light">健康</span>
              <span class="tag is-light">コーヒー</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>
<script>
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
export default {
  props: {
    postId: {
      require: true,
      type: String,
      default: '',
    },
    postSlug: {
      require: true,
      type: String,
      default: '',
    },
    imgFormat: {
      require: true,
      type: String,
      default: 'jpeg',
    },
    title: {
      require: true,
      type: String,
      default: '',
    },
    description: {
      require: true,
      type: String,
      default: '',
    },
    datePublished: {
      require: true,
      type: Date,
      default: null,
    },
    dateUpdated: {
      require: false,
      type: Date,
      default: null,
    },
  },
  data() {
    return {
      format,
      imgSrcPath: require(`~/assets/images/eyecatch/${this.postId}/${this.postSlug}.${this.imgFormat}`),
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
    dateFormatted(date) {
      return this.format(date, 'yyyy-MM-dd')
    },
  },
}
</script>
<style lang="scss" scoped>
$text-color: #333;
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
    }
    .contents {
      width: 56%;
      .post-title {
        font-size: 1.24rem;
        font-weight: bold;
        color: $text-color;
        margin-bottom: 8px;
      }
      .description {
        font-size: 0.86rem;
        color: $text-color;
        margin-bottom: 12px;
      }
      .meta-wrap {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        color: $text-color;
      }
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
</style>
