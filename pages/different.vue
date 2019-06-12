<template>
  <main
    :key="99"
    class="row--outer">
    <NuxtLogo class="logo"/>
    <h2 class="lvl2 title">This page used different layout.</h2>
    <div class="links">
      <nuxt-link
        to="/first"
        class="button">First</nuxt-link>
      <nuxt-link
        to="/second"
        class="button">Second (with popup)</nuxt-link>
      <nuxt-link
        to="/third"
        class="button">Third</nuxt-link>
    </div>
  </main>
</template>

<script>
import NuxtLogo from "~/components/NuxtLogo"

export default {
  layout: "different",
  components: {
    NuxtLogo
  }
}
</script>

<style lang="scss">
.logo {
  display: block;
  margin: 0 auto rh(1);
}

.links,
.title {
  text-align: center;
}

.title {
  margin-bottom: rh(1);
}
</style>
