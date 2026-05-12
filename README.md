
# Package @ampsy/env
- Solves problem of undefined environment variables causing odd errors in code, by
  throwing an AssertionError with a clear message when an environment variable is undefined.
- fast-fail wrapper for environment variables.
- Best used in code at startup, so prior to 'ready' state all required variables are resolved.
 
# Usage
```
const { get } = require('@ampsy/env');

//const environmentVariableValue = get(environmentVariableName);

const REQUIRED_VAR = get('REQUIRED_VAR');
const OPTIONAL_VAR = get('OPTIONAL_VAR','optional value to set');
```

# See test/test.js for test cases