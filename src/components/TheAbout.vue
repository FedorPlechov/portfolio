<template>
  <section class="about" id="about" v-scrollnav data-nav="navAbout">
    <h1 v-scrollanimation class="title">ABOUT</h1>
    <div v-scrollanimation class="line"></div>
    <div class="icons_skills">
      <base-icons v-scrollanimation class="icon_animation"
                  description="Fast load times and lag free interaction, my highest priority." title="Fast">
        <div class="icon speed"></div>
      </base-icons>
      <base-icons v-scrollanimation class="icon_animation"
                  description="Strong preference for easy to use, intuitive UX/UI." title="Intuitive">
        <div class="icon intuitive"></div>
      </base-icons>
      <base-icons v-scrollanimation class="icon_animation"
                  description="My layouts will work on any device, big or small." title="Responsive">
        <div class="icon responsive "></div>
      </base-icons>
      <base-icons v-scrollanimation class="icon_animation"
                  description="Websites don't have to be static, I love making pages come to life." title="Dynamic">
        <div class="icon dynamic "></div>
      </base-icons>
    </div>
    <div class="info">
      <div v-scrollanimation class="avatar">
        <div class="picture"></div>
        <h3>Who's this guy?</h3>
        <p class="answer">I'm a Front-End Developer. I have serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences.
          Let's make something special.</p>
      </div>
      <div v-scrollanimation class="skills_rating">
        <div>
          <base-skill :queue=1 :skill="{name:'CSS', rating:'90'}"></base-skill>
          <base-skill :queue=2 :skill="{name:'HTML', rating:'90'}"></base-skill>
          <base-skill :queue=3 :skill="{name:'JavaScript', rating:'70'}"></base-skill>
          <base-skill :queue=4 :skill="{name:'Vue', rating:'70'}"></base-skill>
          <base-skill :queue=5 :skill="{name:'UI', rating:'60'}"></base-skill>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcons from "./layouts/BaseComponents/BaseIcons";
import BaseSkill from "./layouts/BaseComponents/BaseSkill";

export default {
  name: "TheAbout",
  components: {
    BaseIcons,
    BaseSkill
  },
}

</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  max-width: 1200px;
  @media (min-width: 700px) {
    margin: auto auto;
  }

  .line {
    height: 3px;
    width: 4rem;
    background-color: #444649;


    &.before-enter {
      @media(min-width: 700px) {
        opacity: 0;
        transform: translateX(-100px);
      }
    }

    &.enter {
      @media(min-width: 700px) {
        animation: slide-right 800ms ease forwards;
        animation-delay: 500ms;
      }
    }
  }

    .title {
      color: #444649;
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


.icons_skills {
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 0.7rem;
  @media (min-width: 700px) {
    grid-template-columns: 25% 25% 25% 25%;

    .icon_animation {

      &.before-enter {
        opacity: 0;
      }

      &.enter {
        animation: turn-around 1s ease forwards;
      }
    }
  }
}

.icon {
  margin: auto auto;
  position: relative;
  z-index: 10;
  height: 80%;
  width: 70%;

  &.speed {
    margin: 0 auto;
    height: 120%;
    background: url("../assets/icons/speed-128.png") no-repeat center/cover;
    position: relative;
    top: -5px;
  }

  &.intuitive {
    margin: 0 auto;
    height: 120%;
    background: url("../assets/icons/light-bulb-5-128.png") no-repeat center/cover;
  }

  &.responsive {
    margin: 0 auto;
    height: 120%;
    position: relative;
    top: -5px;
    background: url("../assets/icons/tablet-2-128.png") no-repeat center/cover;
  }

  &.dynamic {
    margin: 0 auto;
    height: 120%;
    background: url("../assets/icons/rocket-128.png") no-repeat center/cover;
    transform: rotateZ(-45deg);
  }

}

  .avatar {
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    @media (min-width: 700px) {
      width: 70%;
      padding-left: 1rem;
    }

    &.before-enter {
      opacity: 0;
      transform: translateX(-100px);
      @media (max-width: 700px) {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &.enter {
      animation: slide-right 800ms ease forwards;
      @media (max-width: 700px) {
        animation: none;
      }

    }

    .picture {
      background: url(../assets/Hzhe9SZd0zc.jpg) no-repeat 50% 40%/cover;
      width: 100%;
      height: 540px;
      @media (min-width: 700px) {
        width: 100%;
        height: 300px;
        background-position: 42% 25%;
        background-size: auto;
      }
    }

    .answer {
      text-align: center;

    }

  }

  .skills_rating {
    padding: 3rem 1rem 0;
    @media (min-width: 700px) {
      width: 90%;
      padding-top: 0;
    }

    &.before-enter {
      opacity: 0;

      @media (max-width: 700px) {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &.enter {
      animation: slide-left 800ms ease forwards;
      @media (max-width: 700px) {
        animation: none;
      }
    }
  }

  .info {
    @media (min-width: 700px) {
      display: flex;
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

  @keyframes turn-around {
    0% {
      opacity: 0;

    }
    100% {
      transform: rotateY(360deg);
      opacity: 1;
    }
  }
}

</style>
