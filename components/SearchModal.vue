<template>
  <div class="search-modal">
    <div class="modal-card" style="width: auto">
      <section class="modal-card-body">
        <div class="search-box">
          <div class="columns">
            <div class="column is-10">
              <b-field>
                <b-input
                  placeholder="検索キーワードを入力..."
                  type="search"
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
        <div class="post-list">
          <div
            v-for="(article, index) in $store.state.articles"
            :key="article.id"
          >
            <Article :article="article" />
            <hr
              v-if="index < $store.state.articles.length - 1"
              :key="`hr-${article.id}`"
            />
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
}
</script>
