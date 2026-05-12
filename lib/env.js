const assert = require('assert');

function get(envVarName, defaultValue) {
    const value = process.env[envVarName];
    const isValid =
        typeof value !== 'undefined' &&
        value.trim() !== '' &&
        value.trim() !== 'undefined';
    if (isValid) {
        return value;
    }
    if (defaultValue !== undefined && defaultValue !== '') {
        console.log(
            `using default value ${defaultValue} for envVar ${envVarName}`
        );
        return defaultValue;
    }
    throw new assert.AssertionError({
        message: `Missing required variable: ${envVarName}`
    });
}
module.exports = { get };