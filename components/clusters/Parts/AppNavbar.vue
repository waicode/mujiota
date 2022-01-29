<template>
  <div :class="className">
    <b-navbar fixed-top transparent>
      <template #brand>
        <transition name="fade">
          <div v-show="logoActive">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                src="/logo/mujiota-logo.png"
                srcset="/logo/mujiota-logo.png 1x, /logo/mujiota-logo@2x.png 2x"
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
              <div class="AppNavbar__TopnavIcons">
                <a
                  class="AppNavbar__IconSearchLink"
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
                <nuxt-link to="/sitemap" class="AppNavbar__IconSitemapLink">
                  <SitemapIconSvg />
                </nuxt-link>
              </div>
            </div>
          </transition>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import SearchIconSvg from '@/assets/images/shared/icon/ic_search_24px.svg'
import SitemapIconSvg from '@/assets/images/shared/icon/sitemap-solid.svg'
import { bemx } from '@/composables/util'
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  unref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppNavbar',
  components: {
    SearchIconSvg,
    SitemapIconSvg,
  },
  setup() {
    const scroll = ref(0)
    const isComponentModalActive = ref(false)
    const logoActive = ref(true)
    const navBtnActive = ref(true)
    const navBtnOnTop = ref(true)

    // ロゴとボタンの表示制御
    const scrollDisplayControl = () => {
      const logoTop = 80 // ロゴを消したい位置
      const navBtnTop = 83 // ボタンを消したい位置
      const mobileMediaQuery = window.matchMedia('(max-width: 768px)') // < $tablet
      scroll.value = window.scrollY
      logoActive.value = logoTop > scroll.value
      navBtnOnTop.value = navBtnTop > scroll.value
      if (mobileMediaQuery.matches) {
        navBtnActive.value = navBtnOnTop.value
      } else {
        // モバイル以外は常に表示
        navBtnActive.value = true
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', scrollDisplayControl)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', scrollDisplayControl)
    })

    const className = computed(() => {
      bemx('AppNavbar', { onTop: unref(navBtnOnTop) })
    })

    return {
      className,
      isComponentModalActive,
      logoActive,
      navBtnActive,
      navBtnOnTop,
      scroll,
    }
  },
})
</script>

<style lang="scss">
.AppNavbar {
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
    opacity: 0;
  }

  $navbar-brand-short-width: 84px;
  @media (max-width: $mobile) {
    .navbar-brand {
      img {
        // 画面幅が狭いとヘッダーナビがはみ出るためロゴ幅を小さく補正
        width: $navbar-brand-short-width !important;
      }
    }
  }

  $topnav-icon-width: 50px;
  $topnav-icon-height: 50px;

  $logo-color: #67041b;
  $logo-alpha-color: rgba(103, 4, 27, 0.24);
  $circle-color: #6f4952;
  $circle-alpha-color: rgba(111, 73, 82, 0.28);

  &__TopnavIcons {
    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: $topnav-icon-width;
      height: $topnav-icon-height;
      background-color: transparent;
      border: $border-width2 solid $circle-alpha-color;
      border-radius: $border-radius-half;

      svg {
        fill: $logo-alpha-color;
      }

      &:not(:last-child) {
        margin-right: $scale16;
      }
      &:last-child {
        margin-right: 0;
      }
      &:focus,
      &:hover {
        background-color: $circle-color;
        border: $border-width2 solid transparent;
        svg {
          fill: $white-color;
        }
      }
    }
    &--onTop {
      a {
        border: $border-width2 solid $circle-color;
        svg {
          fill: $logo-color;
        }
      }
    }
  }

  $topnav-icon-svg-width: 24px;
  $topnav-icon-svg-height: $topnav-icon-svg-width;

  &__IconSearchLink {
    svg {
      position: relative;
      width: $topnav-icon-svg-width;
      height: $topnav-icon-svg-height;
    }
  }

  &__IconSitemapLink {
    svg {
      position: relative;
      top: -1px;
      width: $topnav-icon-svg-width;
    }
  }

  &__IconEmailLink {
    svg {
      width: $topnav-icon-svg-width;
      height: $topnav-icon-svg-height;
    }
  }
}
</style>
