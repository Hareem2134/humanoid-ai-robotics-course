module.exports = function (context, options) {
  return {
    name: 'docusaurus-chatbot-plugin',
    getClientModules() {
      return [require.resolve('./root.js')];
    },
  };
};
