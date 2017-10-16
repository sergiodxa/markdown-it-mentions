var regexp = require('markdown-it-regexp');

function _parseURL(username) {
  return 'https://twitter.com/@' + username;
}

function parser(match, utils) {
  var config = this.options;

  var parseURL = config.parseURL || _parseURL;

  var url = parseURL(match[1]);

  return [
    '<a href="',
    utils.escape(url),
    '" target="',
    config.external ? '_blank' : '_self',
    '">@',
    match[1],
    '</a>'
  ].join('');
}

module.exports = regexp(/@(\w+)/, parser);
