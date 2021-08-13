<template>
  <div class="skill_box">
    <div class="name_skill">{{ skill.name }}</div>
    <div class="line_rating">
      <div :style="{ width: skill.rating + '%'}" class="rating"><div class="block" :style="{animationDelay: queue*300+ 'ms'}" v-scrollanimation></div></div>
      <div v-if="!forMobile" class="percents" :style="oneHundred">{{ skill.rating }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSkill",
  props: {
    skill: {
      type: Object,
      require: true,
      default: () => {
        return {
          name: "skill",
          rating: "100"
        }
      }
    },
    queue: {
      type: Number
    }
  },
  data() {
    return {
      forMobile: false,
      animation: false
    }
  },
  computed:{
    oneHundred(){
      if (this.skill.rating==100) {
        return {backgroundColor: '#00A1A7', color: '#FFFFFF' }
      }
      return 'none'

    }
  },
  created() {
    if (window.innerWidth < 700) {
      this.forMobile = true;
    }
  },
  // mounted() {
  //   setTimeout(()=> {
  //     this.animation = true;
  //   }, this.queue*200)
  // }
}
</script>

<style scoped lang="scss">
$my-blue: #04c2c9;
.skill_box {
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
}

.name_skill {
  flex: none;
  width: 6rem;
  text-align: center;
  color: white;
  background-color: $my-blue;
  font-size: 0.8rem;
  font-weight: bold;
  height: 1.1rem;
  padding-top: 4px ;
}

.line_rating {
  width: 100%;
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  background-color: #EEEEEE;
}

.rating {
  height: 100%;

  .block {
    background-color: #00A1A7;
    height: 100%;
    width: 0;

    &.enter {
      animation: show-skill 1.2s ease-out forwards;
    }
  }

}
.percents {
  padding:0 15px ;
  font-size: 0.8rem;
  color:#666666;
  width: 1rem;
  flex:none;
}
@keyframes show-skill {
  from {
    width: 0;
}
  to {
    width: 100%;
  }
}

</style>
