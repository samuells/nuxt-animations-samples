<template>
  <main class="page--default water">
    <div class="content">
      <article class="row--outer rt-content">
        <h1 class="lvl1">Riding bikers!</h1>
        <p>Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.</p>
        <p>Est qui reprehenderit inventore et. Reprehenderit eligendi voluptatibus nam aut. Ducimus eveniet necessitatibus quidem rem.</p>
      </article>
      <nuxt-link
        to="/water"
        class="button">
        Float the screen
      </nuxt-link>
      <nuxt-link
        to="/intro"
        class="button">
        Back to Home
      </nuxt-link>
    </div>
    <PageBikerTransition/>
  </main>
</template>

<script>
import PageBikerTransition from "~/components/PageBikerTransition"

export default {
  transition: {
    name: "biker",
    mode: "in-out"
  },
  components: {
    PageBikerTransition
  }
}
</script>

<style lang="scss">
.water {
  padding-top: rh(5);
}
</style>
