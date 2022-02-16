<template>
  <div class="AppKaerebaLink">
    <div class="AppKaerebaLink__Wrapper columns">
      <div
        v-if="imgFileName"
        class="AppKaerebaLink__ImageLink column is-3-desktop is-5-tablet is-12-mobile"
      >
        <a :href="titleLink" target="_blank">
          <AppAssetsImage :path="assetsImagePath" />
        </a>
      </div>
      <div class="column is-9-desktop is-7-tablet is-12-mobile">
        <div class="AppKaerebaLink__TitleLink">
          <a :href="titleLink" target="_blank">{{ itemTitle }}</a>
        </div>
        <div v-if="shopName" class="AppKaerebaLink__ShopName">
          {{ shopName }}
        </div>
        <div class="AppKaerebaLink__SearchLinks">
          <div class="AppKaerebaLink__ShoplinkRakuten">
            <a
              :href="rakutenItemId ? rakutenProductUrl : rakutenSearchUrl"
              target="_blank"
              >Rakutenで探す</a
            >
          </div>
          <div class="AppKaerebaLink__ShoplinkAmazon">
            <a :href="amazonSearchUrl" target="_blank">Amazonで探す</a>
          </div>
          <div class="AppKaerebaLink__ShoplinkYahoo">
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
<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  unref,
} from '@nuxtjs/composition-api'
import { arrayToEnumObject, ValueTypeOf } from '~/composables/util'

const EC_MALL_ASP_TYPE = arrayToEnumObject(['amazon', 'rakuten', 'yahoo'])
type EcMallAspType = ValueTypeOf<typeof EC_MALL_ASP_TYPE>

/**
 * ## 物販アフィリエイト用リンクボックス
 *
 * 物販アフィリエイト用のコンポーネント。
 * Amazon、楽天、ヤフーのアフィリエイトリンク付きのリンクボックスを表示する。
 * 商品名、商品画像ファイル名、販売店名、Amazon商品ID、楽天商品ID、検索キーワードを受け取る。
 * 商品タイトルリンクと商品画像リンクにどのASPを使うか指定できる。デフォルトはAmazon。
 *
 */
