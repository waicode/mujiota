<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <b-field>
        <b-input
          placeholder="検索したい文字列を入力…"
          type="search"
          icon-pack="fas"
          icon="search"
        >
        </b-input>
      </b-field>
      <b-button label="閉じる" @click="$parent.close()" />
    </header>
    <section class="modal-card-body">
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
    <footer class="modal-card-foot"></footer>
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
<style scoped>
.modal-background,
.animation-content {
  z-index: 40;
}
</style>
