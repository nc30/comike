
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'コミケ送り状ジェネレーター',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'コミケ送り状ジェネレーター' },
      { name: 'author', content: 'Asahi Himura' },
      { name: 'description', content: 'コミケ送り状ジェネレーター' },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "コミケ送り状ジェネレーター" },
      { name: "twitter:description", content: "コミケ送り状ジェネレーター" },
      { name: "twitter:image", content: "http://sateraito.nagoya/static/img/eight-compressor.jpg" }
    ],
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Kosugi+Maru|Sawarabi+Gothic&display=swap" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@ajusa/lit@latest/dist/lit.css" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
