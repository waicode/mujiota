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
import ShareIconHatena from '@/assets/images/shared/icon/share_icon_hatena_bookmark_17x14.svg'
import ShareIconTwitter from '@/assets/images/shared/icon/share_icon_twitter_20x16.25.svg'
import ShareIconFacebook from '@/assets/images/shared/icon/share_icon_facebook_17.5x17.5.svg'
import ShareIconPocket from '@/assets/images/shared/icon/share_icon_pocket_17.5x15.625.svg'

export default {
  components: {
    ShareIconHatena,
    ShareIconTwitter,
    ShareIconFacebook,
    ShareIconPocket,
  },
  props: {
    pageUrl: {
      require: true,
      type: String,
      default: null,
    },
    title: {
      require: true,
      type: String,
      default: null,
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
  data() {
    return {
      ShareCountHatena: 0,
      ShareCountTwitter: 0,
      ShareCountFacebook: 0,
      ShareCountPocket: 0,
    }
  },
  computed: {
    shareUrlHatena() {
      return `http://b.hatena.ne.jp/add?mode=confirm&url=${this.pageUrl}&title=${this.title}`
    },
    shareUrlTwitter() {
      return `https://twitter.com/intent/tweet?url=${this.pageUrl}&text=${this.title}`
    },
    shareUrlFacebook() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.pageUrl}&t=${this.title}`
    },
    shareUrlPocket() {
      return `http://getpocket.com/edit?url=${this.pageUrl}`
    },
  },
}
</script>
<style lang="scss" scoped>
.share-bottom {
  margin-top: 80px;
  margin-bottom: 80px;
  .share-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.68rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 28px;
    &::before,
    &::after {
      content: '';
      width: 2px;
      height: 1.68rem;
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
    justify-content: space-between;
    flex-wrap: wrap;
    .share-item {
      width: 23%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 56px;
        color: #f2f2f2;
        font-weight: 700;
        border-radius: 8px;
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
