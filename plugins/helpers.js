export function getPath(context) {
  let path = "home"

  if (context.route.params.pathMatch !== undefined) {
    // if not define - loading from /home else keep the path
    path = context.route.params.pathMatch
  }

  return `${path}`
}

export function getMode(context) {
  let mode = "published"
  if (
    context.query._storyblok ||
    !process.env.public_api ||
    (typeof window !== "undefined" &&
      window.localStorage.getItem("_storyblok_draft_mode"))
  ) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("_storyblok_draft_mode", "1")
      if (window.location === window.parent.location) {
        window.localStorage.removeItem("_storyblok_draft_mode")
      }
    }
    mode = "draft"
  }

  return mode
}

export function loadData({ api, cacheVersion, errorCallback, version, path }) {
  return api
    .get(`cdn/stories/${path}`, {
      version: version,
      cv: cacheVersion
    })
    .then(res => {
      return res.data
    })
    .catch(res => {
      if (!res.response) {
        console.error(res)
        errorCallback({
          statusCode: 404,
          message: "Failed to receive content form api"
        })
      } else {
        console.error(`Request for : ${res.response.config.url}`)
        console.error(res.response.data)
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data
        })
      }
    })
}
