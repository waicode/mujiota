<template>
  <footer class="footer">
    <div class="social-icons">
      <ul>
        <li class="icon-twitter">
          <a href="https://twitter.com/aiza_wai" target="_blank">
            <TwitterIconSvg />
          </a>
        </li>
        <li class="icon-github">
          <a href="https://github.com/waicode" target="_blank">
            <GithubIconSvg />
          </a>
        </li>
        <!-- <li class="icon-email">
          <EmailIconSvg />
        </li> -->
      </ul>
    </div>
    <div class="content has-text-centered copyright">
      <p>© 2021 mujiota.com</p>
    </div>
  </footer>
</template>
<script>
import TwitterIconSvg from '@/assets/images/shared/icon/iconmonstr-twitter-1.svg'
import GithubIconSvg from '@/assets/images/shared/icon/iconmonstr-github-1.svg'
// import EmailIconSvg from '@/assets/images/shared/icon/iconmonstr-paper-plane-4.svg'

export default {
  components: {
    TwitterIconSvg,
    GithubIconSvg,
    // EmailIconSvg,
  },
}
</script>
<style lang="scss" scoped>
.footer {
  color: #fff;
  background-color: #424242 !important;
  margin-top: 48px;
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 48px 32px;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-right: 32px;
        }
        &.icon-twitter svg {
          width: 48px;
          height: 48px;
          fill: #fff;
        }
        &.icon-github svg {
          width: 48px;
          height: 48px;
          fill: #fff;
        }
        &.icon-email svg {
          width: 48px;
          height: 48px;
          fill: #fff;
        }
      }
    }
  }
  .copyright {
    font-size: 1.8rem;
    font-weight: 200;
  }
}
</style>
