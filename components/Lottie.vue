<template>
  <div
    ref="lavContainer"
    :style="style"/>
</template>

<script>
import lottie from "lottie-web"

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: {
      type: String,
      default: "auto"
    },
    width: {
      type: String,
      default: "100%"
    }
  },

  data() {
    return {
      style: {
        overflow: "hidden",
        margin: "0 auto"
      }
    }
  },

  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData
    })
    this.$emit("animCreated", this.anim)
  }
}
</script>
