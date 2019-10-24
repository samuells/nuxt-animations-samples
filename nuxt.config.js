require("dotenv").config()

const StoryBlokToken = process.env.STORYBLOK_TOKEN

export default {
  dev: process.env.NODE_ENV !== "production",
  debug: process.env.NODE_ENV !== "production",
  mode: "universal",
  /*
    ** Headers of the page
    */
  head: {
    title: "Animation's Experiments",
    htmlAttrs: {
      amp: false
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "theme-color", content: "#ffffff" },
      {
        name: "googlebot",
        content: "noindex"
        // content: "index,follow"
      },
      {
        name: "robots",
        content: "noindex"
        // content: "index,follow,noodp"
      },
      {
        name: "country",
        content: "Germany"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Encode+Sans+Expanded:400,700&display=swap"
      }
    ]
  },

  /*
    ** Customize the progress-bar color
    */
  loading: { color: "#FFFFFF" },
  /*
  ** Layout Transitions
  */
  // layoutTransition: {
  //   name: "lt",
  //   mode: "out-in"
  // },

  /*
  ** Page Transitions
  */
  pageTransition: {
    name: "default",
    mode: ""
  },

  /*
    ** Global CSS
    */
  css: ["@/assets/scss/global.scss"],

  /*
    ** Plugins to load before mounting the App
    */
  plugins: ["~/plugins/helpers"],
  /*
    ** Nuxt.js modules
    */
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: StoryBlokToken,
        cacheProvider: "memory"
      }
    ],
    "@nuxtjs/style-resources"
  ],
  /*
    ** Default SCSS Files import - requirments for all components
    */
  styleResources: {
    scss: ["~assets/scss/_toolbelt.scss"]
  },
  router: {
    middleware: ["cache-version-loader", "settings-loader"]
  },
  /*
    ** Build configuration
    */
  build: {
    /*
      ** You can extend webpack config here
      */
    html: {
      minify: {
        removeRedundantAttributes: false
      }
    },
    postcss: {
      plugins: {
        "postcss-normalize": {}
      }
    },
    extend(config, ctx) {
      // update test for images & consider as images only files from folder assets/images/*
      config.module.rules
        .filter(r => r.test.toString().includes("svg"))
        .forEach(r => {
          r.test = /images\/.*\.(png|jpe?g|gif|svg)$/
        })
      // loader for inline svg from folder assets/icons/*
      config.module.rules.push({
        test: /icons\/.*\.svg$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
              compact: false
            }
          },
          {
            loader: "vue-svg-loader",
            options: {
              // optional [svgo](https://github.com/svg/svgo) options
              svgo: {
                plugins: [
                  { removeDoctype: true },
                  { removeComments: true },
                  { removeViewBox: false },
                  { removeTitle: true }
                ]
              }
            }
          }
        ]
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
