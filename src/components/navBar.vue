<template>
  <nav class="py-4 md:block hidden">
    <ul class="flex justify-center text-white text-sm">
      <li
        v-for="item in items"
        :key="item.index"
        :class="{ 'text-orange-600 font-bold': currentHash === '#' + item.link }"
      >
        <a
          class="px-5 font-bold hover:text-orange-400"
          href="#"
          @click.prevent="scrollToComponent(item.link)"
          v-html="item.name"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    if (window.location.hash) {
      window.location.hash = '#home'
    }
  },
  data() {
    return {
      items: [
        { name: 'Home', link: 'home' },
        { name: 'About', link: 'about' },
        { name: 'Resume', link: 'resume' },
        { name: 'Works', link: 'portfolio' },
        { name: 'Contact', link: 'contact' }
      ]
    }
  },
  computed: {
    currentHash() {
      return window.location.hash
    }
  },
  methods: {
    scrollToComponent(componentId) {
      this.$nextTick(() => {
        const element = document.getElementById(componentId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          window.location.hash = componentId
        }
      })
    }
  }
}
</script>

<style scoped></style>
