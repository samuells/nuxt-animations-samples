<template>
  <li
    :class="{_opened: opened}"
    class="_link-wrapper">
    <storyblok-link
      v-scroll-to="{
        el: `#subpage-link-${index}`,
        onStart: toggleStretcher,
        offset: calcOffset,
        onDone: pushToPage
      }"
      :link="link.link"
      class="row--outer _link">
      {{ link.label }}
    </storyblok-link>
    <div ref="stretcher"/>
    <collapse-transition>
      <div
        v-show="opened"
        :id="`subpage-link-${index}`"
        class="_link-stretcher"/>
    </collapse-transition>
  </li>
</template>

<script>
import _links from "../mixins/_links"
import { CollapseTransition } from "vue2-transitions"

export default {
  components: {
    CollapseTransition
  },
  mixins: [_links],
  props: {
    link: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    toggleStretcher() {
      this.opened = !this.opened
    },
    calcOffset() {
      return this.$refs.stretcher.offsetTop
    },
    pushToPage() {
      if (this.isInternalLink(this.link.link.linktype)) {
        this.$router.push(this.translateInternalUrl(this.link.link.cached_url))
      } else {
        this.$router.push("/")
      }
    }
  }
}
</script>
