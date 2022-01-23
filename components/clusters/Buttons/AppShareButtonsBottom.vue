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
import { computed, defineComponent } from '@vue/composition-api'

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
  margin-top: 80px;
  margin-bottom: 80px;
  .share-title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 28px;
    font-size: 1.68rem;
    font-weight: bold;
    text-align: center;
    @media (max-width: $tablet) {
      font-size: 1.32rem;
    }
    &::before,
    &::after {
      width: 2px;
      height: 1.68rem;
      content: '';
      background-color: $text;
    }
    &::before {
      margin-right: 32px;
      transform: rotate(-35deg);
    }
    &::after {
      margin-left: 32px;
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
        height: 56px;
        font-weight: 700;
        color: #f2f2f2;
        border-radius: 8px;
        transition: 0.3s;
      }
      a:hover {
        transform: translateY(-8px);
      }
      &.hb {
        a {
          background-color: #00a4de;
          border: 3px solid #00a4de;
        }
      }
      &.tw {
        a {
          background-color: #1da1f2;
          border: 3px solid #1da1f2;
        }
      }
      &.fb {
        a {
          background-color: #1877f2;
          border: 3px solid #1877f2;
        }
      }
      &.pk {
        a {
          background-color: #ee4056;
          border: 3px solid #ee4056;
        }
      }
    }
    .share-count {
      margin-top: 16px;
      font-size: 1.1rem;
      text-align: center;
    }
  }
}
</style>
