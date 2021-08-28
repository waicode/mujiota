<template>
  <div class="related">
    <h2 class="related-title">あわせて読みたい</h2>
    <div class="related-posts">
      <ul class="related-list">
        <li v-for="article in articles" :key="article.id">
          <NuxtLink :to="`/${article.id}/${article.slug}`">
            <div class="wrap">
              <div class="eyecatch">
                <AssetsImage
                  :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
                />
              </div>
              <div class="contents">
                <h3 class="post-title">{{ article.title }}</h3>
                <div class="meta-wrap">
                  <div class="date">
                    {{ article.updatedAt | dateFormatted }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      require: true,
      type: Array,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.related-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.68rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 28px;
  &::before,
  &::after {
    content: '';
    width: 2px;
    height: 1.68rem;
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
