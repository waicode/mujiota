<template>
  <div>
    <AppHeader />
    <div class="wrapper">
      <div class="columns">
        <main class="main column is-9-desktop is-9-tablet is-12-mobile">
          <div class="contents-wrapper">
            <Nuxt />
          </div>
        </main>
        <aside class="sub column is-3-desktop is-3-tablet is-12-mobile">
          <div class="contents-wrapper">
            <AppSideBar />
          </div>
        </aside>
        <AppReturnTopButton class="page-top-button"></AppReturnTopButton>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script lang="ts">
export default {
  name: 'MujiotaLayoutDefault',
}
</script>
<style lang="scss" scoped>
$bg-secondary-color: #fafafa;

.wrapper {
  max-width: 1200px;
  padding: 32px 12px;
  margin: 112px auto 96px;
  background-color: $bg-secondary-color;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  @media (max-width: $desktop) {
    max-width: 96%;
  }
  @media (max-width: $tablet) {
    max-width: 100%;
    margin: 96px auto 64px;
  }
  .main {
    .contents-wrapper {
      // 左の余白をsub右余白と合わせる
      padding: 8px 24px 8px 32px;
      @media (max-width: $tablet) {
        // モバイルは縦並び
        padding: 8px 12px;
      }
    }
    @media (max-width: $tablet) {
      padding: 8px 12px;
    }
  }
  .sub {
    .contents-wrapper {
      // 右の余白をmain左余白と合わせる
      padding: 4px 32px 4px 8px;
      @media (max-width: $tablet) {
        // モバイルは縦並び
        padding: 8px 12px;
      }
    }
    @media (max-width: $tablet) {
      padding: 8px 12px;
    }
  }
  .page-top-button {
    @media (max-width: $tablet) {
      display: none;
    }
  }
}
</style>
