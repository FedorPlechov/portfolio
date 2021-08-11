<template>
  <div class="footer">
    <div class="social-icons">
      <a href="#">
        <div class="icon vk_icon"></div>
      </a>
      <a href="#">
        <div class="icon git_hub_icon"></div>
      </a>
      <a href="#">
        <div class="icon telegram_icon"></div>
      </a>
    </div>
    <h6>PLECHOV FEDOR <span>©2021</span></h6>
    <div class="wrapper">
      <a href="#home"><div class="arrow_to_up" v-scrollanimation></div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 70px 0 50px 0;
  background: #1b242f;
  position: relative;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.icon {
  height: 55px;
  width: 55px;
  background: rgb(38, 47, 56)
}

a {
  padding: 0 1.2rem;
}

h6 {
  color: rgba(143, 154, 167, 0.5);
  text-align: center;
  margin-top: 3rem;
}

span {
  color: rgba(227, 27, 109, 0.5);
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -1.5rem;
  cursor: pointer;

  .arrow_to_up {
    height: 3.2rem;
    width: 2.5rem;
    background: rgb(227, 27, 109);

    &:after {
      content: '';
      width: 100%;
      height: 80%;
      display: block;
      background: url("../assets/white-arrow-png-41954.png") no-repeat center/cover;
      transform: rotateZ(-90deg) translateX(-3px) translateY(1px);
    }
  }
}
.before-enter {
  @media(min-width: 700px) {
  transform: translateY(50px);
  opacity: 0;
  transition: all 2s ease;
  }
}
.enter {@media(min-width: 700px) {
  opacity: 1;
  transform: translateY(0);
}
}
</style>
