<template>
  <div class="AppYomerebaLink">
    <div class="AppYomerebaLink__Wrapper columns">
      <div
        v-if="imgFileName"
        class="AppYomerebaLink__ImageLink column is-3-desktop is-5-tablet is-12-mobile"
      >
        <a :href="titleLink" target="_blank">
          <AppAssetsImage :path="assetsImagePath" />
        </a>
      </div>
      <div class="column is-9-desktop is-7-tablet is-12-mobile">
        <div class="AppYomerebaLink__TitleLink">
          <a :href="titleLink" target="_blank">{{ itemTitle }}</a>
        </div>
        <div v-if="authorName" class="AppYomerebaLink__AuthorName">
          {{ authorName }}
        </div>
        <div class="AppYomerebaLink__SearchLinks">
          <div v-if="amazonItemId" class="AppYomerebaLink__ShopLinkAmazon">
            <a :href="amazonUrl" target="_blank">Amazonで探す</a>
          </div>
          <div v-if="kindleItemId" class="AppYomerebaLink__ShopLinkKindle">
            <a :href="kindleUrl" target="_blank">Kindleで探す</a>
          </div>
          <div v-if="rakutenItemId" class="AppYomerebaLink__ShopLinkRakuten">
            <a :href="rakutenUrl" target="_blank">Rakutenで探す</a>
          </div>
          <div v-if="koboItemId" class="AppYomerebaLink__ShopLinkKobo">
            <a :href="koboUrl" target="_blank">koboで探す</a>
          </div>
        </div>
      </div>
      <div class="booklink-footer"></div>
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

export const BOOK_ASP_TYPE = arrayToEnumObject([
  'amazon',
  'kindle',
  'rakuten',
  'kobo',
])
export type BookAspType = ValueTypeOf<typeof BOOK_ASP_TYPE>

/**
 * ## 書籍アフィリエイト用リンクボックス
 *
 * 書籍アフィリエイト用のコンポーネント。
 * Amazon、Kindle、楽天、Koboのアフィリエイトリンク付きのリンクボックスを表示する。
 * 書籍名、書籍画像ファイル名、著者名、Amazon商品ID、Kindle商品ID、楽天商品ID、Kobo商品ID、検索キーワードを受け取る。
 * 商品タイトルリンクと商品画像リンクにどのASPを使うか指定できる。デフォルトはAmazon。
 *
 */
export default defineComponent({
  name: 'AppYomerebaLink',
  props: {
    /**
     * 書籍名。
     */
    itemTitle: {
      type: String,
      required: true,
    },
    /**
     * 書籍画像ファイル名。
     */
    imgFileName: {
      type: String,
      required: true,
    },
    /**
     * 著者名。
     */
    authorName: {
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
     * Kindle商品ID。
     */
    kindleItemId: {
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
     * Kobo商品ID。
     */
    koboItemId: {
      type: String,
      default: undefined,
    },
    /**
     * 商品タイトル・商品画像リンクのASP。
     * Amazon（amazon）、Kindle（kindle）、楽天（rakuten）、Kobo（kobo）のいずれかを指定する。
     * デフォルトはAmazon。
     */
    mainAspType: {
      type: String as PropType<BookAspType>,
      default: BOOK_ASP_TYPE.AMAZON,
    },
  },
  setup(props) {
    const assetsImagePath = computed(
      () => `images/link/yomereba/items/${props.imgFileName}`
    )
    const amazonUrl = computed(
      () =>
        `https://www.amazon.co.jp/exec/obidos/asin/${props.amazonItemId}/${process.env.AMAZON_ASSOCIATE_USER_ID}/`
    )

    const kindleUrl = computed(
      () =>
        `https://www.amazon.co.jp/exec/obidos/ASIN/${props.kindleItemId}/${process.env.AMAZON_ASSOCIATE_USER_ID}/`
    )

    const rakutenUrl = computed(
      () =>
        `https://hb.afl.rakuten.co.jp/hgc/${process.env.RAKUTEN_AFFILIATE_ID}/mujiota?pc=http://books.rakuten.co.jp/rb/${props.rakutenItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`
    )
    const koboUrl = computed(
      () =>
        `http://hb.afl.rakuten.co.jp/hgc/${process.env.RAKUTEN_AFFILIATE_ID}/mujiota?pc=https://books.rakuten.co.jp/rk/${props.koboItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`
    )

    const titleLink = computed(() => {
      switch (props.mainAspType) {
        case BOOK_ASP_TYPE.AMAZON: {
          return unref(amazonUrl)
        }
        case BOOK_ASP_TYPE.KINDLE: {
          return unref(kindleUrl)
        }
        case BOOK_ASP_TYPE.RAKUTEN: {
          return unref(rakutenUrl)
        }
        case BOOK_ASP_TYPE.KOBO: {
          return unref(koboUrl)
        }
        default:
          return (
            unref(amazonUrl) ||
            unref(kindleUrl) ||
            unref(rakutenUrl) ||
            unref(koboUrl)
          )
      }
    })

    return {
      assetsImagePath,
      amazonUrl,
      kindleUrl,
      rakutenUrl,
      koboUrl,
      titleLink,
    }
  },
})
</script>
<style lang="scss" scoped>
.AppYomerebaLink {
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
  &__AuthorName {
    margin: 0 0 $scale32;
  }
  &__SearchLinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__ShopLinkAmazon,
  &__ShopLinkKindle,
  &__ShopLinkRakuten,
  &__ShopLinkKobo {
    flex: 1;
    min-width: 96px;
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
      font-size: $font-size-073rem;
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
  &__ShopLinkAmazon {
    a {
      background-color: $kaereba-amazon-button-color;
      border: $border-width2 solid $kaereba-amazon-button-color;
    }
  }
  &__ShopLinkKindle {
    a {
      background-color: $kaereba-amazon-button-color;
      border: $border-width2 solid $kaereba-amazon-button-color;
    }
  }
  &__ShopLinkRakuten {
    a {
      background-color: $kaereba-rakuten-button-color;
      border: $border-width2 solid $kaereba-rakuten-button-color;
    }
  }
  &__ShopLinkKobo {
    a {
      background-color: $kaereba-rakuten-button-color;
      border: $border-width2 solid $kaereba-rakuten-button-color;
    }
  }
}
</style>
