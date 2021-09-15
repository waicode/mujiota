<template>
  <div class="share-bottom">
    <div class="share-title">Share on SNS</div>
    <div class="share-buttons">
      <div class="share-item hb">
        <a :href="ShareUrlHatena" target="_blank" rel="nofollow noopener">
          <ShareIconHatena />
        </a>
        <div v-if="ShareCountHatena > 0" class="share-count">
          {{ ShareCountHatena }}
        </div>
      </div>
      <div class="share-item tw">
        <a
          :href="ShareUrlTwitter"
          target="blank"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
        >
          <ShareIconTwitter />
        </a>
        <div v-if="ShareCountTwitter > 0" class="share-count">
          {{ ShareCountTwitter }}
        </div>
      </div>
      <div class="share-item fb">
        <a
          :href="ShareUrlFacebook"
          target="blank"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
        >
          <ShareIconFacebook />
        </a>
        <div v-if="ShareCountFacebook > 0" class="share-count">
          {{ ShareCountFacebook }}
        </div>
      </div>
      <div class="share-item pk">
        <a
          :href="ShareUrlPocket"
          target="blank"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
        >
          <ShareIconPocket />
        </a>
        <div v-if="ShareCountPocket > 0" class="share-count">
          {{ ShareCountPocket }}
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
    article: {
      require: true,
      type: Object,
      default: null,
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
    ShareUrlHatena() {
      return ``
    },
    ShareUrlTwitter() {
      return ``
    },
    ShareUrlFacebook() {
      return ``
    },
    ShareUrlPocket() {
      return ``
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
  }
}
</style>
