const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-chatbot-plugin',
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
};
