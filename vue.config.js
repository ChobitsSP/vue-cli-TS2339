module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  runtimeCompiler: true,
  chainWebpack: (config) => {
    // config.plugins.delete('fork-ts-checker');
  },
};
