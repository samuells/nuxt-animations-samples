<template>
  <li
    v-editable="blok"
    class="_glance-point">
    <IconGlanceArrow class="_icon"/>
    <p><strong>{{ blok.highlighted_text }}</strong> {{ blok.text }}</p>
  </li>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
