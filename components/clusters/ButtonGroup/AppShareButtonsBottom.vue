<template>
  <div class="share-bottom">
    <div class="share-title">Share on SNS</div>
    <div class="share-buttons">
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
      ShareCountHatena: 0,
      ShareCountTwitter: 0,
      ShareCountFacebook: 0,
      ShareCountPocket: 0,
      shareUrlHatena,
      shareUrlTwitter,
      shareUrlFacebook,
      shareUrlPocket,
    }
  },
})
</script>
<style lang="scss" scoped>
.share-bottom {
  margin-top: $scale80;
  margin-bottom: $scale80;
  .share-title {
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
  .share-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .share-item {
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
      &.hb {
        a {
          background-color: $share-hb-button-color;
          border: $border-width3 solid $share-hb-button-color;
        }
      }
      &.tw {
        a {
          background-color: $share-tw-button-color;
          border: $border-width3 solid $share-tw-button-color;
        }
      }
      &.fb {
        a {
          background-color: $share-fb-button-color;
          border: $border-width3 solid $share-fb-button-color;
        }
      }
      &.pk {
        a {
          background-color: $share-pk-button-color;
          border: $border-width3 solid $share-pk-button-color;
        }
      }
    }
    .share-count {
      margin-top: $scale16;
      font-size: $font-size-110rem;
      text-align: center;
    }
  }
}
</style>
