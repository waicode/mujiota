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
import { format } from 'date-fns'
export default {
  props: {
    articles: {
      require: true,
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      format,
    }
  },
}
</script>
