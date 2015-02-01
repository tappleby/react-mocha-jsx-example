var fs = require('fs');
var ReactTools = require("react-tools");

var MAGIC = "/** @jsx";

require.extensions['.jsx'] = function(mod, filename) {
	var content = fs.readFileSync(filename, 'utf8');
	content = ReactTools.transform(content, {harmony: true});
	return mod._compile(content, filename);
};

require.extensions['.js'] = function(mod, filename) {
	var content = fs.readFileSync(filename, 'utf8');

	if (content.slice(0, MAGIC.length) == MAGIC) {
		content = ReactTools.transform(content, {harmony: true});
	}
	return mod._compile(content, filename);
};
