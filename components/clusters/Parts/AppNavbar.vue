<template>
  <div :class="className">
    <b-navbar fixed-top transparent>
      <template #brand>
        <transition name="fade">
          <div v-show="isLogoActive">
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
            <div v-show="isNavBtnActive">
              <div class="AppNavbar__TopnavIcons">
                <a
                  class="AppNavbar__IconSearchLink"
                  @click="isComponentModalActive = true"
                >
                  <SearchIconSvg />
                </a>
                <AppSearchModal
                  :is-active="isComponentModalActive"
                  @close="isComponentModalActive = false"
                />
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
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@nuxtjs/composition-api'

import SearchIconSvg from '@/assets/images/shared/icon/ic_search_24px.svg'
import SitemapIconSvg from '@/assets/images/shared/icon/sitemap-solid.svg'

import { bemx } from '@/composables/util'

/**
 * ## ナビバー
 *
 * ヘッダーから呼ばれるナビバーのコンポーネント。
 * ロゴとメニューボタンで構成される。
 * ロゴを消す・メニューボタンの色を目立たなくする位置を指定する。
 */
export default defineComponent({
  name: 'AppNavbar',
  components: {
    SearchIconSvg,
    SitemapIconSvg,
  },
  props: {
    /**
     * ロゴを消したい位置。
     */
    logoHideTop: {
      type: Number,
      required: true,
    },
    /**
     * メニューボタンの色を目立たなくする位置。
     */
    menuButtonHideTop: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const isComponentModalActive = ref(false)
    const isLogoActive = ref(true)
    const isNavBtnActive = ref(true)
    const isNavBtnOnTop = ref(true)

    // ロゴとボタンの表示制御
    const scrollDisplayControl = () => {
      const mobileMediaQuery = window.matchMedia('(max-width: 768px)') // < $tablet
      isLogoActive.value = props.logoHideTop > window.scrollY
      isNavBtnOnTop.value = props.menuButtonHideTop > window.scrollY
      if (mobileMediaQuery.matches) {
        isNavBtnActive.value = isNavBtnOnTop.value
      } else {
        // モバイル以外は常に表示
        isNavBtnActive.value = true
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', scrollDisplayControl)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', scrollDisplayControl)
    })

    const className = computed(() =>
      bemx('AppNavbar', { onTop: isNavBtnOnTop.value })
    )

    return {
      className,
      isComponentModalActive,
      isLogoActive,
      isNavBtnActive,
    }
  },
})
</script>

<style lang="scss">
.AppNavbar {
  .navbar {
    padding-top: $scale20;
  }
  .navbar-item {
    // 固定して上に覆われたヘッダー全体でクリックを無効化しているため個別に有効化
    pointer-events: auto;
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
    display: flex;
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
  }

  &--onTop {
    .AppNavbar__TopnavIcons {
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
