<template>

  <div id="background" class="background" @click="toggleOpen">
    <div class="window">
      <div class="pictures">
        <div :style="{transform: `translateX(-${currentSlideIndex*100}%)`}" class="carousel">
          <div v-for="(slide, index) in slides" :key="index"
               :style="{background: 'url('+require(`../../assets/projects/${slide}`) +') top/cover'}"
               class="slide">
          </div>
        </div>
        <div class="container">
          <div class="arrow" @click="prevSlide"></div>
          <div class="arrow right" @click="nextSlide"></div>
        </div>
      </div>
      <div class="description">
        <h1 class="title">{{ project.projectName }}</h1>
        <p class="summary">{{ project.summary.toUpperCase() }}</p>
        <p class="description_project">{{ project.description }}</p>
        <div class="container">
          <a class="view_site" target="_blank" :href="project.linkToTheWebsite">VIEW SITE</a>
          <a class="view_site" target="_blank" :href="project.linkToTheGitHub">GIT HUB</a>
        </div>
      </div>
      <div class="wrapper" @click="close">
      <div class="cross"></div>
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
      isOpen: this.project.isOpenMoreDetails,
      currentSlideIndex: 1,
      slides: this.project.slides,
      touch: {
        startX: 0,
        endX: 0
      }
    }
  },
  inject: ['doToggle'],
  watch: {
    isOpen(newValue) {
      this.doToggle(newValue);
    }
  },
  methods: {
    toggleOpen(event) {
      if (event.target.id === 'background') {
        this.close()
      }
    },
    close() {
      this.$emit('close')
      this.isOpen = !this.isOpen
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) this.currentSlideIndex--
      else this.currentSlideIndex = this.slides.length-1
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.slides.length-1) this.currentSlideIndex = 0
      else this.currentSlideIndex++
    },
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
      this.touch.endtX = 0
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
    },
    touchend() {
      if (!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20) return
      if (this.touch.endX < this.touch.startX)
        this.prevSlide()
      if (this.touch.endX > this.touch.startX)
        this.nextSlide()
    }
  },
  mounted() {
    this.doToggle(true)

    const el = document.querySelector(".carousel");
    el.addEventListener('touchstart', event => this.touchstart(event));
    el.addEventListener('touchmove', event => this.touchmove(event));
    el.addEventListener('touchend', () => this.touchend());
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
  left: 0;

}

.window {
  max-width: 1028px;
  background-color: white;
  display: flex;
  flex-flow: column;
  position: fixed;
  z-index: 250;
  height: 80vh;
  top: 8vh;
  width: 90%;


  .pictures {
    height: 65%;
    border-bottom: 3px solid black;
    width: 100%;
    overflow: hidden;

    .carousel {
      display: flex;
      height: 100%;
      transition: transform 0.5s ease;

      .slide {
        flex: none;
        width: 100%;
        height: 100%;
      }

      .slide:last-of-type {


      }

    }
    .arrow {
      width: 60px;
      height: 50px;
      background: rgba(0, 0, 0, 0.2) url('../../assets/arrow.png') no-repeat center/30%;
      display: inline-block;
      position: absolute;
      bottom: 35%;
      cursor: pointer;

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
  position: relative;

  .view_site {
    background: transparent;
    font-weight: 200;
    font-size: 1rem;
    padding: 5px 2rem;
    border: 1px solid $nice-color;
    text-decoration: none;
    color: inherit;



    &:hover {
      background-color: $nice-color;
      color: white;
      cursor: pointer;
    }
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: -6rem;
}
.cross {
  height: 5rem;
  width: 5rem;
  background:  url(../../assets/icons/close-icon-13612.png) center/cover;
  cursor: pointer;
}
</style>
