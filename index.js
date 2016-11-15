var loaderUtils = require('loader-utils');

module.exports = function () {

};

module.exports.pitch = function (remainingRequest) {
  if (this.cacheable) {
    this.cacheable()
  }
  return [
    '// isomorphic-ready-style-loader: loads css class mapping and full rendered css',
    '',
    'var content = require(' + loaderUtils.stringifyRequest(this, '!!' + remainingRequest) + ');',
    'if (typeof content === "string") {',
    'content = [[module.id, content, ""]];',
    '}',
    'module.exports = content.locals || {}',
    'module.exports._style = content.toString()'
  ].join('\n')
};
