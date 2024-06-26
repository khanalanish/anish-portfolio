<template>
  <nav class="py-4 md:block hidden">
    <ul class="flex justify-center text-white text-sm">
      <li
        v-for="item in items"
        :key="item.index"
        :class="{ 'text-orange-600 font-bold': currentHash === item.link }"
      >
        <a class="px-5 font-bold hover:text-orange-400" :href="item.link" v-html="item.name"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Resume', link: '#resume' },
        { name: 'Works', link: '#portfolio' },
        { name: 'Contact', link: '#contact' }
      ]
    }
  },
  computed: {
    currentHash() {
      return window.location.hash
    }
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
