<template>
  <div class="bg-gray-800 py-10 md:py-16">
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
            A Computer Engineer graduate passionate in software development with preferences in
            Frontend development and blockchain tecgnologies and basic aim is to associate with an
            organization that progresses dynamically and gives me chance to update my knowledge and
            enhance my skills in every prospectives of Computer engineering field and be a part of
            the team that excels in work towards the growth of organization.
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
                <a href="" target="blank" class="c-btn">
                  <font-awesome-icon :icon="['fas', 'download']" />
                  <span class="pl-2">Download Resume</span>
                </a>
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
export default {
  data() {
    return {
      imageSrc: headshot
    }
  }
}
</script>
<style></style>
