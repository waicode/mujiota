<template>
  <div class="kaerebalink">
    <div class="link-box">
      <div class="link-image">
        <img :src="assetsImagePath()" />
      </div>
      <div class="kaerebalink-info">
        <div class="kaerebalink-name">
          <a :href="titleLink()" target="_blank">{{ itemTitle }}</a>
        </div>
        <div class="kaerebalink-seach-links">
          <div class="shoplink-rakuten">
            <a :href="rakutenItemUrl()" target="_blank">楽天で探す</a>
          </div>
          <div class="shoplink-amazon">
            <a :href="amazonSearchUrl()" target="_blank">Amazonで探す</a>
          </div>
          <div class="shoplink-yahoo">
            <a :href="yahooSearchUrl()" target="_blank">
              Yahooで探す
              <img :src="yahooAspImgUrl()" height="1" width="1" border="0" />
            </a>
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
      return `images/kaereba/items/${this.imgFileName}`
    },
    titleLink() {
      let url = null
      if (!this.amazonItemUrl) {
        url = this.amazonItemUrl
      } else if (!this.rakutenItemUrl) {
        url = this.amazonItemUrl
      }
      return url
    },
    amazonItemUrl() {
      return `https://www.amazon.co.jp/dp/${this.amazonItemId}?tag=${this.amazonAssociateUserId}&language=ja_JP`
    },
    rakutenItemUrl() {
      return `https://hb.afl.rakuten.co.jp/hgc/${this.rakutenAffiliateId}/mujiota?pc=https://product.rakuten.co.jp/product/-/${this.rakutenItemId}/&m=http://m.product.rakuten.co.jp/product/${this.rakutenItemId}/`
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
  display: flex;
}
</style>
