<template>
  <section class="my-projects">
    <h1 class="title">PROJECTS</h1>
    <div class="line"></div>
    <div class="toggles">
      <div id="square" :style="{ width: tweenedNumber + 'px', left: tweenedLeft +'px'}" class="choose-animation"></div>
      <button :style="{color: isChoose0? 'white':'black'}" class="toggle" @click="toggleButtons">All</button>
      <button :style="{color: isChoose1? 'white':'black'}" class="toggle" @click="toggleButtons">My pet projects
      </button>
      <button :style="{color: isChoose2? 'white':'black'}" class="toggle" @click="toggleButtons">Layouts</button>
      <button :style="{color: isChoose3? 'white':'black'}" class="toggle" @click="toggleButtons">JavaScript</button>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
export default {
  name: "TheProjects",
  data() {
    return {
      number: 0,
      left: 0,
      width: [],
      tweenedNumber: 0,
      tweenedLeft: 0,
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
    }
  },
  watch: {
    number (newValue) {
      gsap.to(this.$data, {
        duration: 1,
        ease: 'circ.out',
        tweenedNumber: newValue
      })
    }
    ,
    left (newValue) {
      gsap.to(this.$data, {
        duration: 1,
        ease: 'circ.out',
        tweenedLeft: newValue
      })
    }
  },
  mounted() {
    const elements = document.querySelectorAll('.toggle')
    for (let i = 0; i < elements.length; i++) {
      this.width.push(elements[i].getBoundingClientRect().width)
    }
    this.number = this.width[0];
  }
}
</script>

<style lang="scss" scoped>
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
  }

  .title {
    color: #444649;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

}

.toggles {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  .toggle {
    border: none;
    background-color: transparent;
    color: #444649;
    font-size: 1rem;
    padding: 0 0.6rem;
  }

  .first {
    color: white;
  }

}

.choose-animation {
  background-color: red;
  position: absolute;
  height: 30px;
  top: -5px;
  z-index: -1;
}

</style>
