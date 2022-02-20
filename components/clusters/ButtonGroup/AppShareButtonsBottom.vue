<template>
  <div class="AppShareButtonsBottom">
    <div class="AppShareButtonsBottom__ShareTitle">Share on SNS</div>
    <div class="AppShareButtonsBottom__ShareButtons">
      <div class="AppShareButtonsBottom__ShareItemHatena">
        <a :href="shareUrlHatena" target="_blank" rel="nofollow noopener">
          <ShareIconHatena />
        </a>
        <div
          v-if="shareCountHatena > 0"
          class="AppShareButtonsBottom__ShareCountHatena"
        >
          {{ shareCountHatena }}
        </div>
      </div>
      <div class="AppShareButtonsBottom__ShareItemTwitter">
        <a
          :href="shareUrlTwitter"
          target="blank"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
        >
          <ShareIconTwitter />
        </a>
        <div
          v-if="shareCountTwitter > 0"
          class="AppShareButtonsBottom__ShareCountTwitter"
        >
          {{ shareCountTwitter }}
        </div>
      </div>
      <div class="AppShareButtonsBottom__ShareItemFacebook">
        <a
          :href="shareUrlFacebook"
          target="blank"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
        >
          <ShareIconFacebook />
        </a>
        <div
          v-if="shareCountFacebook > 0"
          class="AppShareButtonsBottom__ShareCountFacebook"
        >
          {{ shareCountFacebook }}
        </div>
      </div>
      <div class="AppShareButtonsBottom__ShareItemPocket">
        <a
          :href="shareUrlPocket"
          target="blank"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
        >
          <ShareIconPocket />
        </a>
        <div
          v-if="shareCountPocket > 0"
          class="AppShareButtonsBottom__ShareCountPocket"
        >
          {{ shareCountPocket }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import ShareIconHatena from '@/assets/images/shared/icon/share_icon_hatena_bookmark_17x14.svg'
import ShareIconTwitter from '@/assets/images/shared/icon/share_icon_twitter_20x16.25.svg'
import ShareIconFacebook from '@/assets/images/shared/icon/share_icon_facebook_17.5x17.5.svg'
import ShareIconPocket from '@/assets/images/shared/icon/share_icon_pocket_17.5x15.625.svg'

/**
 * ## 記事下シェアボタン
 *
 * 記事下に表示するシェアボタン群を表示するコンポーネント。
 * ページタイトルとURL、各SNSのシェアカウントを受け取る。
 * ポップアップが表示されるシェアリンクとシェアカウントを表示する。
 */
export default defineComponent({
  name: 'AppShareButtonsBottom',
  components: {
    ShareIconHatena,
    ShareIconTwitter,
    ShareIconFacebook,
    ShareIconPocket,
  },
  props: {
    /**
     * ページURL。
     */
    pageUrl: {
      required: true,
      type: String,
    },
    /**
     * ページタイトル。
     */
    title: {
      required: true,
      type: String,
    },
    /**
     * Hatenaのシェアカウント。
     */
    shareCountHatena: {
      type: Number,
      default: 0,
    },
    /**
     * Twitterのシェアカウント。
     */
    shareCountTwitter: {
      type: Number,
      default: 0,
    },
    /**
     * Facebookのシェアカウント。
     */
    shareCountFacebook: {
      type: Number,
      default: 0,
    },
    /**
     * Pocketのシェアカウント。
     */
    shareCountPocket: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const shareUrlHatena = computed(
      () =>
        `http://b.hatena.ne.jp/add?mode=confirm&url=${props.pageUrl}&title=${props.title}`
    )
    const shareUrlTwitter = computed(
      () =>
        `https://twitter.com/intent/tweet?url=${props.pageUrl}&text=${props.title}`
    )
    const shareUrlFacebook = computed(
      () =>
        `https://www.facebook.com/sharer/sharer.php?u=${props.pageUrl}&t=${props.title}`
    )
    const shareUrlPocket = computed(
      () => `http://getpocket.com/edit?url=${props.pageUrl}`
    )

    return {
      shareUrlHatena,
      shareUrlTwitter,
      shareUrlFacebook,
      shareUrlPocket,
    }
  },
})
</script>
<style lang="scss">
.AppShareButtonsBottom {
  margin-top: $scale80;
  margin-bottom: $scale80;

  &__ShareTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: $scale28;
    font-size: $font-size-168rem;
    font-weight: $font-weight-700;
    text-align: center;
    @media (max-width: $tablet) {
      font-size: $font-size-131rem;
    }
    &::before,
    &::after {
      width: $border-width2;
      height: $font-size-168rem;
      content: '';
      background-color: $text;
    }
    &::before {
      margin-right: $scale32;
      transform: rotate(-35deg);
    }
    &::after {
      margin-left: $scale32;
      transform: rotate(35deg);
    }
  }
  &__ShareButtons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__ShareItemHatena,
  &__ShareItemTwitter,
  &__ShareItemFacebook,
  &__ShareItemPocket {
    width: 23%;
    a {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: $scale56;
      font-weight: $font-weight-700;
      border-radius: $scale8;
      transition: 0.3s;
    }
    a:hover {
      transform: translateY(-8px);
    }
  }
  &__ShareItemHatena {
    a {
      background-color: $share-hb-button-color;
      border: $border-width3 solid $share-hb-button-color;
    }
  }
  &__ShareItemTwitter {
    a {
      background-color: $share-tw-button-color;
      border: $border-width3 solid $share-tw-button-color;
    }
  }
  &__ShareItemFacebook {
    a {
      background-color: $share-fb-button-color;
      border: $border-width3 solid $share-fb-button-color;
    }
  }
  &__ShareItemPocket {
    a {
      background-color: $share-pk-button-color;
      border: $border-width3 solid $share-pk-button-color;
    }
  }
  &__ShareCountHatena,
  &__ShareCountTwitter,
  &__ShareCountFacebook,
  &__ShareCountPocket {
    margin-top: $scale16;
    font-size: $font-size-110rem;
    text-align: center;
  }
}
</style>
