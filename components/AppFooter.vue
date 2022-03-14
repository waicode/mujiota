<template>
  <footer class="AppFooter">
    <div class="AppFooter__SocialIcons">
      <ul>
        <li class="AppFooter__TwitterIcon">
          <a
            href="https://twitter.com/waicode37"
            target="_blank"
            rel="noopener"
          >
            <TwitterIconSvg />
          </a>
        </li>
        <li class="AppFooter__GithubIcon">
          <a href="https://github.com/waicode" target="_blank" rel="noopener">
            <GithubIconSvg />
          </a>
        </li>
        <!-- <li class="AppFooter__EmailIcon">
          <EmailIconSvg />
        </li> -->
      </ul>
    </div>
    <div class="AppFooter__Copyright content has-text-centered">
      <p>© {{ thisYear }} mujiota.com</p>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TwitterIconSvg from '@/assets/images/shared/icon/iconmonstr-twitter-1.svg'
import GithubIconSvg from '@/assets/images/shared/icon/iconmonstr-github-1.svg'
// import EmailIconSvg from '@/assets/images/shared/icon/iconmonstr-paper-plane-4.svg'

/**
 * ## フッター
 *
 * ブログ全体のフッターコンポーネント。
 * ソーシャルアイコンリンクとCopyrightを表示する。
 */
export default defineComponent({
  name: 'AppFooter',
  components: { TwitterIconSvg, GithubIconSvg },
  setup() {
    return {
      thisYear: new Date().getFullYear(),
    }
  },
})
</script>

<style lang="scss">
$footer-bg-color: #424242;
$twitter-icon-color: #81d4fa;
$github-icon-color: #9fa8da;
$email-icon-color: #eee;

.AppFooter {
  padding: $scale24 0;
  margin-top: $scale48;
  color: $white-color;
  background-color: $footer-bg-color !important;

  &__SocialIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $scale32 $scale24;
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-right: $scale32;
        }
        svg {
          fill: $white-color;
        }
      }
    }
  }

  &__TwitterIcon,
  &__GithubIcon,
  &__EmailIcon {
    a {
      svg {
        width: $scale48;
        height: $scale48;
      }
    }
  }
  &__EmailIcon {
    a {
      &:focus,
      &:hover {
        svg {
          fill: $email-icon-color;
        }
      }
    }
  }

  &__GithubIcon {
    a {
      &:focus,
      &:hover {
        svg {
          fill: $github-icon-color;
        }
      }
    }
  }

  &__TwitterIcon {
    a {
      &:focus,
      &:hover {
        svg {
          fill: $twitter-icon-color;
        }
      }
    }
  }

  &__Copyright {
    font-size: $font-size-180rem;
    font-weight: $font-weight-200;
    @media (max-width: $tablet) {
      font-size: $font-size-120rem;
    }
  }
}
</style>
