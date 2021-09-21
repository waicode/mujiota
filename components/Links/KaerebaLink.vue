<template>
  <div class="kaerebalink">
    <div class="columns wrap">
      <div
        v-if="imgFileName"
        class="link-image column is-3-desktop is-5-tablet is-12-mobile"
      >
        <a :href="titleLink" target="_blank">
          <AssetsImage :path="assetsImagePath" />
        </a>
      </div>
      <div class="link-info column is-9-desktop is-7-tablet is-12-mobile">
        <div class="link-title">
          <a :href="titleLink" target="_blank">{{ itemTitle }}</a>
        </div>
        <div v-if="shopName" class="link-shop-name">
          {{ shopName }}
        </div>
        <div class="link-seach-links">
          <div class="shoplink-rakuten seach-link">
            <a
              :href="rakutenItemId ? rakutenProductUrl : rakutenSearchUrl"
              target="_blank"
              >Rakutenで探す</a
            >
          </div>
          <div class="shoplink-amazon seach-link">
            <a :href="amazonSearchUrl" target="_blank">Amazonで探す</a>
          </div>
          <div class="shoplink-yahoo seach-link">
            <a :href="yahooSearchUrl" target="_blank">Yahooで探す</a>
            <span>
              <img :src="yahooAspImgUrl" height="1" width="1" border="0" />
            </span>
          </div>
        </div>
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
    rakutenItemId: {
      require: true,
      type: String,
      default: null,
    },
    searchKeyword: {
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
      return `images/link/kaereba/items/${this.imgFileName}`
    },
    titleLink() {
      return this.amazonItemUrl ? this.amazonItemUrl : this.rakutenItemUrl
    },
    amazonItemUrl() {
      return `https://www.amazon.co.jp/dp/${this.amazonItemId}?tag=${this.amazonAssociateUserId}&language=ja_JP`
    },
    rakutenProductUrl() {
      return `https://hb.afl.rakuten.co.jp/hgc/${this.rakutenAffiliateId}/mujiota?pc=https://product.rakuten.co.jp/product/-/${this.rakutenItemId}/&m=http://m.product.rakuten.co.jp/product/${this.rakutenItemId}/`
    },
    rakutenSearchUrl() {
      return `https://hb.afl.rakuten.co.jp/hgc/${this.rakutenAffiliateId}/mujiota?pc=https://search.rakuten.co.jp/search/mall/${this.searchKeyword}/?v=2&scid=af_pc_ich_link_urltxt&sc2id=af_101_0_0&m=http://m.rakuten.co.jp/`
    },
    amazonSearchUrl() {
      return `https://www.amazon.co.jp/s?k=${this.searchKeyword}&__mk_ja_JP=カタカナ&tag=amayutazon-22`
    },
    yahooSearchUrl() {
      return `//ck.jp.ap.valuecommerce.com/servlet/referral?sid=${this.yahooValueCommerce.sid}&pid=${this.yahooValueCommerce.pid}&vc_url=http://search.shopping.yahoo.co.jp/search?p=${this.searchKeyword}&vcptn=mujiota`
    },
    yahooAspImgUrl() {
      return `//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=${this.yahooValueCommerce.sid}&pid=${this.yahooValueCommerce.pid}`
    },
  },
}
</script>
<style lang="scss" scoped>
.kaerebalink {
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
      .link-seach-links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .seach-link {
          flex: 1;
          padding: 4px;
          min-width: 148px;
          @media (max-width: $desktop) {
            width: 100%;
            padding: 0;
            min-width: 100%;
          }
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
