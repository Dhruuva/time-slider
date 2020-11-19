//const path = require("path");
// import './index.css';

module.exports = {
  devServer: { port: 8787 },
  assetsDir: "www",
 // publicPath: "/time-slider", // publish git remore
  publicPath: process.env.NODE_ENV === 'production'
    ? "/time-slider"
    : "/time-slider", 
  //crossorigin: "anonymous",
 // productionSourceMap: false,
  //mode: 'production',
  //productionTip = false, does not work
  css: {
    requireModuleExtension: true,
    extract: false
  },

  chainWebpack: config => {
   // config.set('productionSourceMap',false);
    //config.node.set('global', false)
    //devServer.hot(true);
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
