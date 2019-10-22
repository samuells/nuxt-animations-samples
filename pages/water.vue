<template>
  <main class="page--default water">
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
    <PageWaterTransition/>
  </main>
</template>

<script>
import PageWaterTransition from "~/components/PageWaterTransition"

export default {
  transition: {
    name: "water",
    mode: "in-out"
  },
  components: {
    PageWaterTransition
  }
}
</script>

<style lang="scss">
.water {
  padding-top: rh(5);
}
</style>
