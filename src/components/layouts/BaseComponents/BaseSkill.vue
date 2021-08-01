<template>
  <div class="skill_box">
    <div class="name_skill">{{ skill.name }}</div>
    <div class="line_rating">
      <div :style="{ width: skill.rating + '%'}" class="rating"></div>
      <div class="percents">{{ skill.rating }}%</div>
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
    }
  }
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
  background-color: #00A1A7;
  height: 100%;
  margin-right: 15px;
}
.percents {
  padding-right: 15px ;
  font-size: 0.8rem;
  color:#666666
}

</style>
