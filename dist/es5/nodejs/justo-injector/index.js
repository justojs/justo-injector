"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.





getParameters = getParameters;exports.


















hasParameter = hasParameter;exports.










getParameterIndex = getParameterIndex;exports.










inject = inject;function getParameters(fn) {var params;params = /\([^\)]*\)/.exec(fn.toString())[0];params = params.substr(1, params.length - 2).replace(/ /g, "").split(",");if (params.length == 1 && params[0] === "") params = [];return params;}function hasParameter(name, fn) {return getParameters(fn).indexOf(name) >= 0;}function getParameterIndex(name, fn) {return getParameters(fn).indexOf(name);}function inject(args, fn) {
  var res;


  res = [];

  for (var i = 0, params = getParameters(fn); i < params.length; ++i) {
    res.push(args[params[i]]);}



  return res;}
