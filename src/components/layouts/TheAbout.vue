<template>
  <section class="about">
    <h1 class="title">ABOUT</h1>
    <div class="line"></div>
    <div class="icons_skills">
      <div class="icon">
        <div class="icon_skill"></div>
        <h3>Skill</h3>
        <p>direction</p></div>
      <div class="icon">
        <div class="icon_skill"></div>
        <h3>Skill</h3>
        <p>direction</p></div>
      <div class="icon">
        <div class="icon_icon_skill"></div>
        <h3>Skill</h3>
        <p>direction</p></div>
      <div class="icon">
        <div class="icon_icon_skill"></div>
        <h3>Skill</h3>
        <p>direction</p></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheAbout"
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .line {
    height: 3px;
    width: 2rem;
    background-color: black;
  }
}

.icons_skills {

}
</style>