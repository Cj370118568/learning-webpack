module.exports = {
  entry: "./src/index.js",
  output: { filename: "./bundle.js" },
  mode: "development",
  devServer: {
    static: {
      publicPath: "/dist/",
    },
  },
};
