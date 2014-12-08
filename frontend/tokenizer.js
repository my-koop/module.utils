var _ = require("lodash");

function tokenizer(phrase, tokens) {
  if(!_.isArray(tokens)) {
    tokens = [tokens];
  }

  var nToken = tokens.length;
  function splitToken(iToken, text) {
    if(iToken == nToken) {
      return {text: text};
    }
    var token = tokens[iToken];
    var split = text.split(token);
    var l = split.length;
    var hasTokenRange = _.range(1, l, 2);
    var noTokenRange = _.range(0, l, 2);
    _.each(noTokenRange, function(i) {
      split[i] = splitToken(iToken + 1, split[i]);
    });
    _.each(hasTokenRange, function(i) {
      var r = {
        token: token,
        text: split[i]
      };
      split[i] = r;
    });
    return split;
  }
  var splitSentence = splitToken(0, phrase);
  var res = _.isString(splitSentence) ? splitSentence : _.flatten(splitSentence);
  return res;
}
module.exports = tokenizer;
