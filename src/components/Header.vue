<template>
  <header>
    <div class="fixed z-20 top-0 left-0 right-0">
      <nav class="py-4 md:block hidden">
        <ul class="flex justify-center text-white text-sm">
          <li class=""><a class="px-5 font-bold hover:text-orange-400" href="#home">Home</a></li>
          <li><a class="px-5 font-bold hover:text-orange-400" href="#about">About</a></li>
          <li><a class="px-5 font-bold hover:text-orange-400" href="#resume">Resume</a></li>
          <li><a class="px-5 font-bold hover:text-orange-400" href="#portfolio">Works</a></li>
          <li><a class="px-5 font-bold hover:text-orange-400" href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="block md:hidden">
        <div class="flex justify-end pr-4 relative">
          <button @click="toggleMenu" class="flex justify-end relative z-20">
            <div v-if="!isMenuOpen" class="flex flex-col p-2 bg-orange-600">
              <span class="w-4 h-0.5 bg-white mb-1"></span>
              <span class="w-4 h-0.5 bg-white mb-1"></span>
              <span class="w-4 h-0.5 bg-white"></span>
            </div>
            <div v-else class="p-2 bg-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-800"
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
          <transition name="dropdown">
            <div
              v-if="isMenuOpen"
              class="menu-content absolute left-0 top-0 w-screen h-screen bg-white shadow-md z-10 mt-1 flex flex-col"
            >
              <ul class="pt-10">
                <li class="px-4 py-3 text-sm">
                  <a href="#home" class="font-bold text-gray-800 block">Home</a>
                </li>
                <li class="px-4 py-3">
                  <a href="#about" class="font-bold text-gray-800 block">About</a>
                </li>
                <li class="px-4 py-3">
                  <a href="#resume" class="font-bold text-gray-800 block">Resume</a>
                </li>
                <li class="px-4 py-3">
                  <a href="#portfolio" class="font-bold text-gray-800 block">Works</a>
                </li>
                <li class="px-4 py-3">
                  <a href="#contact" class="font-bold text-gray-800 block">Contact</a>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
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
