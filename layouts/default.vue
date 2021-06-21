<template>
  <div>
    <Header />
    <div class="wrapper columns">
      <main class="main column is-four-fifths">
        <Nuxt />
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
body {
  background-color: #eee;
}
$bg-secondary-color: #fafafa;
.wrapper {
  width: 1200px;
  margin: 56px auto 96px;
  padding: 32px 24px 32px 0;
  background-color: $bg-secondary-color;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
