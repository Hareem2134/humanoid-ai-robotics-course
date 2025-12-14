module.exports = function (context, options) {
  return {
    name: 'ignore-sys-files-plugin',
    configureWebpack(config, isServer) {
      if (!isServer) {
        if (!config.watchOptions) {
          config.watchOptions = {};
        }
        const existingIgnored = config.watchOptions.ignored || [];
        const newIgnored = Array.isArray(existingIgnored)
          ? [...existingIgnored, '**/pagefile.sys', '**/swapfile.sys']
          : [existingIgnored, '**/pagefile.sys', '**/swapfile.sys'];

        config.watchOptions.ignored = newIgnored;
      }
      return config;
    },
  };
};
