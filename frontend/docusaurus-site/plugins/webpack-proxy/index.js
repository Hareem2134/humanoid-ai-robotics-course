module.exports = function (context, options) {
  const { backendUrl } = context.siteConfig.customFields;

  return {
    name: "custom-webpack-proxy-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: {
          "devServer.proxy": "replace"
        },
        devServer: {
          proxy: [
            {
              context: ['/api'],
              target: backendUrl,
              secure: false,
              changeOrigin: true,
              logLevel: 'debug',
            },
          ],
        },
      };
    },
  };
};
