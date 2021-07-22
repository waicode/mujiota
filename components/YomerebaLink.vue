<template>
  <!-- todo: yomerebaに直す -->
  <div class="Yomerebalink">
    <div class="cstmreba">
      <div class="booklink-box">
        <div class="booklink-image">
          <a :href="titleLink" target="_blank">
            <AssetsImage :path="assetsImagePath" />
          </a>
        </div>
        <div class="booklink-info">
          <div class="link-title">
            <a :href="titleLink" target="_blank">{{ itemTitle }}</a>
          </div>
          <div v-if="shopName" class="link-shop-name">
            {{ shopName }}
          </div>
          <div class="link-items">
            <div class="shoplink-amazon item-link">
              <a :href="amazonUrl" target="_blank">Amazon</a>
            </div>
            <div class="shoplink-kindle item-link">
              <a :href="kindleUrl" target="_blank">Kindle</a>
            </div>
            <div class="shoplink-rakuten item-link">
              <a :href="rakutenUrl" target="_blank">楽天ブックス</a>
            </div>
            <div class="shoplink-kobo item-link">
              <a :href="koboUrl" target="_blank">楽天kobo</a>
            </div>
          </div>
        </div>
        <div class="booklink-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemTitle: {
      require: true,
      type: String,
      default: null,
    },
    imgFileName: {
      require: true,
      type: String,
      default: null,
    },
    shopName: {
      require: true,
      type: String,
      default: null,
    },
    amazonItemId: {
      require: true,
      type: String,
      default: null,
    },
    kindleItemId: {
      require: true,
      type: String,
      default: null,
    },
    rakutenItemId: {
      require: true,
      type: String,
      default: null,
    },
    koboItemId: {
      require: true,
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
      return `images/yomereba/items/${this.imgFileName}`
    },
    titleLink() {
      let url = null
      if (!this.amazonItemUrl) {
        url = this.rakutenItemUrl
      } else if (!this.rakutenItemUrl) {
        url = this.amazonItemUrl
      }
      return url
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
.kaerebalink {
  .link-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0 0 2rem;
    padding: 0.64rem;
    background: #fff;
    border: 1px solid;
    border-color: #eaeaea #ddd #d0d0d0;
    border-radius: 3px;
    box-sizing: border-box;
    .link-title {
      font-size: 1.0625rem;
      font-weight: bold;
      margin: 0;
      a {
        color: $text;
      }
    }
    .link-image {
      width: 18%;
      padding: 16px;
    }
    .link-info {
      width: 76%;
      .link-title {
        margin: 0.2rem 0 0.8rem;
      }
      .link-shop-name {
        margin: 0 0 2rem;
      }
      .link-seach-links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .seach-link {
          width: 32%;
          min-width: 148px;
          a {
            display: block;
            width: 100%;
            padding: 1em;
            font-size: 0.9rem;
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
        .shoplink-rakuten a {
          background-color: #ef5350;
        }
        .shoplink-amazon a {
          background-color: #ff9800;
        }
        .shoplink-yahoo {
          a {
            background-color: #2196f3;
          }
          img {
            display: none;
          }
        }
      }
    }
  }
}
</style>
