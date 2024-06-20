<template>
  <div>
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
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 class="text-3xl md:text-7xl font-semibold md:font-bold text-white">Anish Khanal</h1>
      <div class="text-2xl md:text-3xl font-bold text-center text-white">
        <span class="typewriter">{{ typedText }}</span>
        <span class="cursor ml-1 w-2 h-6 bg-black inline-block"></span>
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
      currentTextIndex: 1
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
