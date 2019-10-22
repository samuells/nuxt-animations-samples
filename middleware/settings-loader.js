export default function({ store }) {
  return store.dispatch("storyblok/loadSettings")
}
