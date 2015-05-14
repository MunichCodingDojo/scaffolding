'use strict';

var fs = require('fs'),
    ReactTools = require('react-tools');

require.extensions['.jsx'] = function (module, filename) {
    var content = fs.readFileSync(filename, 'utf8'),
        compiledContent = ReactTools.transform(content);

    return module._compile(compiledContent, filename);
};
