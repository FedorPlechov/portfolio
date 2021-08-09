<template>
  <TheHeader :isFixed="isFixed"/>
  <TheAbout/>
  <TheProjects/>

</template>

<script>
import TheHeader from "./components/TheHeader";
import TheAbout from './components/TheAbout';
import TheProjects from "./components/TheProjects";


export default {
  components: {
    TheHeader,
    TheAbout,
    TheProjects
  },
  data() {
    return {
      isFixed: false
    }
  },
  provide() {
    return {
      doToggle: this.toggleFixed,
      isFixed: this.isFixed
    }
  },
  methods: {
    toggleFixed(payload) {
      this.isFixed = payload
      console.log(123)
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
html {
  width: 100%;
}
body {
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
