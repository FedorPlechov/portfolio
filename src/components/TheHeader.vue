<template>
  <header id="home" v-scrollnav data-nav="navHome">
    <div class="header thunder container">
      <canvas id="canvas1"></canvas>
      <canvas id="canvas2"></canvas>
      <canvas id="canvas3"></canvas>
      <div class="title">
        <p> Hello, I'm <span class="name">Fedor Plechov</span>.</p>
        <p>I'm a frontend web developer.</p>
        <a href="#projects" class="linkToProject">View my work
          <div class="arrow-icon"></div>
        </a>
      </div>
    </div>
  </header>
  <section class="navigation" :style="fixed">
    <div class="nav">
      <nav class="nav__items">
        <div @click="toggleMenu" class="burger"></div>
      </nav>
    </div>
      <TheNavMenu :isShowMenu="isShowMenu" @close="toggleMenu"/>
  </section>


</template>

<script>
import TheNavMenu from "./TheNavMenu";

export default {
  name: "TheHeader",
  components: {
    TheNavMenu
  },
  props:['isFixed'],
  data() {
    return {
      isShowMenu: false,
    }
  },
  computed: {
    fixed() {
      if (this.isFixed) return {
        position: 'fixed',
        width: "100%",
        top: "0"
      }
      return null
    }
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
  mounted() {
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var canvas3 = document.getElementById('canvas3');
    var ctx1 = canvas1.getContext('2d');
    var ctx2 = canvas2.getContext('2d');
    var ctx3 = canvas3.getContext('2d');

    var rainthroughnum = 500;
    var speedRainTrough = 25;
    var RainTrough = [];

    var rainnum = 500;
    var rain = [];

    var lightning = [];
    var lightTimeCurrent = 0;
    var lightTimeTotal = 0;

    var w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
    var h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
    window.addEventListener('resize', function () {
      w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
      h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
    });

    function random(min, max) {
      return Math.random() * (max - min + 1) + min;
    }

    function clearcanvas1() {
      ctx1.clearRect(0, 0, w, h);
    }

    function clearcanvas2() {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    }

    function clearCanvas3() {
      ctx3.globalCompositeOperation = 'destination-out';
      ctx3.fillStyle = 'rgba(0,0,0,' + random(1, 30) / 100 + ')';
      ctx3.fillRect(0, 0, w, h);
      ctx3.globalCompositeOperation = 'source-over';
    }

    function createRainTrough() {
      for (var i = 0; i < rainthroughnum; i++) {
        RainTrough[i] = {
          x: random(0, w),
          y: random(0, h),
          length: Math.floor(random(1, 830)),
          opacity: Math.random() * 0.2,
          xs: random(-2, 2),
          ys: random(10, 20)
        };
      }
    }

    function createRain() {
      for (var i = 0; i < rainnum; i++) {
        rain[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random(),
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10
        };
      }
    }

    function createLightning() {
      var x = random(100, w - 100);
      var y = random(0, h / 4);

      var createCount = random(1, 3);
      for (var i = 0; i < createCount; i++) {
        let single = {
          x: x,
          y: y,
          xRange: random(5, 30),
          yRange: random(10, 25),
          path: [{
            x: x,
            y: y
          }],
          pathLimit: random(40, 55)
        };
        lightning.push(single);
      }
    }

    function drawRainTrough(i) {
      ctx1.beginPath();
      var grd = ctx1.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length);
      grd.addColorStop(0, "rgba(255,255,255,0)");
      grd.addColorStop(1, "rgba(255,255,255," + RainTrough[i].opacity + ")");

      ctx1.fillStyle = grd;
      ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
      ctx1.fill();
    }

    function drawRain(i) {
      ctx2.beginPath();
      ctx2.moveTo(rain[i].x, rain[i].y);
      ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
      ctx2.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx2.lineWidth = 1;
      ctx2.lineCap = 'round';
      ctx2.stroke();
    }

    function drawLightning() {
      for (var i = 0; i < lightning.length; i++) {
        var light = lightning[i];

        light.path.push({
          x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
          y: light.path[light.path.length - 1].y + (random(0, light.yRange))
        });

        if (light.path.length > light.pathLimit) {
          lightning.splice(i, 1);
        }

        ctx3.strokeStyle = 'rgba(255, 255, 255, .1)';
        ctx3.lineWidth = 3;
        if (random(0, 15) === 0) {
          ctx3.lineWidth = 6;
        }
        if (random(0, 30) === 0) {
          ctx3.lineWidth = 8;
        }

        ctx3.beginPath();
        ctx3.moveTo(light.x, light.y);
        for (var pc = 0; pc < light.path.length; pc++) {
          ctx3.lineTo(light.path[pc].x, light.path[pc].y);
        }
        if (Math.floor(random(0, 30)) === 1) { //to fos apo piso
          ctx3.fillStyle = 'rgba(255, 255, 255, ' + random(1, 3) / 100 + ')';
          ctx3.fillRect(0, 0, w, h);
        }
        ctx3.lineJoin = 'miter';
        ctx3.stroke();
      }
    }

    function animateRainTrough() {
      clearcanvas1();
      for (var i = 0; i < rainthroughnum; i++) {
        if (RainTrough[i].y >= h) {
          RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5;
        } else {
          RainTrough[i].y += speedRainTrough;
        }
        drawRainTrough(i);
      }
    }

    function animateRain() {
      clearcanvas2();
      for (var i = 0; i < rainnum; i++) {
        rain[i].x += rain[i].xs;
        rain[i].y += rain[i].ys;
        if (rain[i].x > w || rain[i].y > h) {
          rain[i].x = Math.random() * w;
          rain[i].y = -20;
        }
        drawRain(i);
      }
    }

    function animateLightning() {
      clearCanvas3();
      lightTimeCurrent++;
      if (lightTimeCurrent >= lightTimeTotal) {
        createLightning();
        lightTimeCurrent = 0;
        lightTimeTotal = 200;  //rand(100, 200)
      }
      drawLightning();
    }

    function init() {
      createRainTrough();
      createRain();
      window.addEventListener('resize', createRainTrough);
    }

    init();

    function animloop() {
      animateRainTrough();
      animateRain();
      animateLightning();
      requestAnimationFrame(animloop);
    }

    animloop();
  }
}

