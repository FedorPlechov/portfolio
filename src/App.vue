<template>
  <TheHeader :isFixed="isFixed"/>
  <TheAbout/>
  <TheProjects/>
  <TheContact/>
  <TheFooter/>

</template>

<script>
import TheHeader from "./components/TheHeader";
import TheAbout from './components/TheAbout';
import TheProjects from "./components/TheProjects";
import TheContact from "./components/TheContact";
import TheFooter from "./components/TheFooter";


export default {
  components: {
    TheHeader,
    TheAbout,
    TheProjects,
    TheContact,
    TheFooter
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
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
html {
  width: 100%;
  scroll-behavior: smooth;
  overflow-x:hidden;
}
body {
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x:hidden;
}
</style>
