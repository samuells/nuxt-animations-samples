<template>
  <main
    :key="2"
    class="page--default page--first">
    <nuxt-link
      to="/second"
      class="button">
      Next Page
    </nuxt-link>
    <SampleTypography title="First Page"/>
  </main>
</template>

<script>
import SampleTypography from "~/components/SampleTypography"

export default {
  components: {
    SampleTypography
  }
}
</script>

<style lang="scss">
.page--first {
  padding-top: rh(5);
  background-color: $red-firebrick;

  .rt-content * {
    color: $white !important;
  }
}
</style>
