<template>
  <div class="list_projects">
    <transition-group appear name="scale" tag="ul">
      <li v-for="project in availableProjects" :key="project.id">
        <div :style="{background: 'url('+require(`../../assets/projects/${project.fileName}`) +') top/cover'}"
             class="projects"
             @mouseenter="toggleWindowDetails(true, project)">
        </div>
        <transition :css="false" appear @enter="enterWindow" @leave="leaveWindow" @before-enter="beforeEnterWindow" @after-leave="afterLeaveWindow">
          <div v-if="project.details" class="window_details" @mouseleave="toggleWindowDetails(false, project)">
            <h3
                 class="project_title move-down">{{ project.projectName }}
              <p class="project_stack">{{ project.techStack }}</p>
            </h3>
            <button  class="project_details move-up">
              LEARN MORE
            </button>
          </div>
        </transition>
      </li>
    </transition-group>
  </div>
</template>

<script>
import projects from '../../assets/projects/projects'
import gsap from 'gsap'

export default {
  name: "TheListOfProjects",
  props: {
    sortData: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      projects,
      isShowDetails: false,
    }
  },
  computed: {
    availableProjects() {
      return this.projects.filter(el => el.sort.includes(this.sortData))
    }
  },
  methods: {
    toggleWindowDetails(payload, project ) {
      const index = this.projects.indexOf(project);
      this.projects[index].details = payload;
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

}
</script>

<style lang="scss" scoped>
$nice-color: rgb(227, 27, 109);

li, ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  position: relative;
}

div.list_projects {
  padding-top: 2rem;
  width: 100%;
}

.projects {
  width: 100%;
  height: 240px;
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

.scale-enter-from {
  transform: scale(0);
}

.scale-enter-to {
  transform: scale(1);
}

.scale-enter-active {
  transition: all 400ms ease;
}

.scale-move {
  transition: transform 0.4s ease-out;
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
