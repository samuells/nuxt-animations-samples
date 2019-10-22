<template>
  <main
    :key="1"
    class="row--outer">
    <NuxtLogo class="logo"/>
    <h2 class="lvl2 title">Experiments with Transitions </h2>
    <div class="links">
      <nuxt-link
        to="/first"
        class="button">First</nuxt-link>
      <nuxt-link
        to="/second"
        class="button">Second</nuxt-link>
      <nuxt-link
        to="/third"
        class="button">Third</nuxt-link>
      <nuxt-link
        to="/water"
        class="button">Water</nuxt-link>
      <nuxt-link
        to="/biker"
        class="button">Bikers</nuxt-link>
      <nuxt-link
        to="/dynamic"
        class="button">Dynamic</nuxt-link>
      <nuxt-link
        to="/different"
        class="button">Different Layout</nuxt-link>
    </div>
    <div>
      <button
        class="button"
        @click.prevent="toggleDialog">
        Open Dialog
      </button>
    </div>
    <transition name="dialog">
      <DialogBox
        v-if="showDialog"
        @clicked="toggleDialog"/>
    </transition>
  </main>
</template>

<script>
import NuxtLogo from "~/components/NuxtLogo"
import DialogBox from "~/components/DialogBox"

export default {
  transition: {
    name: "intro",
    mode: "out-in"
  },
  components: {
    NuxtLogo,
    DialogBox
  },
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog
    }
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
