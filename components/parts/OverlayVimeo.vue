<template>
  <div class="overlay-vimeo" >
    <div
      class="_bgc"
      @click.stop="$emit('close-overlay')"/>
    <div class="_video-wrapper">
      <SvgFrameVideo class="_overlay-frame"/>
      <no-ssr>
        <vimeo-player
          ref="player"
          :video-id="id"
          :autoplay="autoplay"
          player-width="1101"
          player-height="auto"
          class="_video" />
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.$emit("close-overlay")
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/overlay-vimeo";
</style>
