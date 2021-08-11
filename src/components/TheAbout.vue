<template>
  <section class="about" id="about">
    <h1 class="title">ABOUT</h1>
    <div class="line"></div>
    <div class="icons_skills">
      <base-icons description="Fast load times and lag free interaction, my highest priority." title="Fast">
        <div class="icon speed"></div>
      </base-icons>
      <base-icons description="Strong preference for easy to use, intuitive UX/UI." title="Intuitive">
        <div class="icon intuitive"></div>
      </base-icons>
      <base-icons description="My layouts will work on any device, big or small." title="Responsive">
        <div class="icon responsive "></div>
      </base-icons>
      <base-icons description="Websites don't have to be static, I love making pages come to life." title="Dynamic">
        <div class="icon dynamic "></div>
      </base-icons>
    </div>
    <div class="info">
      <div class="avatar">
        <div class="picture"></div>
          <h3>Who's this guy?</h3>
          <p class="answer">I'm a Front-End Developer. I have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
            Let's make something special.</p>
        </div>
        <div class="skills_rating">
          <div>
            <base-skill :skill="{name:'CSS', rating:'90'}" :queue=1></base-skill>
            <base-skill :skill="{name:'HTML', rating:'90'}" :queue=2></base-skill>
            <base-skill :skill="{name:'JavaScript', rating:'70'}" :queue=3></base-skill>
            <base-skill :skill="{name:'Vue', rating:'70'}" :queue=4></base-skill>
            <base-skill :skill="{name:'UI', rating:'60'}" :queue=5></base-skill>
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
  }
}

</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 70px 0;

  .line {
    height: 3px;
    width: 4rem;
    background-color: #444649;
  }
  .title {
    color: #444649;
    font-size: 1.8rem;
    margin-bottom: 1rem ;
  }
}

.icons_skills {
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 0.7rem;
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
    transform:  rotateZ(-45deg);
  }

}
.avatar{
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  .picture {
    background: url(../assets/Hzhe9SZd0zc.jpg) no-repeat center/cover;
    width: 100%;
    height: 540px;
  }
  .answer {
    text-align: center;

  }

}
.skills_rating {
  padding: 3rem 1rem 0;
}


</style>
