<template>
  <div class="share-top">
    <div class="share-item hb">
      <a :href="shareUrlHatena" target="_blank" rel="nofollow noopener">
        <ShareIconHatena />
      </a>
      <div v-if="shareCountHatena > 0" class="share-count">
        {{ shareCountHatena }}
      </div>
    </div>
    <div class="share-item tw">
      <a
        :href="shareUrlTwitter"
        target="blank"
        rel="nofollow noopener"
        onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
      >
        <ShareIconTwitter />
      </a>
      <div v-if="shareCountTwitter > 0" class="share-count">
        {{ shareCountTwitter }}
      </div>
    </div>
    <div class="share-item fb">
      <a
        :href="shareUrlFacebook"
        target="blank"
        rel="nofollow noopener"
        onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
      >
        <ShareIconFacebook />
      </a>
      <div v-if="shareCountFacebook > 0" class="share-count">
        {{ shareCountFacebook }}
      </div>
    </div>
    <div class="share-item pk">
      <a
        :href="shareUrlPocket"
        target="blank"
        rel="nofollow noopener"
        onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
      >
        <ShareIconPocket />
      </a>
      <div v-if="shareCountPocket > 0" class="share-count">
        {{ shareCountPocket }}
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

import ShareIconHatena from '@/assets/images/shared/icon/share_icon_hatena_bookmark_17x14.svg'
import ShareIconTwitter from '@/assets/images/shared/icon/share_icon_twitter_20x16.25.svg'
import ShareIconFacebook from '@/assets/images/shared/icon/share_icon_facebook_17.5x17.5.svg'
import ShareIconPocket from '@/assets/images/shared/icon/share_icon_pocket_17.5x15.625.svg'

export default defineComponent({
  components: {
    ShareIconHatena,
    ShareIconTwitter,
    ShareIconFacebook,
    ShareIconPocket,
  },
  props: {
    pageUrl: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    shareCountHatena: {
      type: Number,
      default: 0,
    },
    shareCountTwitter: {
      type: Number,
      default: 0,
    },
    shareCountFacebook: {
      type: Number,
      default: 0,
    },
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
.share-top {
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
  .share-item {
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
    &.hb {
      &:hover {
        transform: rotate(12deg);
      }
      a {
        background-color: $share-hb-button-color;
        border: $border-width3 solid $share-hb-button-color;
      }
    }
    &.tw {
      &:hover {
        transform: rotate(-12deg);
      }
      a {
        background-color: $share-tw-button-color;
        border: $border-width3 solid $share-tw-button-color;
      }
    }
    &.fb {
      &:hover {
        transform: rotate(12deg);
      }
      a {
        background-color: $share-fb-button-color;
        border: $border-width3 solid $share-fb-button-color;
      }
    }
    &.pk {
      &:hover {
        transform: rotate(-12deg);
      }
      a {
        background-color: $share-pk-button-color;
        border: $border-width3 solid $share-pk-button-color;
      }
    }
    .share-count {
      margin-top: $scale12;
      font-size: $font-size-110rem;
      text-align: center;
    }
  }
}
</style>
