<template>
  <footer class="footer">
    <div class="social-icons">
      <ul>
        <li class="icon-twitter">
          <a href="https://twitter.com/waicode37" target="_blank">
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
      <p>© {{ thisYear }} mujiota.com</p>
    </div>
  </footer>
</template>
<script>
import TwitterIconSvg from '@/assets/images/shared/icon/iconmonstr-twitter-1.svg'
import GithubIconSvg from '@/assets/images/shared/icon/iconmonstr-github-1.svg'
// import EmailIconSvg from '@/assets/images/shared/icon/iconmonstr-paper-plane-4.svg'

export default {
  name: 'MujiotaFooter',
  components: {
    TwitterIconSvg,
    GithubIconSvg,
    // EmailIconSvg,
  },
  data() {
    return {
      thisYear: new Date().getFullYear(),
    }
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
    padding: 32px 48px;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-right: 32px;
        }
        svg {
          fill: #fff;
        }
        &.icon-twitter {
          a {
            svg {
              width: 48px;
              height: 48px;
            }
            &:focus,
            &:hover {
              svg {
                fill: #81d4fa;
              }
            }
          }
        }
        &.icon-github {
          a {
            svg {
              width: 48px;
              height: 48px;
            }
            &:focus,
            &:hover {
              svg {
                fill: #9fa8da;
              }
            }
          }
        }
        &.icon-email {
          a {
            svg {
              width: 48px;
              height: 48px;
            }
            &:focus,
            &:hover {
              svg {
                fill: #eee;
              }
            }
          }
        }
      }
    }
  }
  .copyright {
    font-size: 1.8rem;
    font-weight: 200;
    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }
  }
}
</style>
