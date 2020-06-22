const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
  webpack(config, { buildId, dev, isServer, defaultLoaders }) {

    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-inline-loader']
    })
    console.log(JSON.stringify(config))
    return config
  }
})