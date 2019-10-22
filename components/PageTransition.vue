<template>
  <div class="page-transition--default">
    <Lottie
      :options="animationOptions"
      class="_animation"
      @animCreated="animationHandler" />
  </div>
</template>

<script>
import Lottie from "./Lottie"

export default {
  components: {
    Lottie
  },
  props: {
    animData: {
      type: String,
      required: true
    },
    animSpeed: {
      type: String,
      default: "1"
    },
    animLoop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    animationOptions() {
      return {
        animationData: JSON.parse(this.animData),
        loop: this.animLoop
      }
    }
  },
  methods: {
    animationHandler: function(anim) {
      this.anim = anim
      this.anim.setSpeed(parseFloat(this.animSpeed))
    }
  }
}
</script>

<style lang="scss">
.page-transition--default {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 200ms;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  pointer-events: none;

  &::before {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: $white;
  }

  ._animation {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
