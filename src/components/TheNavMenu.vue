<template>
  <div v-if="isShowMenu" id="menu" :style="{height: tweenedHeight+ 'px'}" class='menu' @click="$emit('close')">
    <a href="#home" class="menu__items" >HOME</a>
    <a href="#about" class="menu__items">ABOUT</a>
    <a href="#projects" class="menu__items">PORTFOLIO</a>
    <a href="#contact" class="menu__items">CONTACT</a>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: "TheNavMenu",
  props: {
    isShowMenu: {
      type: Boolean,
    }
  },
  data() {
    return {
      number: 0,
      tweenedHeight: null,
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, {
        duration: 0.5,
        tweenedHeight: newValue
      })
    },
    isShowMenu: function (newVal) {
      if (newVal) {
        this.number = 170
        return
      }
      this.number = 0
    }
  },
}
</script>

<style scoped lang="scss">
$main-color: rgba(255, 255, 255);
$nice-color: rgb(227, 27, 109);
$my-blue: #04c2c9;

.menu {
  background-color: #333333;
  position: absolute;
  width: 100%;
  height: 100%;

  .menu__items {
    color: $main-color;
    padding-left: 1rem;
    padding-bottom: 1rem;
    display: block;
    font-size: 1.2rem;

    &:first-of-type {
      padding-top: 1rem;
    }

    &:hover {
      color: $nice-color;
      cursor: pointer;
    }
  }
}
a {
  text-decoration: none;
}
</style>
