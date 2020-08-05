
const jsonc = {};
module.exports = jsonc;


jsonc.parser = require('jsonc-parser');
const stringifier = require('fast-safe-stringify');

jsonc.stringify = (value, replacer, space) => stringifier(value, replacer, space);

jsonc.parse = (json, errors = [], { allowTrailingComma = true, allowEmptyContent = false, disallowComments = false } = {}) => {

	const result = jsonc.parser.parse(json, errors, { allowTrailingComma, allowEmptyContent, disallowComments });
	if (errors.length) {
		console.error(errors);
		return null;
	}

	return result;

};


