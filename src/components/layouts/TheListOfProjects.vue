<template>
  <div class="list_projects">
    <transition-group v-if="availableProjects.length > 0 " appear name="scale" tag="ul" class="container" v-scrollanimation>
      <li v-for="project in availableProjects" :key="project.id">
        <div id="block"
             :style="{background: 'url(' + require(`../../assets/projects/${project.fileName}`) + `) ${project.imgPosition}/cover `}"
             class="projects"
             @mouseenter="toggleWindowDetails(true, project)">

        </div>
        <transition :css="false" appear @enter="enterWindow" @leave="leaveWindow" @before-enter="beforeEnterWindow"
                    @after-leave="afterLeaveWindow">
          <div v-if="project.details" class="window_details" @mouseleave="toggleWindowDetails(false, project)">
            <h3
                class="project_title move-down">{{ project.projectName }}
              <p class="project_stack">{{ project.techStack }}</p>
            </h3>
            <button  class="project_details move-up" @click="toggleMoreDetails(project)">
              LEARN MORE
            </button>
          </div>
        </transition>
        <teleport to="body">
        <TheDetailsOfProject :project="project" v-if="project.isOpenMoreDetails" @close="project.isOpenMoreDetails=!project.isOpenMoreDetails"/>
        </teleport>
      </li>
    </transition-group>
    <TheEmptyModule v-else/>
  </div>
</template>

<script>
import projects from '../../assets/projects/projects'
import gsap from 'gsap'
import TheEmptyModule from "./TheEmptyModule";
import TheDetailsOfProject from "./TheDetailsOfProject";

export default {
  name: "TheListOfProjects",
  props: {
    sortData: {
      type: String,
      require: true
    }
  },
  emits:['close'],
  components: {
    TheEmptyModule,
    TheDetailsOfProject
  },
  data() {
    return {
      projects,

    }
  },
  computed: {
    availableProjects() {
      return this.projects.filter(el => el.sort.includes(this.sortData))
    },
  },
  methods: {
    toggleWindowDetails(payload, project ) {
      const index = this.projects.indexOf(project);
      this.projects[index].details = payload;
    },
    toggleMoreDetails(project) {
      project.isOpenMoreDetails = true;
    },
    beforeEnterWindow(el) {
      el.style.opacity = 0
    },
    enterWindow(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        onComplete: done
      })
    },
    leaveWindow(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        onComplete: done
      })
    },
    afterLeaveWindow(el) {
      el.style.transform = 'scale(1)';
    }
  },
  mounted() {
    const block = document.getElementById('block')
    block.addEventListener('touchend', () => {
      this.toggleWindowDetails(true, this.project)
    })
  }
}
</script>

<style lang="scss" scoped>
$nice-color: rgb(227, 27, 109);

* {
  font: normal 1rem 'Raleway',sans-serif;
}

li, ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 400px;

}
ul {
  margin: 0 auto;
  @media (min-width:700px) {
    &.before-enter {
      opacity: 0;
      transform: scale(0);
      transition: opacity,transform 500ms ease;
    }
    &.enter {
      opacity: 1;
      transform: scale(1);
    }
  }
}

li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}

div.list_projects {
  padding-top: 2rem;
  width: 100%;

  .container {
    display: flex;
    flex-flow: column;
    @media (min-width:700px) {
      display: flex;
      flex-flow: wrap row;
      justify-content: center;
      max-width: 600px;
    }
    @media (min-width:900px) {
      max-width: 900px;
    }
  }
}

.projects {
  width: 100%;
  height: 240px;
  max-width: 700px;
  @media (min-width:700px) {
   width: 300px;
  }
}

.window_details {
  background-color: #f5f5f5;
  display: flex;
  flex-flow: column nowrap;
  height: 240px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  .project_title {
    text-align: center;
  }

  .project_stack {
    margin: 0;
    padding-top: 2px;
    text-align: center;
    font-weight: 200;
    font-size: 0.8rem;
    color: $nice-color;
  }

  .project_details {
    background: transparent;
    font-weight: 200;
    font-size: 1rem;
    padding: 5px 2rem;
    border: 1px solid $nice-color;

    &:hover {
      background-color: $nice-color;
      color: white;
      cursor: pointer;
    }
  }
}

.move-down {
  animation: slide-down 400ms ease;
}
.move-up {
  animation: slide-up 400ms ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
}

.scale-enter-to,
.scale-leave-from {
  transform: scale(1);
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 400ms ease;
}

.scale-move {
  transition: all 0.4s ease-out;
}

@keyframes slide-down {
  from {
    transform: translateY(-60px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    transform: translateY(60px);
  }
  to {
    transform: translateY(0);
  }
}

</style>
