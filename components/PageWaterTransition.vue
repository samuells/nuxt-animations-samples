<template>
  <div class="page-transition--lottie">
    <Lottie
      :options="waterAnimation"
      class="_animation" />
  </div>
</template>

<script>
import Lottie from "./Lottie"
import animationWater from "@/assets/animations/water.json"

export default {
  components: {
    Lottie
  },
  data() {
    return {
      waterAnimation: {
        animationData: animationWater
      }
    }
  }
}
</script>

<style lang="scss">
.page-transition--lottie {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  transform: translate3d(0, 100vh, 0);
  transition-property: transform;
  transition-duration: 1500ms;
  transition-timing-function: ease-in-out;

  &::after {
    content: "";
    position: relative;
    display: block;
    width: 100vw;
    height: 300vh;
    margin-top: rem(-20);
    background-color: #1b6093;
  }

  ._animation {
    width: 100%;
    height: auto;
  }
}
</style>
