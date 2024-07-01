<template>
  <footer>
    <div class="bg-black w-full py-10 md:py-16 relative">
      <div class="o-container">
        <div class="text-white">
          <div class="flex justify-center mb-6">
            <ul class="flex space-x-6">
              <li class="" v-for="media in social" :key="media.name">
                <a class="w-6 h-6 md:w-10 md:h-10" :href="media.url" target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', media.icon]"
                    class="text-white p-2 md:p-6 rounded-full bg-gray-700"
                /></a>
              </li>
            </ul>
          </div>
          <div class="flex justify-center">
            <span>&copy; Copyright 2024 Anish Khanal</span>
          </div>
          <div id="go-top">
            <a class="smoothscroll" title="Back to Top" href="#home">
              <i class="icon-up-open"></i>
            </a>
          </div>
        </div>
        <button class="w-6 h-6 md:w-10 md:h-10 absolute -top-4 text-white left-1/2">
          <a
            href="#"
            @click.prevent="handleScroll"
            class="bg-white text-gray-800 hover:text-white hover:bg-gray-800 transition duration-300 ease-in-out rounded-full h-10 w-10 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6 bg-transparent sm:h-8 sm:w-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"></path>
            </svg>
          </a>
        </button>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      social: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/anish.khanal.16?mibextid=LQQJ4d',
          icon: 'facebook'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/anish-khanal-027726193/',
          icon: 'linkedin'
        },
        {
          name: 'github',
          url: 'https://github.com/khanalanish/',
          icon: 'github'
        }
      ]
    }
  },
  methods: {
    handleScroll() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
