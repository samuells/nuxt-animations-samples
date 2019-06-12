<template>
  <storyblok-link
    v-editable="blok"
    :link="blok.link"
    class="teaser-project">
    <div class="_image">
      <picture>
        <source
          :srcset="blok.image | transformImage('500x0/filters:format(webp)')"
          type="image/webp"
          media="(max-width: 1023px)">
        <source
          :srcset="blok.image | transformImage('1200x0/filters:format(webp)')"
          type="image/webp"
          media="(min-width: 1024px)">
        <source
          :srcset="blok.image | transformImage('500x0')"
          type="image/jpeg"
          media="(max-width: 1023px)">
        <source
          :srcset="blok.image | transformImage('1200x0')"
          type="image/jpeg"
          media="(min-width: 1024px)">
        <img
          :src="blok.image | transformImage('1200x0')"
          :alt="blok.image_alt">
      </picture>
    </div>
    <h2 class="lvl3 _title">{{ blok.title }}</h2>
    <h3 class="lvl4 _subtitle">{{ blok.subtitle }}</h3>
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
@import "./assets/scss/components/teaser-project";
</style>
