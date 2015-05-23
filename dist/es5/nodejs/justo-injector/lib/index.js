/**
 * Returns an array with the parameters.
 *
 * @param fn:function The function to check.
 * @return string[]
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParameters = getParameters;
exports.hasParameter = hasParameter;
exports.getParameterIndex = getParameterIndex;
exports.inject = inject;

function getParameters(fn) {
  var params;

  //(1) get parameters
  params = /\([^\)]*\)/.exec(fn.toString())[0];
  params = params.substr(1, params.length - 2).replace(/ /g, "").split(",");
  if (params.length == 1 && params[0] === "") params = [];

  //(2) return
  return params;
}

/**
 * Checks whether a function has a specified parameter.
 *
 * @param name:string The parameter name to check.
 * @param fn:function The function to check.
 * @return boolean
 */

function hasParameter(name, fn) {
  return getParameters(fn).indexOf(name) >= 0;
}

/**
 * Returns the position of a specified parameter.
 *
 * @param name:string The parameter name to check.
 * @param fn:function The function to check where.
 * @return number
 */

function getParameterIndex(name, fn) {
  return getParameters(fn).indexOf(name);
}

/**
 * Returns the argument array for a call.
 *
 * @param args:object The arguments. Each parameter is a property.
 * @param fn:function The function.
 * @return object[]
 */

function inject(args, fn) {
  var res;

  //(1) get parameters
  res = [];

  for (var i = 0, params = getParameters(fn); i < params.length; ++i) {
    res.push(args[params[i]]);
  }

  //(2) return
  return res;
}