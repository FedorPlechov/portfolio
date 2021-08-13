<template>
  <section class="contact_section" id="contact" v-scrollnav data-nav="navContact">
    <div class="contact">
    <div class="triangle-down"></div>
    <h1 class="title" v-scrollanimation>CONTACT</h1>
    <div class="line" v-scrollanimation></div>
    <h5 class="question" v-scrollanimation>Have a question or want to work together?</h5>
    </div>
    <TheForm/>
  </section>
</template>

<script>
import TheForm from "./layouts/TheForm";
export default {
  name: "TheContact",
  components: {
    TheForm
  }
}
</script>

<style lang="scss" scoped>

.contact {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background-color: rgb(37, 41, 52);
  position: relative;
  margin-top: -1px;
  z-index: -1;

  .triangle-down {
    border-top: 60px solid #F5F5F5;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    width: 0;
    height: 0;
    content: "";
    display: block;
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: auto;
    top:0;
  }

  .line {
    height: 3px;
    width: 4rem;
    background-color: #FFFFFF;
    margin-bottom: 75px;

    &.before-enter {
      @media(min-width: 700px) {
        opacity: 0;

      }
    }

    &.enter {
      @media(min-width: 700px) {
        animation: slide-left 800ms ease forwards;
        animation-delay: 500ms;
      }
    }
  }

  .title {
    color: #FFFFFF;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    &.before-enter {
      @media(min-width: 700px) {
        opacity: 0;

      }
    }

    &.enter {
      @media(min-width: 700px) {
        animation: slide-right 800ms ease forwards;
      }
    }

  }
  .question {
    text-align: center;
    color: rgb(4, 194, 201);

    &.before-enter {
      @media(min-width: 700px) {
        opacity: 0;
      }
    }

    &.enter {
      @media(min-width: 700px) {
        animation: slide-left 800ms ease forwards;
        animation-delay: 1s;
      }
    }
  }
}
@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-right {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
