<template>
  <div class="block md:hidden">
    <div class="flex justify-end pt-5 pb-6 px-5">
      <button @click="isMenuOpen = !isMenuOpen" class="flex justify-end relative z-40">
        <div v-if="!isMenuOpen" class="flex flex-col p-2 bg-orange-600">
          <span class="w-4 h-0.5 bg-white mb-1"></span>
          <span class="w-4 h-0.5 bg-white mb-1"></span>
          <span class="w-4 h-0.5 bg-white"></span>
        </div>
        <div v-else class="p-2 bg-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </button>
    </div>
    <transition name="dropdown">
      <div
        v-if="isMenuOpen"
        class="fixed bg-gray-800 top-0 right-0 left-0 z-30 bottom-0 inset-x-0 transition lg:hidden"
      >
        <ul class="pt-16">
          <li v-for="item in items" :key="item.name" class="px-4 py-3 text-sm">
            <a
              @click.prevent="navigateAndCloseMenu(item.link)"
              href="#"
              class="font-bold text-white block"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      items: [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Resume', link: '#resume' },
        { name: 'Works', link: '#portfolio' },
        { name: 'Contact', link: '#contact' }
      ]
    }
  },
  methods: {
    navigateAndCloseMenu(targetId) {
      this.$nextTick(() => {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
        this.isMenuOpen = false
      })
    }
  }
}
</script>

<style scoped></style>
