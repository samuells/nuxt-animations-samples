<template>
  <div class="page-transition--biker">
    <div
      v-for="index in 5"
      :key="index"
      :class="`biker-${index}`"
      class="biker">
      <Lottie
        :options="bikerAnimation"
        class="_animation" />
    </div>
  </div>
</template>

<script>
import Lottie from "./Lottie"
import animationBiker from "@/assets/animations/biker.json"

export default {
  components: {
    Lottie
  },
  data() {
    return {
      bikerAnimation: {
        animationData: animationBiker
      }
    }
  }
}
</script>

<style lang="scss">
.page-transition--biker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translate3d(0, 0, 0);
  pointer-events: none;

  .biker {
    position: relative;
    width: 20vh;
    height: 20vh;
    transform: translate3d(120vw, 0, 0) scaleY(0);
    transition-property: transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 50%;
      display: block;
      width: 150%;
      height: 100%;
      background: linear-gradient(90deg, currentColor, $transparent 90%);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 200%;
      display: block;
      width: 120vw;
      height: 100%;
      background-color: currentColor;
    }

    svg {
      path[fill="rgb(0,173,238)"] {
        fill: currentColor;
      }
    }
  }

  .biker-1 {
    color: $blue-olympic;
  }

  .biker-2 {
    color: $yellow-olympic;
  }

  .biker-3 {
    color: $black;
  }

  .biker-4 {
    color: $green-olympic;
  }

  .biker-5 {
    color: $red-olympic;
  }

  ._animation {
    width: 100%;
    height: 100%;
  }
}
</style>
