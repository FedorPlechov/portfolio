<template>
  <div v-if="isShowMenu" id="menu" :style="{height: tweenedHeight+ 'px'}" class='menu'>
    <div class="menu__items">HOME</div>
    <div class="menu__items">ABOUT</div>
    <div class="menu__items">PORTFOLIO</div>
    <div class="menu__items">CONTACT</div>
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
        this.number = 155
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

  .menu__items {
    color: $main-color;
    padding-left: 1rem;
    padding-bottom: 1rem;

    &:first-of-type {
      padding-top: 1rem;
    }

    &:hover {
      color: $nice-color;
      cursor: pointer;
    }
  }
}
</style>
