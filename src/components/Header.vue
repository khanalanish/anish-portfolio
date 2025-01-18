<template>
  <header>
    <div :class="['fixed top-0 left-0 z-20 right-0 js-navbar', { 'bg-gray-800': isScrolled }]">
      <Navbar />
      <MobileMenu />
    </div>
  </header>
</template>

<script>
import Navbar from '../components/navBar.vue'
import MobileMenu from '../components/mobileMenu.vue'

export default {
  components: {
    Navbar,
    MobileMenu
  },
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.5s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
