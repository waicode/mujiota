<template>
  <div class="Mujiota">
    <AppHeader />
    <div class="Mujiota__Wrapper">
      <div class="Mujiota__Columns">
        <main
          class="Mujiota__MainColumn column is-9-desktop is-9-tablet is-12-mobile"
        >
          <div>
            <Nuxt />
          </div>
        </main>
        <aside
          class="Mujiota__SubColumn column is-3-desktop is-3-tablet is-12-mobile"
        >
          <div>
            <AppSideBar />
          </div>
        </aside>
        <AppReturnTopButton class="Mujiota__PageTopButton"></AppReturnTopButton>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MujiotaLayoutDefault',
})
</script>

<style lang="scss">
$container-max-width: 1200px;
.Mujiota {
  &__Wrapper {
    max-width: $container-max-width;
    padding: $scale32 $scale12;
    margin: $scale112 auto $scale96;
    background-color: $bg-secondary-color;
    border-radius: $border-radius10;
    box-shadow: 0 0 20px $container-shadow-color;
    @media (max-width: $desktop) {
      max-width: 96%;
    }
    @media (max-width: $tablet) {
      max-width: 100%;
      margin: $scale96 auto $scale64;
    }
  }
  &__MainColumn {
    > div {
      // 左の余白をsub右余白と合わせる
      padding: $scale8 $scale24 $scale8 $scale32;
      @media (max-width: $tablet) {
        // モバイルは縦並び
        padding: $scale8 $scale12;
      }
    }
    @media (max-width: $tablet) {
      padding: $scale8 $scale12;
    }
  }
  &__SubColumn {
    > div {
      // 右の余白をmain左余白と合わせる
      padding: $scale4 $scale32 $scale4 $scale8;
      @media (max-width: $tablet) {
        // モバイルは縦並び
        padding: $scale8 $scale12;
      }
    }
    @media (max-width: $tablet) {
      padding: $scale8 $scale12;
    }
  }
  &__PageTopButton {
    @media (max-width: $tablet) {
      display: none;
    }
  }
}
</style>
