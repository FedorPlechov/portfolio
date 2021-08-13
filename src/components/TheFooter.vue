<template>
  <div class="footer">
    <div class="social-icons">
      <a href="https://vk.com/bleed151" target="_blank">
        <div class="icon">
          <div class="vk_icon i_icon"></div>
        </div>
      </a>
      <a href="https://t.me/elusiveer" target="_blank">
        <div class="icon">
          <div class="telegram_icon i_icon"></div>
        </div>
      </a>
      <a href="https://github.com/FedorPlechov" target="_blank">
        <div class="icon">
          <div class=" git_hub_icon vk_icon i_icon"></div>
        </div>
      </a>
    </div>
    <h6>PLECHOV FEDOR <span>©2021</span></h6>
    <div class="wrapper">
      <a href="#home">
        <div class="arrow_to_up"></div>
      </a>
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
  height: 48px;
  width: 48px;
  overflow: hidden;
  border-radius: 10px;


  .i_icon {

    height: 200%;
    width: 48px;
    background: url('../assets/icons/vk-48.png') 50% 0;
    position: relative;
    top: -100%;
    transition: all 400ms ease;

    &.telegram_icon {
      background: url('../assets/icons/telegram.png') 50% 0;
    }
    &.git_hub_icon {
      background: url('../assets/icons/github-8-48.png') 50% 0;

    }
    &:hover,:active {
      transform: translateY(48px);
    }
  }
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
</style>
