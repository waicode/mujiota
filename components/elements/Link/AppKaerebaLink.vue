<template>
  <div class="AppKaerebaLink">
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
        <div v-if="shopName" class="link-shop-name">
          {{ shopName }}
        </div>
        <div class="link-search-links">
          <div class="shoplink-rakuten search-link">
            <a
              :href="rakutenItemId ? rakutenProductUrl : rakutenSearchUrl"
              target="_blank"
              >Rakutenで探す</a
            >
          </div>
          <div class="shoplink-amazon search-link">
            <a :href="amazonSearchUrl" target="_blank">Amazonで探す</a>
          </div>
          <div class="shoplink-yahoo search-link">
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
      required: true,
      type: String,
    },
    imgFileName: {
      required: true,
      type: String,
    },
    shopName: {
      required: true,
      type: String,
    },
    amazonItemId: {
      required: true,
      type: String,
    },
    rakutenItemId: {
      required: true,
      type: String,
    },
    searchKeyword: {
      required: true,
      type: String,
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
.AppKaerebaLink {
  .wrap {
    box-sizing: border-box;
    padding: $scale12;
    margin: 0 0 $scale32;
    background: #fff;
    border: $border-width1 solid $border-gray-color;
    border-radius: $border-radius2;
    box-shadow: 0 0 1px $link-image-shadow-color;
    .link-image {
      align-items: center;
      padding: $scale16;
      img {
        vertical-align: top;
      }
    }
    .link-info {
      .link-title {
        margin: $scale4 0 $scale12;
        font-size: $font-size-104rem;
        font-weight: $font-weight-700;
        a {
          color: $text;
        }
      }
      .link-shop-name {
        margin: 0 0 $scale32;
      }
      .link-search-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .search-link {
          flex: 1;
          min-width: 148px;
          padding: $scale4;
          @media (max-width: $desktop) {
            width: 100%;
            min-width: 100%;
            padding: 0;
          }
          a {
            display: block;
            width: 100%;
            padding: $scale16;
            margin: 0 auto $scale8;
            font-size: $font-size-086rem;
            font-weight: $font-weight-700;
            color: $white-color;
            text-align: center;
            border-radius: $border-radius4;
            @media (max-width: $desktop) {
              font-size: $font-size-092rem;
            }
            svg {
              width: 20px;
              height: 20px;
              vertical-align: middle;
              fill: $white-color;
            }
          }
        }
        .shoplink-rakuten a {
          background-color: $kaereba-rakuten-button-color;
          border: $border-width2 solid $kaereba-rakuten-button-color;
        }
        .shoplink-amazon a {
          background-color: $kaereba-amazon-button-color;
          border: $border-width2 solid $kaereba-amazon-button-color;
        }
        .shoplink-yahoo {
          a {
            background-color: $kaereba-yahoo-button-color;
            border: $border-width2 solid $kaereba-yahoo-button-color;
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
