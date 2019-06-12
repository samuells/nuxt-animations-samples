<template>
  <div
    v-editable="blok"
    class="at-glance">
    <h2 class="lvl4 _title">{{ blok.headline }}</h2>
    <ul class="_points-list">
      <GlancePoint
        v-for="point in blok.points"
        :blok="point"
        :key="point.id" />
    </ul>
  </div>
</template>

<script>
import GlancePoint from "./GlancePoint"

export default {
  components: {
    GlancePoint
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/at-glance";
</style>
