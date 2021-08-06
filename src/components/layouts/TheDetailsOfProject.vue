<template>
  <div class="background">
    <div class="window">
      <div class="pictures"></div>
      <div class="description">
        <h1 class="title">{{ project.projectName }}</h1>
        <p class="summary">{{ project.summary.toUpperCase() }}</p>
        <p class="description_project">{{ project.description }}</p>
        <div class="container">
          <button class="view_site">VIEW SITE</button>
          <button class="view_site">GIT HUB</button>
          <span class="cross"></span>
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
  mounted() {
    this.doToggle(true)
  }
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 51px;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
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
  width: 90%;


  .pictures {
    height: 65%;
    width: 100%;
    background-color: #00A1A7;
  }

  .description {
    display: flex;
    flex-flow: column;
    padding: 2rem 1rem 1rem 1rem;
    align-items: start;


    .title {
      margin-bottom: 0;
    }

    .summary {
      margin-top: 2px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.4);
      font-size: 1rem;
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

</style>
