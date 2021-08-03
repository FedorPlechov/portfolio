<template>
  <TheHeader/>
  <TheAbout/>
  <TheProjects/>

</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import TheAbout from './components/layouts/TheAbout';
import TheProjects from "./components/layouts/TheProjects";


export default {
  components: {
    TheHeader,
    TheAbout,
    TheProjects
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
body {
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
