<template>
  <transition appear name="empty">
    <div >
      <div :style="{background: 'url('+require(`../../assets/projects/${inform.fileName}`) +') top/cover'}"
           class="empty_project">
      </div>
      <div>
        <h3>{{ inform.title }}</h3>
        <p>{{ inform.suggest }} <a :href="inform.linkToTheGitHub">GitHub</a></p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheEmptyModule",
  data() {
    return {
      inform: {
        title: 'Oops!This module is empty yet.',
        suggest: 'May be you could find something interesting on my ',
        linkToTheGitHub: 'https://github.com/FedorPlechov/',
        fileName: 'emptymodule.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$nice-color: rgb(227, 27, 109);
.empty_project {
  height: 240px;
  width: 100%;
}

h3 {
  text-align: center;
}

p {
  padding: 0 1rem;
  text-align: center;
}

a {
  color: $nice-color;
}

.empty-enter-from,
.empty-leave-to {
  transform: scale(0);

}

.empty-enter-to,
.empty-leave-from {
  transform: scale(1);

}

.empty-enter-active,
.empty-leave-active {
  transition: all 500ms ease;
}
</style>
