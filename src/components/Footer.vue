<template>
  <footer>
    <div class="nt-auto">
      <div class="bg-gray-800 text-white w-full pt-16 px-4">
        <div class="flex justify-center mb-6">
          <ul class="flex gap-x-6">
            <li class="" v-for="media in social" :key="media.name">
              <a class="w-6 h-6 md:w-10 md:h-10" :href="media.url"
                ><font-awesome-icon
                  :icon="['fab', media.icon]"
                  class="text-white p-2 md:p-6 rounded-full bg-gray-600"
              /></a>
            </li>
          </ul>
        </div>
        <div class="bg-gray-800 flex justify-center">
          <span>&copy; Copyright 2024 Anish Khanal</span>
        </div>
        <div id="go-top">
          <a class="smoothscroll" title="Back to Top" href="#home">
            <i class="icon-up-open"></i>
          </a>
        </div>
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
  methods: {}
}
</script>
