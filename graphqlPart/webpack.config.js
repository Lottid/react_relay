module.exports = {
  entry: {
    app: "./scripts/app.js"
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js"
  },
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel"
    }
  ]}
}
