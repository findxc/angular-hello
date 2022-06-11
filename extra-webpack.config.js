const { DefinePlugin } = require('webpack')

module.exports = (config, options, targetOptions) => {
  config.plugins.push(
    new DefinePlugin({
      APP_VERSION: JSON.stringify('v1.0.0'),
    })
  )
  return config
}
