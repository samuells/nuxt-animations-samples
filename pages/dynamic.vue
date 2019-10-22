<template>
  <main class="page--default">
    <article class="row--outer rt-content">
      <h1 class="lvl1">Dynamic Animation!</h1>
      <p>This was loaded from Storyblok Headless CMS</p>
      <p>Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.</p>
    </article>
    <nuxt-link
      to="/intro"
      class="button">
      Back to Home
    </nuxt-link>
    <PageTransition
      :anim-data="settings.lottie"
      :anim-speed="settings.anim_speed"
      :anim-loop="settings.anim_loop"/>
  </main>
</template>

<script>
import PageTransition from "~/components/PageTransition"

export default {
  transition: {
    name: "dynamic",
    mode: ""
  },
  components: {
    PageTransition
  },
  computed: {
    settings() {
      return this.$store.state.storyblok.settings
    }
  }
}
</script>

<style lang="scss">
</style>
