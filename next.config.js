const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
  cssModules: true,
  webpack(config, options) {
    const { dev, isServer } = options;
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "react-svg-loader",
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
    });

    return config;
  }
})