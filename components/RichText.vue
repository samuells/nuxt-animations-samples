<template lang="html">
  <div
    class="rich-text"
    v-html="extractHighlightedText(markedProse)"/>
</template>

<script>
import marked from "marked"

export default {
  props: {
    marked: {
      type: String,
      required: true
    }
  },
  computed: {
    markedProse() {
      return marked(this.marked)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/rich-text";
</style>
