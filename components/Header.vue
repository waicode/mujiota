<template>
  <div>
    <div class="header-bg"></div>
    <header id="header" class="header">
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="topnav-icon icon-sitemap"
                @click="isComponentModalActive = true"
              >
                <SearchIconSvg />
              </a>
              <b-modal
                v-model="isComponentModalActive"
                has-modal-card
                full-screen
                :can-cancel="false"
              >
                <SearchModal></SearchModal>
              </b-modal>
              <nuxt-link to="/sitemap" class="topnav-icon icon-sitemap">
                <SitemapIconSvg />
              </nuxt-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="logo-mujiota">
        <NuxtLink to="/"><MujiotaLogoSvg /></NuxtLink>
      </div>
    </header>
  </div>
</template>
<script>
import MujiotaLogoSvg from '@/assets/images/shared/logo/mujiota-logo.svg'
import SearchIconSvg from '@/assets/images/shared/icon/ic_search_24px.svg'
import SitemapIconSvg from '@/assets/images/shared/icon/sitemap-solid.svg'

import SearchModal from '@/components/SearchModal.vue'

export default {
  components: {
    MujiotaLogoSvg,
    SearchIconSvg,
    SitemapIconSvg,
    SearchModal,
  },
  data() {
    return {
      isComponentModalActive: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.header {
  .navbar {
    padding: 28px 0 0 32px;
    margin-left: 232px;
    height: 104px;
    background-color: transparent;
  }
}
$logo-color: #67041b;
$circle-color: #6f4952;
.logo-mujiota {
  position: relative;
  display: block;
  width: 12%;
  top: 60px;
  left: 40px;
}
.topnav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid $circle-color;
  border-radius: 50%;
  &.icon-serch svg {
    width: 24px;
    height: 24px;
    fill: $logo-color;
  }
  &.icon-sitemap svg {
    width: 24px;
    position: relative;
    top: -1px;
    fill: $logo-color;
  }
  &.icon-email svg {
    width: 24px;
    height: 24px;
    fill: $logo-color;
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:last-child {
    margin-right: 20px;
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
