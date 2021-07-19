<template>
  <div class="related">
    <h2 class="related-title">あわせて読みたい</h2>
    <div class="related-posts">
      <ul class="related-list">
        <li v-for="article in articles" :key="article.id">
          <a href="#">
            <div class="eyecatch">
              <AssetsImage
                :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
              />
            </div>
            <div class="date">{{ article.updatedAt | dateFormatted }}</div>
            <h3 class="related-post-title">{{ article.title }}</h3>
          </a>
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
</style>
