<template>
  <div class="search-modal">
    <div class="modal-card">
      <section class="modal-card-body">
        <div class="search-box">
          <div class="columns">
            <div class="column is-10">
              <b-field>
                <b-input
                  v-model="searchText"
                  placeholder="検索キーワードを入力..."
                  type="search"
                  autocomplete="off"
                  size="is-large"
                  icon="magnify"
                  class="search-input"
                >
                </b-input>
              </b-field>
            </div>
            <div class="column is-1">
              <b-button
                label="閉じる"
                size="is-large"
                class="close-button"
                @click="$parent.close()"
              />
            </div>
          </div>
        </div>
        <div v-if="searchedArticles.length > 0" class="post-list">
          <div v-for="(article, index) in searchedArticles" :key="article.id">
            <Article :article="article" @link-click="$parent.close()" />
            <hr
              v-if="index < searchedArticles.length - 1"
              :key="`hr-${article.id}`"
            />
          </div>
        </div>
        <div v-else>
          <div>
            <article class="archive notfound">
              <h2 class="post-title">見つかりませんでした。</h2>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Article from '@/components/Article'
export default {
  components: {
    Article,
  },
  data() {
    return {
      searchedArticles: this.$store.state.articles,
      searchText: null,
    }
  },
  watch: {
    searchText(newText) {
      this.search()
    },
  },
  methods: {
    async search() {
      // 一部取得できていない記事があるためfilterと組み合わせて検索
      const articles1 = await this.$content('articles', { deep: true })
        .limit(999)
        .search(this.searchText)
        .sortBy('createdAt', 'desc')
        .fetch()
      const articles2 = this.$store.state.articles.filter(
        (data) =>
          data.title.includes(this.searchText) ||
          data.description.includes(this.searchText)
      )
      // 重複を外す
      this.searchedArticles = articles1
        .concat(articles2)
        .filter(
          (element, index, self) =>
            self.findIndex(
              (e) => e.id === element.id && e.slug === element.slug
            ) === index
        )
    },
  },
}
</script>
<style lang="scss" scoped>
.search-modal {
  .modal-card {
    width: auto;
    max-width: 960px;
    min-width: 880px;
    height: calc(100vh - 40px);
    .modal-card-body {
      overflow: scroll;
      .close-button {
        color: #757575;
      }
    }
  }
  .notfound {
    min-height: 120px;
    width: 905px;
    .post-title {
      font-size: 1.24rem;
      color: $text;
      margin-top: 8px;
      padding: 12px;
    }
  }
}
</style>
