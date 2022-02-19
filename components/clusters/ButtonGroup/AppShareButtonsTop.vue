<template>
  <div class="AppShareButtonsTop">
    <div class="AppShareButtonsTop__ShareItemHatena">
      <a :href="shareUrlHatena" target="_blank" rel="nofollow noopener">
        <ShareIconHatena />
      </a>
      <div
        v-if="shareCountHatena > 0"
        class="AppShareButtonsTop__ShareCountHatena"
      >
        {{ shareCountHatena }}
      </div>
    </div>
    <div class="AppShareButtonsTop__ShareItemTwitter">
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
        class="AppShareButtonsTop__ShareCountTwitter"
      >
        {{ shareCountTwitter }}
      </div>
    </div>
    <div class="AppShareButtonsTop__ShareItemFacebook">
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
        class="AppShareButtonsTop__ShareCountFacebook"
      >
        {{ shareCountFacebook }}
      </div>
    </div>
    <div class="AppShareButtonsTop__ShareItemPocket">
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
        class="AppShareButtonsTop__ShareCountPocket"
      >
        {{ shareCountPocket }}
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
 * ## 記事上シェアボタン
 *
 * 記事上に表示するシェアボタン群を表示するコンポーネント。
 * ページタイトルとURL、各SNSのシェアカウントを受け取る。
 * ポップアップが表示されるシェアリンクとシェアカウントを表示する。
 */
export default defineComponent({
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
.AppShareButtonsTop {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: $scale40;
  margin-bottom: $scale80;
  > *:not(:last-child) {
    margin-right: $scale40;
    @media (max-width: $tablet) {
      margin-right: $scale28;
    }
  }
  &__ShareItemHatena,
  &__ShareItemTwitter,
  &__ShareItemFacebook,
  &__ShareItemPocket {
    width: 64px;
    height: 64px;
    transition: 0.3s;
    @media (max-width: $tablet) {
      width: 48px;
      height: 48px;
    }
    @media (max-width: $mobile) {
      width: 40px;
      height: 40px;
    }
    a {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-weight: $font-weight-700;
      border-radius: $border-radius34;
      @media (max-width: $tablet) {
        border-radius: $border-radius24;
      }
    }
  }
  &__ShareItemHatena {
    &:hover {
      transform: rotate(12deg);
    }
    a {
      background-color: $share-hb-button-color;
      border: $border-width3 solid $share-hb-button-color;
    }
  }
  &__ShareItemTwitter {
    &:hover {
      transform: rotate(-12deg);
    }
    a {
      background-color: $share-tw-button-color;
      border: $border-width3 solid $share-tw-button-color;
    }
  }
  &__ShareItemFacebook {
    &:hover {
      transform: rotate(12deg);
    }
    a {
      background-color: $share-fb-button-color;
      border: $border-width3 solid $share-fb-button-color;
    }
  }
  &__ShareItemPocket {
    &:hover {
      transform: rotate(-12deg);
    }
    a {
      background-color: $share-pk-button-color;
      border: $border-width3 solid $share-pk-button-color;
    }
  }
  &__ShareCountHatena,
  &__ShareCountTwitter,
  &__ShareCountFacebook,
  &__ShareCountPocket {
    margin-top: $scale12;
    font-size: $font-size-110rem;
    text-align: center;
  }
}
</style>
