<template>
  <div class="relative">
    <!-- header component -->
    <Header />
    <Banner />
    <AboutMe />
    <Resume />
    <ProjectsView />
    <!-- footer component -->
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/banner.vue'
import AboutMe from '../components/AboutMe.vue'
import Resume from '../components/Resume.vue'
import ProjectsView from '../components/ProjectsView.vue'
export default {
  name: 'Homepage',
  components: {
    Header,
    Banner,
    Footer,
    AboutMe,
    Resume,
    ProjectsView
  }
}
</script>
<style scoped></style>
