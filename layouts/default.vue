<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="columns">
        <main class="main column is-9-desktop is-9-tablet is-12-mobile">
          <div class="contents-wrapper">
            <Nuxt />
          </div>
        </main>
        <aside class="sub column is-3-desktop is-3-tablet is-12-mobile">
          <div class="contents-wrapper">
            <SideBar />
          </div>
        </aside>
        <ReturnTopButton class="page-top-button"></ReturnTopButton>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'MujiotaLayoutDefault',
}
</script>
<style lang="scss" scoped>
$bg-secondary-color: #fafafa;
.wrapper {
  padding: 32px 12px;
  background-color: $bg-secondary-color;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  max-width: 1200px;
  margin: 112px auto 96px;
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
