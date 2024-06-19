<template>
  <div class="bg-cover bg-top absolute inset-0 z-0">
    <picture>
      <img :src="imageSrc" alt="Background image" class="object-cover w-full h-full" />
    </picture>
  </div>
</template>

<script>
import headerBackground from '../assets/images/header-background.jpg'
export default {
  data() {
    return {
      imageSrc: headerBackground
    }
  },
  components: {},
  methods: {}
}
</script>
