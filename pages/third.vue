<template>
  <main>
    <nuxt-link
      to="/"
      class="button">
      Preloader
    </nuxt-link>
    <SampleTypography title="Third Page"/>
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
