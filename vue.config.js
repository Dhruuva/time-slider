//const path = require("path");
// import './index.css';

module.exports = {
  devServer: { port: 8787 },
  assetsDir:'script',
  publicPath:
    '/time-slider',

  css: {
    requireModuleExtension: true
  },

  chainWebpack: config => {
    const sRule = config.module.rule("stylus");
    //console.log("--------------->", sRule);
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
