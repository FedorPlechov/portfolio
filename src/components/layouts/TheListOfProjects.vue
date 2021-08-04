<template>
  <div class="list_projects">
    <ul>
      <li v-for="project in availableProjects" :key="project.projectName">
        <div :style="{background: 'url('+require(`../../assets/projects/${project.fileName}`) +') top/cover'}"
             class="projects"
             @mouseenter="toggleWindowDetails(true)" >
        </div>
        <div class="window_details"  v-show="isShowDetails" @mouseleave="toggleWindowDetails(false)">
          <h3
              class="project_title">{{ project.projectName }}
            <p class="project_stack">{{ project.techStack }}</p>
          </h3>
          <button class="project_details">LEARN MORE</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import projects from '../../assets/projects/projects'

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
      isShowDetails: false
    }
  },
  computed: {
    availableProjects() {
      return this.projects.filter(el => el.sort.includes(this.sortData))
    }
  },
  methods: {
    toggleWindowDetails(payload) {
      this.isShowDetails = payload;
    }
  }
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
    transition: all 500ms ease;

    &:hover {
      background-color: $nice-color;
      color: white;
      cursor: pointer;
    }
  }
}

</style>
