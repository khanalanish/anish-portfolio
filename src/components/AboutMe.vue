<template>
  <div id="about" class="bg-gray-800 py-10 md:py-16 relative z-0">
    <div class="o-container">
      <div class="md:flex justify-between">
        <div class="w-full md:w-3/12 pb-8 md:pb-0">
          <div class="overflow-hidden rounded-full aspect-square">
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
        </div>
        <div class="md:w-8/12 text-white">
          <div class="text-2xl font-semibold pb-6">About Me</div>
          <div class="text-gray-600 text-base mb-10">
            Experienced front-end developer with over three years of hands-on experience creating
            responsive web applications. Proficient in HTML, CSS, and JavaScript, with a deep
            understanding of modern frameworks such as React, Alpine Js, and Vue.js. Skilled in
            translating design mockups and wireframes into high-quality code, ensuring cross-browser
            compatibility and optimal performance. Strong background in implementing user interfaces
            that are both visually appealing and functional. Proven ability to collaborate with
            cross-functional teams to deliver projects on time and according to specifications.
            Seeking to leverage technical expertise and creativity in a dynamic development
            environment.
          </div>
          <div class="md:flex justify-between">
            <div class="md:w-1/2">
              <div class="text-2xl font-semibold pb-6">Contact Details</div>
              <div class="flex flex-col text-gray-600 text-base">
                <span>Anish khanal</span>
                <span>Koteshwor</span>
                <span>Kathmandu, Bagmati, Nepal</span>
                <a href="tel:+9779843624717">+9779843624717</a>
                <a href="mailto:anish.khanal91@gmail.com">anish.khanal91@gmail.com</a>
              </div>
            </div>
            <div class="md:w-1/2 mt-6">
              <div class="flex">
                <button @click="downloadResume" class="c-btn">
                  <font-awesome-icon :icon="['fas', 'download']" />
                  <span class="pl-2">Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headshot from '../assets/images/headshot.png'
import resume from '../assets/anish-resume.pdf'
export default {
  data() {
    return {
      imageSrc: headshot
    }
  },
  methods: {
    downloadResume() {
      const link = document.createElement('a')
      link.href = resume
      link.setAttribute('download', 'Resume.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>
<style></style>
