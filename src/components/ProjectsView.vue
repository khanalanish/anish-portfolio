<template>
  <div id="portfolio" class="py-10 md:py-16 bg-background">
    <div class="o-container">
      <h2 class="mb-12 text-base md:text-lg font-semibold text-center">
        CHECK OUT SOME OF MY WORKS.
      </h2>
      <div class="grid grid-cols-12 gap-y-8 md:gap-x-8">
        <div
          v-for="work in projects"
          :key="work.index"
          class="col-span-12 md:col-span-3 border-2 border-solid shadow-md border-gray-200 rounded-md"
        >
          <div class="overflow-hidden rounded-md relative pt-half">
            <a
              :href="work.link"
              class="block absolute left-0 right-0 top-0 bottom-0 transition-transform ease-in-out duration-300 transform lg:hover:scale-125"
              target="_blank"
            >
              <picture>
                <source media="(max-width:480px)" :srcset="work.imageSrc" />
                <source media="(max-width:767px)" :srcset="work.imageSrc" />
                <img
                  :src="work.imageSrc"
                  alt="Background image"
                  class="object-cover object-center w-full h-full"
                />
              </picture>
            </a>
          </div>
          <!-- <div class="p-3">
              <div class="text-xl font-semibold pt-4">{{ work.title }}</div>
              <div class="text-gray-600">{{ work.description }}</div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loadnepal from '../assets/images/portfolio/loadNepal.png'
import humanForce from '../assets/images/portfolio/humanForce.png'
import bingo from '../assets/images/portfolio/bingo.png'
import hrBlock from '../assets/images/portfolio/hrBlock.png'
import bossEnergy from '../assets/images/portfolio/bossEnergy.png'
import cooltex from '../assets/images/portfolio/cooltex.png'
export default {
  data() {
    return {
      projects: [
        {
          title: 'Load Nepal',
          description: '',
          imageSrc: loadnepal,
          hasLink: true,
          link: 'https://loadnepal.com/'
        },
        {
          title: 'humanforce',
          description: '',
          imageSrc: humanForce,
          hasLink: true,
          link: 'https://humanforce.com/'
        },
        {
          title: 'Bingo Industries',
          description: '',
          imageSrc: bingo,
          hasLink: true,
          link: 'https://www.bingoindustries.com.au/'
        },
        {
          title: 'HR Block',
          description: '',
          imageSrc: hrBlock,
          hasLink: true,
          link: 'https://www.hrblock.com.au/'
        },
        {
          title: 'BOSS Energy',
          description: '',
          imageSrc: bossEnergy,
          hasLink: true,
          link: 'https://bossenergy.com/'
        },
        {
          title: 'Cooltex',
          description: '',
          imageSrc: cooltex,
          hasLink: true,
          link: 'https://cooltex.homes/'
        }
      ]
    }
  }
}
</script>
<style scoped></style>
