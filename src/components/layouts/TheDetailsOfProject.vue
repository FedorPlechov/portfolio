<template>

  <div id="background" class="background" @click="toggleOpen">
    <div class="window">
      <div class="pictures">
        <div class="carousel" v-for="(slide, index) in project.slides" :key="index">
          <div class="slide" :style="{}"></div>
        </div>
        <div class="container">
        <div class="arrow "></div>
        <div class="arrow right"></div>
        </div>
      </div>
      <div class="description">
        <h1 class="title">{{ project.projectName }}</h1>
        <p class="summary">{{ project.summary.toUpperCase() }}</p>
        <p class="description_project">{{ project.description }}</p>
        <div class="container">
          <button class="view_site">VIEW SITE</button>
          <button class="view_site">GIT HUB</button>
          <span class="cross" v-if="false"></span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TheDetailsOfProject",
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      isOpen: this.project.isOpenMoreDetails
    }
  },
  inject: ['doToggle'],
  watch: {
    isOpen(newValue) {
      this.doToggle(newValue);
      console.log(12345);
    }
  },
  methods: {
    toggleOpen(event) {
      if (event.target.id === 'background') {
        this.$emit('close')
        this.isOpen = !this.isOpen
      }
    }
  },
  mounted() {
    this.doToggle(true)
  }
}
</script>

<style lang="scss" scoped>
$nice-color: rgb(227, 27, 109);
* {
  font: normal 1rem 'Raleway',sans-serif;
}
.background {
  position: fixed;
  top: 51px;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

}

.window {
  max-width: 1028px;
  background-color: white;
  display: flex;
  flex-flow: column;
  position: fixed;
  z-index: 250;
  height: 70vh;
  top:8vh;
  width: 100%;



  .pictures {
    height: 65%;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom: 3px solid black;
    position: relative;

    .carousel {
      background-color: transparent;
      width: 200%;
      height: 100%;
      display: flex;
      transform: translateX(0);
      justify-content: normal;

      .slide {
        width: 100%;
        height: 100%;
        background-color: red;
        overflow: hidden;
        position: relative;

      }

      .slide_second {
        background-color: black;


      }

    }

    .arrow {
      width: 60px;
      height: 50px;
      background: rgba(0,0,0,0.2) url('../../assets/arrow.png') no-repeat center/30%;
      display: inline-block;
      position: absolute;
      bottom:0;

    }
    .right {
      transform: rotateZ(180deg);
      right:0;
    }
  }

  .description {
    display: flex;
    flex-flow: column;
    padding: 2rem 1rem 1rem 1rem;
    align-items: start;


    .title {
      margin-bottom: 0;
      font-weight: bold;
      font-size: 1.3rem;
    }

    .summary {
      margin-top: 2px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.4);
      font-size: 0.8rem;
      width: 100%;

      &:after {
        content: '';
        display: block;
        padding-top: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        width: 100%;
      }
    }
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;

  .view_site {
    background: transparent;
    font-weight: 200;
    font-size: 1rem;
    padding: 5px 2rem;
    border: 1px solid $nice-color;
    width: 47%;


    &:hover {
      background-color: $nice-color;
      color: white;
      cursor: pointer;
    }
  }
}

</style>
