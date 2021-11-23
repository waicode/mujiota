<template>
  <div class="search-modal">
    <div class="modal-card">
      <section class="modal-card-body">
        <div class="search-box">
          <div class="columns">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <b-field>
                <b-input
                  v-model="searchText"
                  placeholder="検索キーワードを入力..."
                  type="search"
                  autocomplete="off"
                  size="is-medium"
                  icon="magnify"
                  class="search-input"
                >
                </b-input>
              </b-field>
            </div>
            <div class="column is-2-desktop is-2-tablet is-12-mobile">
              <b-button
                label="閉じる"
                size="is-medium"
                class="close-button"
                @click="$parent.close()"
              />
            </div>
          </div>
        </div>
        <div v-if="searchedArticles.length > 0" class="post-list">
          <div v-for="(article, index) in searchedArticles" :key="article.id">
            <AppArticle :article="article" @link-click="$parent.close()" />
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
export default {
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
        .limit(this.$store.state.articles.length)
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
    height: calc(100vh - 40px);
    margin: 0 auto;
    border-radius: 2px;
    @media (max-width: $tablet) {
      max-width: 92%;
      height: calc(100vh - 80px);
    }
    .modal-card-body {
      overflow: scroll;
      padding: 36px;
      @media (max-width: $tablet) {
        padding: 24px;
      }
      .search-box {
        margin-bottom: 24px;
        @media (max-width: $tablet) {
          margin-bottom: 12px;
        }
      }
      .close-button {
        color: #757575;
        display: block;
        margin: 0 0 0 auto;
      }
      @media (max-width: $tablet) {
        .close-button {
          width: 100%;
          margin-bottom: 12px;
        }
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