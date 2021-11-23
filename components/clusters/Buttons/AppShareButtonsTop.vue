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
  methods: {
    count() {
      return {}
    },
  },
}
</script>
<style lang="scss" scoped>
.share-top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 80px;
  > *:not(:last-child) {
    margin-right: 40px;
    @media (max-width: $tablet) {
      margin-right: 28px;
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
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      color: #f2f2f2;
      font-weight: 700;
      border-radius: 34px;
      @media (max-width: $tablet) {
        border-radius: 24px;
      }
    }
    &.hb {
      &:hover {
        transform: rotate(12deg);
      }
      a {
        background-color: #00a4de;
        border: 3px solid #00a4de;
      }
    }
    &.tw {
      &:hover {
        transform: rotate(-12deg);
      }
      a {
        background-color: #1da1f2;
        border: 3px solid #1da1f2;
      }
    }
    &.fb {
      &:hover {
        transform: rotate(12deg);
      }
      a {
        background-color: #1877f2;
        border: 3px solid #1877f2;
      }
    }
    &.pk {
      &:hover {
        transform: rotate(-12deg);
      }
      a {
        background-color: #ee4056;
        border: 3px solid #ee4056;
      }
    }
    .share-count {
      margin-top: 12px;
      font-size: 1.1rem;
      text-align: center;
    }
  }
}
</style>
