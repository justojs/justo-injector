[![Build Status](https://travis-ci.org/justojs/justo-injector.svg)](https://travis-ci.org/justojs/justo-injector)

Dependency injector.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Functions

### hasParameter()

Checks whether a function has a specified parameter:

```
hasParameter(name : string, fn : function) : boolean
```

### getParameters()

Returns an array with the parameters:

```
getParameters(fn : function) : string[]
```

### getParameterIndex()

Returns the parameter index:

```
getParameterIndex(name : string, fn : function) : number
```

### inject()

Returns the argument array for a call:

```
inject(args : object, fn : function) : object[]
```

Example:

```
function fn(x, y, z) {}

args = inject({x: 1, y: 2}, fn);  //[1, 2, undefined]
```
