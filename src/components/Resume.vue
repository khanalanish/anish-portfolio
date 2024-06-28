<template>
  <div id="resume" class="py-10 md:py-16">
    <div class="o-container">
      <div
        class="w-full md:flex justify-between border-b last:border-none border-gray-300 first:pt-0 pt-6"
        v-for="history in items"
        :key="history.index"
      >
        <div class="md:w-3/12">
          <div class="relative">
            <h3
              class="text-xl uppercase font-semibold pb-4 md:pb-0 c-title-underline"
              v-html="history.title"
            ></h3>
          </div>
        </div>
        <ul class="md:w-8/12">
          <li class="pb-4 last:pb-8" v-for="list in history.items" :key="list.index">
            <h2 class="font-semibold text-xl md:text-3xl pb-2" v-html="list.subtitle"></h2>
            <div class="flex flex-wrap items-center text-sm">
              <p v-html="list.title"></p>
              <p v-if="list.date" class="w-1 h-1 bg-gray-800 mx-2"></p>
              <p v-html="list.date"></p>
            </div>
            <div class="c-list" v-if="list.description" v-html="list.description"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Education',
          items: [
            {
              title: 'BSC.Computer Science and Information Technology',
              subtitle: 'Himalaya College of Engineering',
              date: '2015 - 2019'
            },
            {
              title: 'Higher Secondary Education',
              subtitle: 'DAV College',
              date: '2013 - 2015'
            },
            {
              title: 'School Level',
              subtitle: 'Lumbini Higher Secondary School',
              date: ''
            }
          ]
        },
        {
          title: 'Work',
          items: [
            {
              title: 'Mid-Front End Developer',
              subtitle: 'Omnicom Media Group Nepal',
              date: '09/2022 - Present',
              description:
                '<ul class="list-disc ml-4"><li>Gained practical experience in developing front-end features using React and Node.js</li><li>Assisted in the implementation of responsive web design principles</li><li>Collaborated with team members to debug and troubleshoot issues</li><li>Learned about version control using Git and GitHub</li><li>Contributed to the development of user interfaces based on design mockups</li></ul>'
            },
            {
              title: 'Associate Software Engineer',
              subtitle: 'Amnil Technologie',
              date: '11/2021 - 09/2022',
              description:
                '<ul class="list-disc ml-4"><li>Gained practical experience in developing front-end features using React and Node.js</li><li>Assisted in the implementation of responsive web design principles</li><li>Collaborated with team members to debug and troubleshoot issues</li><li>Learned about version control using Git and GitHub</li><li>Contributed to the development of user interfaces based on design mockups</li></ul>'
            },
            {
              title: 'Front End Developer Intern',
              subtitle: 'Amnil Technologie',
              date: '08/2021 - 11/2021',
              description:
                '<ul class="list-disc ml-4"><li>Gained practical experience in developing front-end features using React and Node.js</li><li>Assisted in the implementation of responsive web design principles</li><li>Collaborated with team members to debug and troubleshoot issues</li><li>Learned about version control using Git and GitHub</li><li>Contributed to the development of user interfaces based on design mockups</li></ul>'
            }
          ]
        },
        {
          title: 'Skills',
          items: [
            {
              subtitle: 'HTML, CSS, JavaScript',
              description: ''
            },
            {
              subtitle: 'ReactJS, VueJS, Alpine Js',
              description: ''
            },
            {
              subtitle: 'Tailwind CSS',
              description: ''
            },
            {
              subtitle: 'Communication Skills',
              description: ''
            },
            {
              subtitle: 'Agile Development Methodologies',
              description: ''
            },
            {
              subtitle: 'GIT',
              description: ''
            },
            {
              subtitle: 'UI/UX Design Principles',
              description: ''
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.c-title-underline {
  display: inline-block;
  position: relative;
}
@media screen and (max-width: 768px) {
  .c-title-underline::before {
    content: '';
    position: absolute;
    bottom: 14px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #dc370f;
  }
}
@media screen and (min-width: 768px) {
  .c-title-underline::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #dc370f;
  }
}
</style>
