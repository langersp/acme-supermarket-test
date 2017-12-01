module.exports = {
  entry: ['babel-polyfill','./js/app.js'],
  output: {
    path: __dirname + '/build',
    filename: 'main.bundle.js'
  }, 
  watch: true
}


