const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const config = {
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "venders",
          chunks: "all",
        },
      },
    },
    minimize: true,
  },
  mode: "production",
};

module.exports = merge(common, config);
