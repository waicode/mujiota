<template>
  <div class="cstmreba">
    <div class="link-box">
      <div class="link-image">
        <a
          href="https://hb.afl.rakuten.co.jp/hgc/g0000012.1zx7x6a7.g0000013.rphkh6ef/kaereba_main_202107011841309235?pc=https%3A%2F%2Fproduct.rakuten.co.jp%2Fproduct%2F-%2F732cd619f14bd8be0a6438041ec013e8%2F&m=http%3A%2F%2Fm.product.rakuten.co.jp%2Fproduct%2F732cd619f14bd8be0a6438041ec013e8%2F"
          target="_blank"
          ><img
            src="https://thumbnail.image.rakuten.co.jp/ran/img/3001/0003/523/230/000/819/30010003523230000819_1.jpg?_ex=64x64"
            style="border: none"
        /></a>
      </div>
      <div class="kaerebalink-info">
        <div class="kaerebalink-name">
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/g0000012.1zx7x6a7.g0000013.rphkh6ef/kaereba_main_202107011841309235?pc=https%3A%2F%2Fproduct.rakuten.co.jp%2Fproduct%2F-%2F732cd619f14bd8be0a6438041ec013e8%2F&m=http%3A%2F%2Fm.product.rakuten.co.jp%2Fproduct%2F732cd619f14bd8be0a6438041ec013e8%2F"
            target="_blank"
            >有機バイオバター グラスフェッドバター 無塩バター</a
          >
        </div>
        <div class="kaerebalink-detail"></div>
        <div class="kaerebalink-link1">
          <div class="shoplinkrakuten">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/g0000012.1zx7x6a7.g0000013.rphkh6ef/kaereba_main_202107011841309235?pc=https%3A%2F%2Fproduct.rakuten.co.jp%2Fproduct%2F-%2F732cd619f14bd8be0a6438041ec013e8%2F&m=http%3A%2F%2Fm.product.rakuten.co.jp%2Fproduct%2F732cd619f14bd8be0a6438041ec013e8%2F"
              target="_blank"
              >楽天市場</a
            >
          </div>
          <div class="shoplinkamazon">
            <a
              href="https://www.amazon.co.jp/gp/search?keywords=%E3%82%B0%E3%83%A9%E3%82%B9%E3%83%95%E3%82%A7%E3%83%83%E3%83%88%E3%83%90%E3%82%BF%E3%83%BC&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&tag=amayutazon-22"
              target="_blank"
              >Amazon</a
            >
          </div>
          <div class="shoplinkyahoo">
            <a
              href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3125738&pid=887190364&vc_url=http%3A%2F%2Fsearch.shopping.yahoo.co.jp%2Fsearch%3Fp%3D%25E3%2582%25B0%25E3%2583%25A9%25E3%2582%25B9%25E3%2583%2595%25E3%2582%25A7%25E3%2583%2583%25E3%2583%2588%25E3%2583%2590%25E3%2582%25BF%25E3%2583%25BC&vcptn=kaereba"
              target="_blank"
              >Yahooショッピング<img
                src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3125738&pid=887190364"
                height="1"
                width="1"
                border="0"
            /></a>
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
    imgFileName: {
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
    amazonItemUrl() {
      return `https://www.amazon.co.jp/s?k=${this.searchKeyword}&__mk_ja_JP=カタカナ&tag=amayutazon-22`
    },
    rakutenItemUrl() {
      return `https://hb.afl.rakuten.co.jp/hgc/${this.rakutenAffiliateId}/mujiota?pc=https://product.rakuten.co.jp/product/-/${this.rakutenItemId}/&m=http://m.product.rakuten.co.jp/product/${this.rakutenItemId}/`
    },
    amazonSearchUrl() {
      return `https://www.amazon.co.jp/s?k=${this.searchKeyword}&__mk_ja_JP=カタカナ&tag=amayutazon-22`
    },
    rakutenSearchUrl() {
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
