<template>
  <div class='menu'>
    <div class="menu__items">HOME</div>
    <div class="menu__items">ABOUT</div>
    <div class="menu__items">PORTFOLIO</div>
    <div class="menu__items">CONTACT</div>
  </div>
</template>

<script>
export default {
  name: "TheNavMenu",

}
</script>

<style scoped lang="scss">
$main-color: rgba(255, 255, 255);
$nice-color: rgb(227, 27, 109);
$my-blue: #04c2c9;

.menu {
  background-color: #333333;

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