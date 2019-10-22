import { getMode, loadData } from "~/plugins/helpers"

export const state = () => ({
  settings: {
    lottie: "",
    anim_speed: "",
    anim_loop: false
  }
})

export const getters = {
  cacheVersion: store => store.cacheVersion,
  settings: store => store.settings
}

export const mutations = {
  async setCacheVersion(state, cacheVersion) {
    state.cacheVersion = cacheVersion
  },
  setSettings(state, settings) {
    state.settings = settings
  }
}

export const actions = {
  async loadCacheVersion({ commit }, context) {
    if (context.store.state.storyblok.cacheVersion === 0) {
      // initial cache version call to improve further requests
      // since they now only hit the CDN.
      const { data } = await context.app.$storyapi.get(`cdn/spaces/me`)
      commit("setCacheVersion", data.space.version)
    }
  },
  async loadSettings({ commit }) {
    return loadData({
      version: getMode(this.app.context),
      api: this.$storyapi,
      cacheVersion: this.app.store.state.storyblok.cacheVersion,
      errorCallback: this.app.context.error,
      path: `settings`
    }).then(res => {
      commit("setSettings", res.story.content)
    })
  }
}
