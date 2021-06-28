<template>
  <article v-if="article" class="post">
    <h1 class="page-title">{{ article.title }}</h1>
    <div class="eyecatch">
      <AssetsImage
        :path="`images/eyecatch/${article.id}/${article.slug}.${article.imageFormat}`"
      />
    </div>
    <TableOfContents :article="article" />
    <NuxtContent :document="article" />
  </article>
</template>

<script>
import AssetsImage from '@/components/AssetsImage.vue'
import TableOfContents from '@/components/Parts/TableOfContents.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import RelatedLink from '@/components/RelatedLink.vue'
import KaerebaLink from '@/components/KaerebaLink.vue'

export default {
  components: {
    AssetsImage,
    // eslint-disable-next-line vue/no-unused-components
    ExternalLink,
    // eslint-disable-next-line vue/no-unused-components
    RelatedLink,
    // eslint-disable-next-line vue/no-unused-components
    KaerebaLink,
    TableOfContents,
  },
  async asyncData({ $content, params }) {
    let article = ''
    try {
      article = await $content('articles', params.id, params.slug).fetch()
    } catch {
      // TODO:無い場合はリダイレクト
    }
    return { article }
  },
}
</script>
<style lang="scss">
.post {
  p {
    margin-bottom: 32px;
    line-height: 2;
  }
  h2 {
    position: relative;
    margin-top: 96px;
    margin-bottom: 40px;
    padding-bottom: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-image: repeating-linear-gradient(
        90deg,
        #999,
        #999 1px,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0) 4px
      );
    }
    a {
      .icon {
        display: none;
      }
    }
  }
}
</style>
