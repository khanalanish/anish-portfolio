<template>
  <div class="relative">
    <Header />
    <Banner @next-component="handleNextComponent" />
    <AboutMe ref="aboutMe" />
    <Resume />
    <ProjectsView />
    <ContactView />

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
import ContactView from '../components/ContactView.vue'

export default {
  data() {
    return {
      currentComponent: 'Banner'
    }
  },
  name: 'Homepage',
  components: {
    Header,
    Banner,
    Footer,
    AboutMe,
    Resume,
    ProjectsView,
    ContactView
  },
  methods: {
    handleNextComponent() {
      this.$nextTick(() => {
        this.$refs.aboutMe.$el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
}
</script>

<style scoped></style>
