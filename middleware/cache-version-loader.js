export default function(context) {
  return context.store.dispatch("storyblok/loadCacheVersion", context)
}
