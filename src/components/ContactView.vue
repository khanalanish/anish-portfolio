<template>
  <div class="bg-gray-800 py-10 md:py-16">
    <div class="o-container">
      <div class="flex items-center pb-6">
        <span class="h-16 w-16 hidden md:block text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </span>
        <span class="text-white md:pl-4 text-xl md:text-2xl font-semibold">Get in touch</span>
      </div>
      <div class="grid md:grid-cols-2 gap-8 text-white">
        <div class="md:col-span-1 order-last md:order-none">
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <input
                v-model="form.name"
                class="w-full p-4 bg-neutral-700 border border-neutral-700 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm"
                name="name"
                placeholder="Name"
                type="text"
              />
            </div>
            <div class="mb-4">
              <input
                v-model="form.email"
                autocomplete="email"
                class="w-full p-4 bg-neutral-700 border border-neutral-700 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm"
                name="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="mb-4">
              <textarea
                v-model="form.message"
                class="w-full p-4 bg-neutral-700 border border-neutral-700 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm"
                maxlength="250"
                name="message"
                placeholder="Message"
                rows="6"
              ></textarea>
            </div>
            <button
              aria-label="Submit contact form"
              class="o-transition c-btn c-btn--primary"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div class="md:col-span-1">
          <div>
            <span
              >Here is a good spot for a message to your readers to let them know how best to reach
              out to you.</span
            >
            <ul class="pt-6">
              <li v-for="contact in contacts" :key="contact.id" class="py-2 last:pb-0">
                <a class="flex items-center" :href="contact.url" target="_blank">
                  <span class="text-white">
                    <component :is="contact.iconComponent" />
                  </span>
                  <span class="pl-3">{{ contact.detail }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import instaIcon from '../components/icons/insta.vue'
import emailIcon from '../components/icons/email.vue'
import githubIcon from '../components/icons/gitHub.vue'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      contacts: [
        {
          id: 1,
          iconComponent: 'instaIcon',
          detail: 'ayy_nesh',
          url: 'https://www.instagram.com/ayy_nesh?igsh=MTgzbWkwcDVtcjIzZA%3D%3D&utm_source=qr'
        },
        {
          id: 2,
          iconComponent: 'emailIcon',
          detail: 'anish.khanal91@gmail.com',
          url: 'mailto:anish.khanal91@gmail.com'
        },
        {
          id: 3,
          iconComponent: 'githubIcon',
          detail: 'khanalanish',
          url: 'https://github.com/khanalanish'
        }
      ]
    }
  },
  components: {
    instaIcon,
    emailIcon,
    githubIcon
  },
  methods: {
    validateForm() {
      if (!this.form.name || !this.form.email || !this.form.message) {
        alert('All fields are required.')
        return false
      }
      return true
    },
    submitForm() {
      if (!this.validateForm()) return
      console.log('Form data submitted:', this.form)
    }
  }
}
</script>

<style scoped></style>