</script>

<style scoped lang="scss">
$main-color: rgba(255, 255, 255);
$nice-color: rgb(227, 27, 109);
$my-blue: #04c2c9;
@mixin size($size) {
  width: $size;
  height: $size;
}

@mixin abs-pos {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}


header,
canvas {
  @include size(100%);
  font-family: 'Raleway', sans-serif;
}

header {
  height: 100vh;
  background-color: #222;
  background-image: url('https://drive.google.com/uc?export=view&id=0BzFF7FmbJUo5X0NEUXFVd0NBcWc');
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;

  &:after {
    content: '';
    @include size(100%);
    @include abs-pos;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
    animation: thunder-bg 6s infinite;
  }
}

canvas {
  @include abs-pos;
}

#canvas3 {
  z-index: 5;
}

#canvas2 {
  z-index: 10;
}

#canvas1 {
  z-index: 100;
}

$color1: rgba(34,
    34,
    34,
    .9);
$color2: rgba(59,
    59,
    59,
    .3);
.thunder {
  @at-root {
    @-webkit-keyframes thunder-bg {
      0% {
        background-color: $color1;
      }
      9% {
        background-color: $color1;
      }
      10% {
        background-color: $color2;
      }
      10.5% {
        background-color: $color1;
      }
      80% {
        background-color: $color1;
      }
      82% {
        background-color: $color2;
      }
      83% {
        background-color: $color1;
      }
      83.5% {
        background-color: $color2;
      }
      100% {
        background-color: $color1;
      }
    }
  }
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.title {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  position: absolute;
  font-size: 1.5rem;
  color: rgba(255, 255, 255);
  max-width: 1500px;
  top: 40vh;
  z-index: 110;
  margin: 0 auto;


  p {
    justify-self: center;
    align-self: center;

    .name {
      color: $nice-color;
    }
  }

  a {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    margin-top: 1rem;
    width: 12rem;
    height: 2rem;
    align-self: center;
    background: none;
    border: 1px solid rgba(255, 255, 255);;
    color: rgba(255, 255, 255);
    padding: 1.2rem 0 0.5rem 1.2rem;
    transition: all 1000ms ease;
    text-decoration: none;
  }

  a:hover,:active {
    background: $my-blue;
    border: $my-blue;
    cursor: pointer;
    border:1px solid $my-blue;

    .arrow-icon {
      transform: rotateZ(90deg);
    }
  }
}

.arrow-icon {
  transition: all 1000ms ease;
  margin-left: 1rem;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("../assets/arrow-19-16.png");
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

.nav {
  width: 100%;
  height: 3rem;
  background-color: #1b242f;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 3px solid $my-blue;
}

.burger {
  margin-right: 1rem;
  width: 30px;
  height: 15px;
  border: 4px solid $main-color;
  border-left: none;
  border-right: none;
  @media (min-width:700px) {
    display: none;
  }

  &:before {
    content: '';
    display: block;
    height: 4px;
    width: 100%;
    background-color: $main-color;
    position: relative;
    top: 36%;
  }
}

.navigation {
  position: fixed;
  top: 0;
  z-index: 150;
  width: 100%;
}

</style>
