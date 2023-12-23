const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOption: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
