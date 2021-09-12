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
        <ReturnTopButton></ReturnTopButton>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'
import ReturnTopButton from '@/components/ReturnTopButton'
export default {
  components: {
    Header,
    SideBar,
    Footer,
    ReturnTopButton,
  },
}
</script>
<style lang="scss" scoped>
$bg-secondary-color: #fafafa;
.wrapper {
  max-width: 1280px;
  margin: 112px auto 96px;
  padding: 32px 12px;
  background-color: $bg-secondary-color;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: $tablet) {
    margin: 48px auto 64px;
  }
  .main {
    .contents-wrapper {
      padding: 8px 24px 8px 32px;
    }
    @media (max-width: $tablet) {
      padding: 8px 12px;
    }
  }
  .sub {
    .contents-wrapper {
      // 右の余白をmain左余白と合わせる
      padding: 4px 32px 4px 8px;
    }
    @media (max-width: $tablet) {
      padding: 8px 12px;
    }
  }
}
</style>
