// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;

const assert = require('assert');

assert(REGEXP.test('fjd3IR9') === true);
assert(REGEXP.test('ghdfj32') === false);
assert(REGEXP.test('DSJKHD23') === false);
assert(REGEXP.test('dsF43') === false);
assert(REGEXP.test('4fdg5Fj3') === true);
assert(REGEXP.test('DHSJdhjsU') === false);
assert(REGEXP.test('fjd3IR9.;') === false);
assert(REGEXP.test('fjd3  IR9') === false);
assert(REGEXP.test('djI38D55') === true);
assert(REGEXP.test('djI3_8D55') === false);
assert(REGEXP.test('djI38D55@@') === false);
