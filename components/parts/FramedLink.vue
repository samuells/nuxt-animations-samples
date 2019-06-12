<template>
  <storyblok-link
    v-editable="blok"
    :link="blok.link"
    :external-tab="true"
    class="framed-link">
    <SvgFrame class="_frame"/>
    <picture>
      <source
        :srcset="blok.image | transformImage('600x0')"
        media="(max-width: 739px)">
      <source
        :srcset="blok.image | transformImage('1800x0')"
        media="(min-width: 740px)">
      <img
        :src="blok.image | transformImage('1800x0')"
        :alt="blok.img_alt">
    </picture>
    <div class="_bottom-circle">
      <IconArrowDown class="_icon"/>
    </div>
  </storyblok-link>
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

<style lang="scss">
@import "./assets/scss/components/framed-link";
</style>
