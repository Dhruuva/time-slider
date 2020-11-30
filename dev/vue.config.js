//const path = require("path");

module.exports = {
  devServer: { port: 8787 },
  publicPath:
    process.env.NODE_ENV === "production" ? "/time-slider" : "/time-slider",
    css: {
    requireModuleExtension: true,
    extract: false
  },

  chainWebpack: config => {
    const sRule = config.module.rule("stylus");
    sRule.uses.clear();
    sRule
      .test(/\.styl(us)?$/)
      .oneOf("vue")
      .resourceQuery(/vue/)
      .use("stylus-loader")
      .loader("stylus-loader")
      .options({
        stylusOptions: { sourceMap: false, preferPathResolver: "webpack" }
      })
      .end()
      .end();
  }
};
