<template>
  <div class="side-bar">
    <template v-if="$store.state.popularArticles.length > 0">
      <h2>読まれている記事</h2>
      <div class="side-content">
        <ol class="popular-list">
          <li
            v-for="article in $store.state.popularArticles.slice(0, 5)"
            :key="article.rank"
          >
            <NuxtLink
              :to="`/${article.data.post_id}/${article.data.post_slug}`"
            >
              <h3>
                {{ getTitle(article.data.post_id) }}
              </h3>
            </NuxtLink>
          </li>
        </ol>
      </div>
    </template>
    <h2>コンセプト</h2>
    <div class="side-content">
      <p class="text-content">
        MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログ。最近はコーヒー・健康ネタが多めです。
      </p>
      <!-- TODO: コンセプトページ追加 -->
      <!-- <p class="text-link-more"><a href="#">> より詳しく見てみる</a></p> -->
    </div>
    <h2>タグ</h2>
    <div class="side-content">
      <template v-if="$store.state.tags.length > 0">
        <div class="dropbox-wrapper">
          <b-dropdown aria-role="list">
            <template #trigger="{ active }">
              <b-button
                label="タグを選択"
                :icon-right="active ? 'menu-up' : 'menu-down'"
              />
            </template>
            <b-dropdown-item
              v-for="tag in $store.state.tags"
              :key="tag.name"
              has-link
              aria-role="menuitem"
            >
              <nuxt-link :to="tagLink(tag)">{{ tagText(tag) }}</nuxt-link>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    </div>
    <h2>アーカイブ</h2>
    <div class="side-content">
      <template v-if="$store.state.archives.length > 0">
        <div class="dropbox-wrapper">
          <b-dropdown aria-role="list">
            <template #trigger="{ active }">
              <b-button
                label="月を選択"
                :icon-right="active ? 'menu-up' : 'menu-down'"
              />
            </template>

            <b-dropdown-item
              v-for="archive in $store.state.archives"
              :key="archive.month"
              has-link
              aria-role="menuitem"
            >
              <nuxt-link :to="dateLink(archive)">{{
                dateText(archive)
              }}</nuxt-link>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    </div>
    <SideBarRecommendAd />
  </div>
</template>
<script>
export default {
  name: 'MujiotaSideBar',
  methods: {
    tagLink(tag) {
      return `/tag/${this.$getTagSlug(tag.name)}`
    },
    tagText(tag) {
      return `${tag.name}(${tag.count})`
    },
    dateLink(archive) {
      return `/date/${archive.month.slice(0, 4)}/${archive.month.slice(5, 7)}`
    },
    dateText(archive) {
      return `${archive.month.slice(0, 4)}年${archive.month.slice(5, 7)}月(${
        archive.count
      })`
    },
    getTitle(postId) {
      const hit = this.$store.state.articles.find(
        (data) => data.id === Number(postId)
      )
      return hit ? hit.title : ''
    },
  },
}
</script>
<style lang="scss">
$ad-bg-color: #c5e1a5;
$side-bar-link-color: rgb(114 108 108);
.side-bar {
  .ad-side-top {
    width: 250px;
    height: 250px;
    background-color: $ad-bg-color;
    margin: 0 auto 40px;
  }
  h2 {
    margin-bottom: 16px;
    font-size: 1.3125rem;
    font-weight: bold;
  }
  h3 {
    font-size: 0.8175rem;
    font-weight: bold;
  }
  ol.popular-list {
    list-style: none;
    li {
      &:not(:last-child) {
        border-bottom: 1px solid #e0e0e0;
      }
      a {
        text-decoration: none;
        display: block;
        padding: 1em;
        color: $side-bar-link-color;
        h3 {
          font-size: 0.8175rem;
          font-weight: bold;
          @media (max-width: $tablet) {
            font-size: 0.96rem;
          }
        }
      }
    }
  }
  .side-content {
    margin-bottom: 16px;
    p {
      font-size: 0.8175rem;
      @media (max-width: $tablet) {
        font-size: 0.96rem;
      }
    }
    .text-content {
      padding: 4px;
      line-height: 1.6;
      margin-bottom: 4px;
    }
    h3.text-content {
      margin-bottom: 2px;
    }
    .text-link-more {
      text-align: right;
      text-decoration: underline;
      font-size: 0.76rem;
      a {
        color: $side-bar-link-color;
      }
    }
  }
  .dropbox-wrapper {
    margin-bottom: 20px;
  }
  .ad-side-bottom {
    display: block;
    margin: 40px auto;
    width: 250px;
    height: 500px;
    background-color: $ad-bg-color;
  }
}
</style>
