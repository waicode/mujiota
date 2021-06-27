<template>
  <div class="toc">
    <ul>
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
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
