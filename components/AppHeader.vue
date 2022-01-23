<template>
  <div>
    <div class="header-bg"></div>
    <div class="header">
      <b-navbar fixed-top transparent>
        <template #brand>
          <transition name="fade">
            <div v-show="logoActive">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                  src="/logo/mujiota-logo.png"
                  srcset="
                    /logo/mujiota-logo.png    1x,
                    /logo/mujiota-logo@2x.png 2x
                  "
                  alt="mujiota.com"
                />
              </b-navbar-item>
            </div>
          </transition>
        </template>
        <template #start> </template>
        <template #end>
          <b-navbar-item tag="div">
            <transition name="fade">
              <div v-show="navBtnActive">
                <div class="buttons">
                  <a
                    class="topnav-icon icon-serch"
                    :class="{ ontop: navBtnOnTop }"
                    @click="isComponentModalActive = true"
                  >
                    <SearchIconSvg />
                  </a>
                  <b-modal
                    v-model="isComponentModalActive"
                    has-modal-card
                    aria-role="dialog"
                    aria-label="search modal"
                    aria-modal
                    scroll="keep"
                    animation="fade"
                    :can-cancel="['escape', 'outside']"
                  >
                    <AppSearchModal />
                  </b-modal>
                  <nuxt-link
                    to="/sitemap"
                    class="topnav-icon icon-sitemap"
                    :class="{ ontop: navBtnOnTop }"
                  >
                    <SitemapIconSvg />
                  </nuxt-link>
                </div>
              </div>
            </transition>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>
<script>
import SearchIconSvg from '@/assets/images/shared/icon/ic_search_24px.svg'
import SitemapIconSvg from '@/assets/images/shared/icon/sitemap-solid.svg'

export default {
  name: 'MujiotaHeader',
  components: {
    SearchIconSvg,
    SitemapIconSvg,
  },
  data() {
    return {
      isComponentModalActive: false,
      logoActive: true,
      navBtnActive: true,
      navBtnOnTop: true,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      const logoTop = 80 // ロゴを消したい位置
      const navBtnTop = 83 // ボタンを消したい位置
      const mobileMediaQuery = window.matchMedia('(max-width: 768px)') // < $tablet
      this.scroll = window.scrollY
      this.logoActive = logoTop > this.scroll
      this.navBtnOnTop = navBtnTop > this.scroll
      if (mobileMediaQuery.matches) {
        this.navBtnActive = this.navBtnOnTop
      } else {
        // モバイル以外は常に表示
        this.navBtnActive = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
// ナビバー
.navbar {
  padding-top: $scale20;
}
.navbar-brand {
  padding: $scale24 $scale28 $scale20;
  @media (max-width: $desktop) {
    padding: $scale28 $scale28 $scale20;
  }
  @media (max-width: $tablet) {
    padding: $scale32 $scale24 $scale20;
  }
}
.navbar-end {
  .navbar-item {
    padding: $scale24;
  }
}
.navbar-menu {
  background-color: transparent;
  box-shadow: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0%;
}

$logo-color: #67041b;
$logo-alpha-color: rgba(103, 4, 27, 0.24);
$circle-color: #6f4952;
$circle-alpha-color: rgba(111, 73, 82, 0.28);

@media (max-width: $mobile) {
  .navbar-brand {
    img {
      // 画面幅が狭いとヘッダーナビがはみ出るためロゴ幅を小さく補正
      width: 84px !important;
    }
  }
}

a.topnav-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 2px solid $circle-alpha-color;
  border-radius: 50%;

  svg {
    fill: $logo-alpha-color;
  }

  &.ontop {
    border: 2px solid $circle-color;
    svg {
      fill: $logo-color;
    }
  }

  &.icon-serch {
    svg {
      position: relative;
      width: 24px;
      height: 24px;
    }
  }

  &.icon-sitemap {
    svg {
      position: relative;
      top: -1px;
      width: 24px;
    }
  }
  &.icon-email {
    svg {
      width: 24px;
      height: 24px;
    }
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:last-child {
    margin-right: 0;
  }
  &:focus,
  &:hover {
    background-color: $circle-color;
    border: 2px solid transparent;
    svg {
      fill: #fff;
    }
  }
}
.header-bg {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background-image: linear-gradient(
      160deg,
      rgba(224, 224, 224, 0.85),
      rgba(97, 97, 97, 0.85)
    );
  }
}
</style>
