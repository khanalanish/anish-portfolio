<template>
  <div class="py-10 md:py-16 bg-background">
    <div class="o-container">
      <h2 class="mb-12 text-base md:text-lg font-semibold">CHECK OUT SOME OF MY WORKS.</h2>
      <div class="grid grid-cols-12 gap-8">
        <div v-for="work in projects" :key="work.index" class="col-span-12 md:col-span-3">
          <div class="overflow-hidden rounded-md aspect-square">
            <picture>
              <source media="(max-width:480px)" :srcset="work.imageSrc" />
              <source media="(max-width:767px)" :srcset="work.imageSrc" />
              <img
                :src="work.imageSrc"
                alt="Background image"
                class="object-cover object-center w-full h-full"
              />
            </picture>
          </div>
          <div class="text-xl font-semibold pt-4">{{ work.title }}</div>
          <div class="text-gray-600">{{ work.description }}</div>
          <a
            v-if="work.hasLink"
            :href="work.link"
            target="blank"
            class="p-5 bg-gray-700 text-white hover:text-gray-800 hover:bg-white transition ease-linear duration-300 font-semibold rounded-md inline-block mt-4"
          >
            <font-awesome-icon :icon="['fas', 'link']" />
            <span class="pl-2">View Project</span>
          </a>
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
      projects: [
        {
          title: 'Project 1',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 2',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 3',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 4',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 5',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 6',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 7',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        },
        {
          title: 'Project 8',
          description: 'This is a project description',
          imageSrc: '',
          hasLink: true,
          link: 'https://github.com'
        }
      ]
    }
  }
}
</script>
<style scoped></style>
