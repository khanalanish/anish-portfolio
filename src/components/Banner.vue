<template>
  <div id="home" class="relative z-10 h-[650px]">
    <div class="absolute left-0 right-0 top-0 bottom-0 -z-10">
      <div class="o-container">
        <div class="bg-cover bg-top absolute inset-0 z-0">
          <picture>
            <source media="(max-width:480px)" :srcset="imageSrc" />
            <source media="(max-width:767px)" :srcset="imageSrc" />
            <img
              :src="imageSrc"
              alt="Background image"
              class="object-cover object-center w-full h-full"
            />
          </picture>
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <h1
            class="text-3xl md:text-5xl lg:text-7xl font-semibold md:font-bold text-white text-center"
          >
            Anish Khanal
          </h1>
          <div class="text-2xl md:text-3xl font-bold text-center text-white pt-4">
            <span class="typewriter">{{ typedText }}</span>
            <span class="cursor ml-1 w-2 h-6 bg-black inline-block"></span>
          </div>
          <ul class="flex justify-center space-x-4 text-white pt-4">
            <li class="" v-for="media in social" :key="media.name">
              <a class="w-8 h-8 md:w-14 md:h-14" :href="media.url"
                ><font-awesome-icon :icon="['fab', media.icon]" class=""
              /></a>
            </li>
          </ul>
        </div>
        <div class="absolute z-30 -bottom-5 left-1/2">
          <a
            href="#"
            @click.prevent="handleNextComponent"
            class="bg-white text-gray-800 hover:text-white hover:bg-gray-800 transition duration-300 ease-in-out rounded-full h-10 w-10 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.84"
              height="9.42"
              viewBox="0 0 15.84 9.42"
            >
              <path
                id="Path_291"
                data-name="Path 291"
                d="M9124.635,4964.753l5.8,5.8,5.8-5.8"
                transform="translate(-9122.514 -4962.632)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBackground from '../assets/images/header-background.jpg'
export default {
  data() {
    return {
      imageSrc: headerBackground,
      typedText: '',
      fullText1: 'I am a Frontend Developer',
      fullText2: 'I make pretty things',
      typingSpeed: 100,
      currentTextIndex: 1,
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
    typeWriter() {
      let textToType = this.currentTextIndex === 1 ? this.fullText1 : this.fullText2
      if (this.typedText.length < textToType.length) {
        this.typedText += textToType.charAt(this.typedText.length)
        setTimeout(this.typeWriter, this.typingSpeed)
      } else {
        if (this.currentTextIndex === 1) {
          this.currentTextIndex = 2
          setTimeout(() => {
            this.typedText = ''
            this.typeWriter()
          }, 1000)
        } else {
          setTimeout(() => {
            this.typedText = ''
            this.currentTextIndex = 1
            this.typeWriter()
          }, 2000)
        }
      }
    },
    handleNextComponent() {
      this.$emit('next-component')
    }
  },
  mounted() {
    this.typeWriter()
  }
}
</script>
<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.cursor {
  animation: blink 1s step-end infinite;
}
</style>
