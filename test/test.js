const test = require('node:test')
const assert = require('assert/strict')
const { get } = require("../lib/env.js");

test('get', () => {
    let name = 'X';
    let value = 'y';
    process.env[name] = value;
    assert.equal(get(name), value);
});
test('getDefault', () => {
    let name = 'X';
    let value = 'y';
    delete process.env[name];
    assert.equal(get(name, value), value);
});
test('getErrorValueEmptyString', () => {
    let name = 'X';
    process.env[name] = '';
    try {
        get(name);
        assert.fail('expected exception not thrown'); // this throws an AssertionError
    } catch (e) {
        assert.notEqual(e.message, 'expected exception not thrown');
        assert.equal(e.message, `Missing required variable: ${name}`);
    }
});
test('getErrorValueUndefined', () => {
    let name = 'X';
    let value;
    process.env[name] = value;
    try {
        get(name);
        assert.fail('expected exception not thrown'); // this throws an AssertionError
    } catch (e) {
        assert.notEqual(e.message, 'expected exception not thrown');
        assert.equal(e.message, `Missing required variable: ${name}`);
    }
});
test('getErrorNotInEnv', () => {
    let name;
    delete process.env[name];
    try {
        get(name);
        assert.fail('expected exception not thrown'); // this throws an AssertionError
    } catch (e) {
        assert.notEqual(e.message, 'expected exception not thrown');
        assert.equal(e.message, `Missing required variable: ${name}`);
    }
});
test('getDefaultErrorUndefined', () => {
    let name = 'X';
    try {
        let value;
        delete process.env[name];
        assert.equal(get(name, value), value);
        assert.fail('expected exception not thrown'); // this throws an AssertionError
    } catch (e) {
        assert.notEqual(e.message, 'expected exception not thrown');
        assert.equal(e.message, `Missing required variable: ${name}`);
    }
});
