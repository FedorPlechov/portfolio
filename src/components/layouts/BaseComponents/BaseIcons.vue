<template>
  <div class="card">
    <div id="hexagon">
      <slot></slot>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseIcons",
  props: {
    description: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true
    },
    path: {
      type: String
    }
  },
};
</script>
<style lang="scss" scoped>
$my-blue: #04c2c9;
.card {
  padding: 3rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    height: 5rem;
  }
  h3 {
    margin-top: 2rem;
  }
}

#hexagon {
  width: 100px;
  height: 57.735px;
  background: $my-blue;
  position: relative;
}
#hexagon::before {
  content: "";
  position: absolute;
  top: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 28.8675px solid $my-blue;
}
#hexagon::after {
  content: "";
  position: absolute;
  bottom: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 28.8675px solid $my-blue;
}
</style>
