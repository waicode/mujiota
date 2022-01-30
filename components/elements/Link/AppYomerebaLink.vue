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
      .link-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item-link {
          flex: 1;
          min-width: 96px;
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
        .shoplink-amazon a {
          background-color: $kaereba-amazon-button-color;
          border: $border-width2 solid $kaereba-amazon-button-color;
        }
        .shoplink-kindle a {
          background-color: $kaereba-amazon-button-color;
          border: $border-width2 solid $kaereba-amazon-button-color;
        }
        .shoplink-rakuten a {
          background-color: $kaereba-rakuten-button-color;
          border: $border-width2 solid $kaereba-rakuten-button-color;
        }
        .shoplink-kobo a {
          background-color: $kaereba-rakuten-button-color;
          border: $border-width2 solid $kaereba-rakuten-button-color;
        }
      }
    }
  }
}
</style>
