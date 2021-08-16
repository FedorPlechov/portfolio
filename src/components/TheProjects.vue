<template>
  <section id="projects" class="my-projects" v-scrollnav data-nav="navPortfolio">
    <h1 class="title" v-scrollanimation>PROJECTS</h1>
    <div class="line" v-scrollanimation></div>
    <div class="toggles" v-scrollanimation>
      <div id="square" :style="{ width: tweenedNumber + 'px', left: tweenedLeft +'px'}" class="choose-animation"></div>
      <button :style="{color: isChoose0? 'white':'black'}" class="toggle" @click="toggleButtons1">All</button>
      <button :style="{color: isChoose1 || color.btw1? 'white':'black'}" class="toggle" @click="toggleButtons2">Study-Projects
      </button>
      <button :style="{color: isChoose2 || color.btw2? 'white':'black'}" class="toggle" @click="toggleButtons3">Layout
      </button>
      <button :style="{color: isChoose3? 'white':'black'}" class="toggle" @click="toggleButtons4">Vue JS</button>
    </div>
    <TheListOfProjects :sortData="sortData" />
  </section>
</template>

<script>
import gsap from 'gsap';
import TheListOfProjects from "./layouts/TheListOfProjects";

export default {
  name: "TheProjects",
  components: {
    TheListOfProjects
  },
  emits: ['openWindow'],
  data() {
    return {
      number: 0,
      left: 0,
      width: [],
      tweenedNumber: 0,
      tweenedLeft: 0,
      buttons: [],
      color: {btw1: false, btw2: false},
      sortData: 'all'
    }
  },
  computed: {
    isChoose0() {
      return this.width[0] === this.number;
    },
    isChoose1() {
      return this.width[1] === this.number;
    },
    isChoose2() {
      return this.width[2] === this.number;
    },
    isChoose3() {
      return this.width[3] === this.number;
    }
  },
  methods: {
    toggleButtons(event) {
      const button = event.target;
      const width = button.getBoundingClientRect().width;
      const left = button.getBoundingClientRect().left - document.querySelector(".toggle:first-of-type").getBoundingClientRect().left;
      this.number = width;
      this.left = left;
    },
    setTimOutColorBtw1(delay) {
      this.color.btw1 = true;
      setTimeout(() => {
        this.color.btw1 = false
      }, delay)
    },
    setTimOutColorBtw2(delay) {
      this.color.btw2 = true;
      setTimeout(() => {
        this.color.btw2 = false
      }, delay)
    },
    toggleButtons4(event) {
      if (this.number === this.width[0]) {
        this.setTimOutColorBtw1(100)
        this.setTimOutColorBtw2(350)
        this.toggleButtons(event)
      } else if (this.number === this.width[1]){
        this.setTimOutColorBtw2(350)
        this.toggleButtons(event)} else
      this.toggleButtons(event)
      this.sortData='vue'
    },
    toggleButtons1(event) {
      if (this.number === this.width[3]) {
        this.setTimOutColorBtw2(100)
        this.setTimOutColorBtw1(350)
        this.toggleButtons(event)
      } else if (this.number === this.width[2]){
        this.setTimOutColorBtw1(350)
        this.toggleButtons(event)} else
        this.toggleButtons(event)
     this.sortData='all'
    },
    toggleButtons2(event) {
      if (this.number === this.width[3]) {
        this.setTimOutColorBtw2(250)
        this.toggleButtons(event)
      } else this.toggleButtons(event)
      this.sortData='study'
    },
    toggleButtons3(event) {
      if (this.number === this.width[0]) {
        this.setTimOutColorBtw1(250)
        this.toggleButtons(event)
      } else this.toggleButtons(event)
      this.sortData='layout'
    }

  },
  watch: {
    number (newValue) {
      gsap.to(this.$data, {
        duration: 0.5,
        ease: 'circ.out',
        tweenedNumber: newValue
      })
    }
    ,
    left (newValue) {
      gsap.to(this.$data, {
        duration: 0.7,
        ease: 'circ.out',
        tweenedLeft: newValue
      })
    }
  },
  mounted() {
    const elements = document.querySelectorAll('.toggle')
    for (let i = 0; i < elements.length; i++) {
      this.width.push(elements[i].getBoundingClientRect().width);
      if (i === 1 || i === 2)
        this.buttons.push(elements[i].getBoundingClientRect().left - elements[0].getBoundingClientRect().left)
    }
    this.number = this.width[0];

  }
}
</script>

<style lang="scss" scoped>
$nice-color: rgb(227, 27, 109);
.my-projects {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background-color: #f5f5f5;

  .line {
    height: 3px;
    width: 4rem;
    background-color: #444649;
    margin-bottom: 75px;

    &.before-enter {
      @media(min-width: 700px) {
        opacity: 0;

      }
    }

    &.enter {
      @media(min-width: 700px) {
        animation: slide-left 800ms ease forwards;
        animation-delay: 500ms;
      }
    }

  }

  .title {
    color: #444649;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    &.before-enter {
      @media(min-width: 700px) {
        opacity: 0;

      }
    }

    &.enter {
      @media(min-width: 700px) {
        animation: slide-left 800ms ease forwards;
      }
    }
  }

}

.toggles {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  @media (min-width:700px) {
    width: 600px;
    &.before-enter {
      opacity: 0;
      transition: opacity 500ms ease;
    }
    &.enter {
      opacity: 1;
    }
  }

  .toggle {
    border: none;
    background-color: transparent;
    color: #444649;
    font-size: 1rem;
    padding: 0 0.6rem;
    &:first-of-type {
      padding-left: 1.2rem ;
      padding-right: 1.2rem;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .first {
    color: white;
  }

}

.choose-animation {
  background-color: $nice-color;
  position: absolute;
  height: 30px;
  top: -5px;
  z-index: -1;
}

@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
