
const jsonc = {};
module.exports = jsonc;

// const colorJson = require('./color-json');
jsonc.parser = require('jsonc-parser');
const stringifier = require('fast-safe-stringify');

jsonc.stringify = (value, replacer, space) => stringifier(value, replacer, space);
jsonc.colorify = (value, replacer, space) => require('./color-json')(value, { indent: space });

jsonc.parse = (json, errors = [], { allowTrailingComma = true, allowEmptyContent = false, disallowComments = false } = {}) => {

	const result = jsonc.parser.parse(json, errors, { allowTrailingComma, allowEmptyContent, disallowComments });
	if (errors.length) {
		console.error(errors);
		return null;
	}

	return result;

};


