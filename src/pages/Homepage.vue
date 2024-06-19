<template>
  <div>
    <!-- header component -->
    <Header />

    <Banner />
    <div class="o-container">
      <!-- content components -->
      <h1>Homepage</h1>
    </div>
    <!-- footer component -->
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/banner.vue'
export default {
  name: 'Homepage',
  components: {
    Header,
    Banner,
    Footer
  }
}
</script>
<style scoped></style>
