<template>
  <main>
    <nuxt-link
      to="/third"
      class="button">
      Next Page
    </nuxt-link>
    <SampleTypography title="Second Page"/>
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
