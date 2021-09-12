<template>
  <div>
    <Header />
    <div class="wrapper columns">
      <main class="main column is-9-desktop is-9-tablet is-12-mobile">
        <div class="contents-wrapper">
          <Nuxt />
        </div>
      </main>
      <aside class="sub column is-3-desktop is-3-tablet is-12-mobile">
        <SideBar />
      </aside>
      <ReturnTopButton></ReturnTopButton>
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
  padding: 32px 24px 32px 0;
  background-color: $bg-secondary-color;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.main {
  .contents-wrapper {
    padding: 8px 32px;
  }
}
.sub {
}
</style>
