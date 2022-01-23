<template>
  <div class="yomerebalink">
    <div class="columns wrap">
      <div
        v-if="imgFileName"
        class="link-image column is-3-desktop is-5-tablet is-12-mobile"
      >
        <a :href="titleLink" target="_blank">
          <AppAssetsImage :path="assetsImagePath" />
        </a>
      </div>
      <div class="link-info column is-9-desktop is-7-tablet is-12-mobile">
        <div class="link-title">
          <a :href="titleLink" target="_blank">{{ itemTitle }}</a>
        </div>
        <div v-if="authorName" class="link-shop-name">
          {{ authorName }}
        </div>
        <div class="link-items">
          <div v-if="amazonItemId" class="shoplink-amazon item-link">
            <a :href="amazonUrl" target="_blank">Amazonで探す</a>
          </div>
          <div v-if="kindleItemId" class="shoplink-kindle item-link">
            <a :href="kindleUrl" target="_blank">Kindleで探す</a>
          </div>
          <div v-if="rakutenItemId" class="shoplink-rakuten item-link">
            <a :href="rakutenUrl" target="_blank">Rakutenで探す</a>
          </div>
          <div v-if="koboItemId" class="shoplink-kobo item-link">
            <a :href="koboUrl" target="_blank">koboで探す</a>
          </div>
        </div>
      </div>
      <div class="booklink-footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemTitle: {
      required: true,
      type: String,
    },
    imgFileName: {
      required: true,
      type: String,
    },
    authorName: {
      required: true,
      type: String,
    },
    amazonItemId: {
      type: String,
      default: null,
    },
    rakutenItemId: {
      type: String,
      default: null,
    },
    kindleItemId: {
      type: String,
      default: null,
    },
    koboItemId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      amazonAssociateUserId: 'amayutazon-22',
      rakutenAffiliateId: 'g0000012.1zx7x6a7.g0000013.rphkh6ef',
      yahooValueCommerce: {
        sid: '3125738',
        pid: '887190364',
      },
    }
  },
  computed: {
    assetsImagePath() {
      return `images/link/yomereba/items/${this.imgFileName}`
    },
    titleLink() {
      return this.amazonItemUrl ? this.amazonItemUrl : this.rakutenItemUrl
    },
    amazonUrl() {
      return `https://www.amazon.co.jp/exec/obidos/asin/${this.amazonItemId}/${this.amazonAssociateUserId}/`
    },
    kindleUrl() {
      return `https://www.amazon.co.jp/exec/obidos/ASIN/${this.kindleItemId}/${this.amazonAssociateUserId}/`
    },
    rakutenUrl() {
      return `https://hb.afl.rakuten.co.jp/hgc/${this.rakutenAffiliateId}/mujiota?pc=http://books.rakuten.co.jp/rb/${this.rakutenItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`
    },
    koboUrl() {
      return `http://hb.afl.rakuten.co.jp/hgc/${this.rakutenAffiliateId}/mujiota?pc=https://books.rakuten.co.jp/rk/${this.koboItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`
    },
  },
}
</script>
<style lang="scss" scoped>
.yomerebalink {
  .wrap {
    margin: 0 0 2rem;
    padding: 0.64rem;
    background: #fff;
    border: 1px solid;
    border-color: #eaeaea #ddd #d0d0d0;
    border-radius: 3px;
    box-sizing: border-box;
    .link-image {
      align-items: center;
      padding: 16px;
      img {
        vertical-align: top;
      }
    }
    .link-info {
      .link-title {
        font-size: 1.0625rem;
        font-weight: bold;
        margin: 0.2rem 0 0.8rem;
        a {
          color: $text;
        }
      }
      .link-shop-name {
        margin: 0 0 2rem;
      }
      .link-items {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item-link {
          flex: 1;
          padding: 4px;
          min-width: 96px;
          @media (max-width: $desktop) {
            width: 100%;
            padding: 0;
            min-width: 100%;
          }
          a {
            display: block;
            width: 100%;
            padding: 1em;
            font-size: 0.84rem;
            @media (max-width: $desktop) {
              font-size: 0.9rem;
            }

            font-weight: bold;
            text-align: center;
            border-radius: 4px;
            margin: 0 auto 0.6rem;
            color: #fff;
            svg {
              width: 1.2rem;
              height: 1.2rem;
              fill: #fff;
              vertical-align: middle;
            }
          }
        }
        .shoplink-amazon a {
          border: 2px solid #ff9800;
          background-color: #ff9800;
        }
        .shoplink-kindle a {
          border: 2px solid #ff9800;
          background-color: #ff9800;
        }
        .shoplink-rakuten a {
          border: 2px solid #ef5350;
          background-color: #ef5350;
        }
        .shoplink-kobo a {
          border: 2px solid #ef5350;
          background-color: #ef5350;
        }
      }
    }
  }
}
</style>