export default defineComponent({
  name: 'AppKaerebaLink',
  props: {
    /**
     * 商品名。
     */
    itemTitle: {
      type: String,
      required: true,
    },
    /**
     * 商品画像ファイル名。
     */
    imgFileName: {
      type: String,
      required: true,
    },
    /**
     * 販売店名。
     */
    shopName: {
      type: String,
      required: true,
    },
    /**
     * Amazon商品ID。
     */
    amazonItemId: {
      type: String,
      default: undefined,
    },
    /**
     * 楽天商品ID。
     */
    rakutenItemId: {
      type: String,
      default: undefined,
    },
    /**
     * 検索用キーワード。
     */
    searchKeyword: {
      type: String,
      required: true,
    },
    /**
     * 商品タイトル・商品画像リンクのASP。
     * Amazon（amazon）、楽天（rakuten）、ヤフー（yahoo）のいずれかを指定する。
     * デフォルトはAmazon。
     */
    mainAspType: {
      type: String as PropType<EcMallAspType>,
      default: EC_MALL_ASP_TYPE.AMAZON,
    },
  },
  setup(props) {
    const assetsImagePath = computed(
      () => `images/link/kaereba/items/${props.imgFileName}`
    )
    const amazonItemUrl = computed(
      () =>
        `https://www.amazon.co.jp/dp/${props.amazonItemId}?tag=${process.env.AMAZON_ASSOCIATE_USER_ID}&language=ja_JP`
    )
    const rakutenProductUrl = computed(
      () =>
        `https://hb.afl.rakuten.co.jp/hgc/${process.env.RAKUTEN_AFFILIATE_ID}/mujiota?pc=https://product.rakuten.co.jp/product/-/${props.rakutenItemId}/&m=http://m.product.rakuten.co.jp/product/${props.rakutenItemId}/`
    )
    const amazonSearchUrl = computed(
      () =>
        `https://www.amazon.co.jp/s?k=${props.searchKeyword}&__mk_ja_JP=カタカナ&tag=amayutazon-22`
    )
    const rakutenSearchUrl = computed(
      () =>
        `https://hb.afl.rakuten.co.jp/hgc/${process.env.RAKUTEN_AFFILIATE_ID}/mujiota?pc=https://search.rakuten.co.jp/search/mall/${props.searchKeyword}/?v=2&scid=af_pc_ich_link_urltxt&sc2id=af_101_0_0&m=http://m.rakuten.co.jp/`
    )
    const yahooSearchUrl = computed(
      () =>
        `//ck.jp.ap.valuecommerce.com/servlet/referral?sid=${process.env.YAHOO_VALUE_COMMERCE_SID}&pid=${process.env.YAHOO_VALUE_COMMERCE_PID}&vc_url=http://search.shopping.yahoo.co.jp/search?p=${props.searchKeyword}&vcptn=mujiota`
    )
    const yahooAspImgUrl = computed(
      () =>
        `//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=${process.env.YAHOO_VALUE_COMMERCE_SID}&pid=${process.env.YAHOO_VALUE_COMMERCE_PID}`
    )

    const titleLink = computed(() => {
      switch (props.mainAspType) {
        case EC_MALL_ASP_TYPE.AMAZON: {
          return unref(amazonItemUrl) || unref(amazonSearchUrl)
        }
        case EC_MALL_ASP_TYPE.RAKUTEN: {
          return unref(rakutenProductUrl) || unref(rakutenSearchUrl)
        }
        case EC_MALL_ASP_TYPE.YAHOO: {
          return unref(yahooSearchUrl)
        }
        default:
          return (
            unref(amazonItemUrl) ||
            unref(rakutenProductUrl) ||
            unref(amazonSearchUrl)
          )
      }
    })

    return {
      assetsImagePath,
      amazonItemUrl,
      rakutenProductUrl,
      amazonSearchUrl,
      rakutenSearchUrl,
      yahooSearchUrl,
      yahooAspImgUrl,
      titleLink,
    }
  },
})
</script>
<style lang="scss" scoped>
.AppKaerebaLink {
  margin-bottom: $scale40;

  &__Wrapper {
    box-sizing: border-box;
    padding: $scale12;
    margin: 0;
    background: #fff;
    border: $border-width1 solid $border-gray-color;
    border-radius: $border-radius2;
    box-shadow: 0 0 1px $link-image-shadow-color;
  }

  &__ImageLink {
    align-items: center;
    padding: $scale16;
    img {
      vertical-align: top;
    }
  }
  &__TitleLink {
    padding: $scale4 0 $scale12;
    a {
      display: block;
      font-size: $font-size-104rem;
      font-weight: $font-weight-700;
      color: $text;
    }
  }
  &__ShopName {
    margin: 0 0 $scale32;
  }
  &__SearchLinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__ShoplinkRakuten,
  &__ShoplinkAmazon,
  &__ShoplinkYahoo {
    flex: 1;
    min-width: 148px;
    padding: $scale8;
    @media (max-width: $desktop) {
      width: 100%;
      min-width: 100%;
      padding: 0;
    }
    a {
      display: block;
      width: 100%;
      padding: $scale16;
      margin: 0 auto $scale12;
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
  &__ShoplinkRakuten {
    a {
      background-color: $kaereba-rakuten-button-color;
      border: $border-width2 solid $kaereba-rakuten-button-color;
    }
  }
  &__ShoplinkAmazon {
    a {
      background-color: $kaereba-amazon-button-color;
      border: $border-width2 solid $kaereba-amazon-button-color;
    }
  }
  &__ShoplinkYahoo {
    a {
      background-color: $kaereba-yahoo-button-color;
      border: $border-width2 solid $kaereba-yahoo-button-color;
    }
    img {
      display: none;
    }
  }
}
</style>
