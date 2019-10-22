<template>
  <main class="page--default liquid-success">
    <article class="row--outer rt-content">
      <h1 class="lvl1">Successfully Animated!</h1>
      <p>Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.</p>
      <p>Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.</p>
    </article>
    <nuxt-link
      to="/second"
      class="button">
      Next Page
    </nuxt-link>
    <nuxt-link
      to="/intro"
      class="button">
      Back to Home
    </nuxt-link>
    <PageTransition/>
  </main>
</template>

<script>
import PageTransition from "~/components/PageTransition"

export default {
  transition: {
    name: "water",
    mode: "in-out"
  },
  components: {
    PageTransition
  }
}
</script>

<style lang="scss">
.liquid-success {
  padding-top: rh(5);
}
</style>
