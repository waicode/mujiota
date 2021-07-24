<template>
  <div>
    <Header />
    <div class="wrapper columns">
      <main class="main column is-9">
        <div class="contents-wrapper">
          <Nuxt />
        </div>
      </main>
      <aside class="sub column">
        <SideBar />
      </aside>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
}
</script>
<style lang="scss" scoped>
$bg-secondary-color: #fafafa;
.wrapper {
  max-width: 1200px;
  margin: 112px auto 96px;
  padding: 32px 24px 32px 0;
  background-color: $bg-secondary-color;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.main {
  width: calc(100% - 300px);
  .contents-wrapper {
    padding: 8px 32px;
  }
}
.sub {
  min-width: 300px;
}
</style>
