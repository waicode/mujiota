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
import axios from 'axios'

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
      shareCountHatena: 0,
      shareCountTwitter: 0,
      shareCountFacebook: 0,
      shareCountPocket: 0,
    }
  },
  computed: {
    pageUrl() {
      return `${process.env.BASE_URL}${this.article.id}/${this.article.slug}`
    },
    shareUrlHatena() {
      return `http://b.hatena.ne.jp/add?mode=confirm&url=${this.pageUrl}&title=${this.article.title}`
    },
    shareUrlTwitter() {
      return `https://twitter.com/intent/tweet?url=${this.pageUrl}&text=${this.article.title}`
    },
    shareUrlFacebook() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.pageUrl}&t=${this.article.title}`
    },
    shareUrlPocket() {
      return `http://getpocket.com/edit?url=${this.pageUrl}`
    },
  },
  mounted() {
    this.countHatena()
  },
  methods: {
    countHatena() {
      console.log('countHatena start')
      console.log('this.pageUrl', this.pageUrl)
      const hatenaCountUrl = `https://bookmark.hatenaapis.com/count/entry?url=${this.pageUrl}/`
      // TODO: network errorの解消
      axios.get(hatenaCountUrl).then((response) => {
        this.shareCountHatena = response.data
        console.log('shareCountHatena', this.shareCountHatena)
      })
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
  margin-bottom: 40px;
  > *:not(:last-child) {
    margin-right: 40px;
  }
  .share-item {
    width: 64px;
    height: 64px;
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
</style>
