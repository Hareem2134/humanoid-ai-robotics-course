const path = require('path');

module.exports = function (context, options) {
  const { siteConfig } = context;
  const { baseUrl } = siteConfig;

  return {
    name: 'docusaurus-chatbot-plugin',

    configureWebpack(config, isServer) {
      if (isServer) {
        return {};
      }
      return {
        entry: {
          ...config.entry,
          chatbot: path.resolve(__dirname, '../../src/chatbot-entry.js'),
        },
      };
    },

    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'div',
            attributes: {
              id: 'chatbot-container',
            },
          },
          {
            tagName: 'script',
            attributes: {
              src: `${baseUrl}assets/js/chatbot.js`,
            },
          },
        ],
      };
    },
  };
};
