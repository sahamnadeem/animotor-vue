module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://oranje-tech.com/demo/kut_it/api',
  }
}
