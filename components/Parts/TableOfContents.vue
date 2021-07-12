<template>
  <div class="toc-wrapper">
    <aside class="toc menu">
      <p class="menu-label">目次</p>
      <ul class="menu-list">
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      require: true,
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.toc-wrapper {
  display: flex;
  justify-content: center;
}
.toc {
  width: 80%;
  min-width: 88%;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 1em 2em 1em;
  background: rgba(250, 250, 250, 0.2);
  border: 1px solid #eee;
  box-shadow: 0 0 2px #efefef;
  .menu-label {
    font-weight: bold;
  }
  .menu-list {
    font-size: 0.96rem;
    li {
      a {
        padding-top: 0.56rem;
        padding-bottom: 0.56rem;
        color: #263238;
      }
      &:not(:first-child) {
        a {
          border-top: 1px dashed #e0e0e0;
        }
      }
    }
    .toc2 {
      font-size: 0.96rem;
    }
    .toc3 {
      font-size: 0.92rem;
      padding-left: 8px;
    }
  }
}
</style>
