module.exports = function (context, options) {
  return {
    name: 'webpack-watch-ignore-plugin',
    configureWebpack(config, isServer) {
      if (!isServer) {
        config.watchOptions = {
          ...config.watchOptions,
          ignored: ['**/pagefile.sys', '**/swapfile.sys'],
        };
        console.log('Docusaurus Webpack: Updated watchOptions.ignored');
      }
      return config;
    },
  };
};