<template>
  <div>
    <div class="header-bg"></div>
    <div class="header">
      <b-navbar fixed-top transparent>
        <template #brand>
          <transition name="fade">
            <div v-show="logoActive">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <MujiotaLogoSvg />
              </b-navbar-item>
            </div>
          </transition>
        </template>
        <template #start> </template>
        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a
                class="topnav-icon icon-serch"
                :class="{ ontop: logoActive }"
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
                <SearchModal></SearchModal>
              </b-modal>
              <nuxt-link
                to="/sitemap"
                class="topnav-icon icon-sitemap"
                :class="{ ontop: logoActive }"
              >
                <SitemapIconSvg />
              </nuxt-link>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>
<script>
import MujiotaLogoSvg from '@/assets/images/shared/logo/mujiota-logo.svg'
import SearchIconSvg from '@/assets/images/shared/icon/ic_search_24px.svg'
import SitemapIconSvg from '@/assets/images/shared/icon/sitemap-solid.svg'

export default {
  components: {
    MujiotaLogoSvg,
    SearchIconSvg,
    SitemapIconSvg,
  },
  data() {
    return {
      isComponentModalActive: false,
      logoActive: true,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      const top = 80 // ロゴを消したい位置
      this.scroll = window.scrollY
      this.logoActive = top > this.scroll
    },
  },
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
$logo-color: #67041b;
$logo-alpha-color: rgba(103, 4, 27, 0.24);
$circle-color: #6f4952;
$circle-alpha-color: rgba(111, 73, 82, 0.28);

a.topnav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
      width: 24px;
      top: -1px;
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
  width: 100%;
  height: 40vh;
  overflow: hidden;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: none;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      160deg,
      rgba(224, 224, 224, 0.85),
      rgba(97, 97, 97, 0.85)
    );
  }
}
</style>
