<template>
  <div
    v-editable="blok"
    class="member"
    @mouseenter="opened = !opened"
    @mouseleave="opened = !opened">
    <h3 class="lvl4 _member-name">{{ blok.name }}</h3>
    <div
      :class="{'_portrait-shown': opened}"
      class="_portrait">
      <IconRita/>
      <picture>
        <source
          :srcset="blok.image | transformImage('500x0')"
          media="(max-width: 1023px)">
        <source
          :srcset="blok.image | transformImage('1200x0')"
          media="(min-width: 1024px)">
        <img
          :src="blok.image | transformImage('1200x0')"
          :alt="blok.image_alt">
      </picture>
    </div>
    <ul class="_info-list">
      <li><p>{{ blok.function }}</p></li>
      <li>
        <p>
          <a :href="`mailto:${blok.email}`">{{ blok.email }}</a>
        </p>
      </li>
      <li>
        <p>
          <a :href="`tel:${blok.phone}`">{{ blok.phone }}</a>
        </p>
      </li>
    </ul>
    <collapse-transition>
      <div v-show="opened">
        <p class="_bio">
          {{ blok.bio }}
        </p>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import { CollapseTransition } from "vue2-transitions"

export default {
  components: {
    CollapseTransition
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/member";
</style>
