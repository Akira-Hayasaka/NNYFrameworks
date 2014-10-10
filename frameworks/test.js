/*

// co
https://github.com/visionmedia/co

// gnode
https://github.com/TooTallNate/gnode

$ gnode foo.js all the args

*/

'use strict';

var co = require('co');
var thunkify = require('thunkify');
var request = require('request');
var get = thunkify(request.get);

co(function *(){
  var a = yield get('http://google.com');
  var b = yield get('http://yahoo.com');
  var c = yield get('http://cloudup.com');
  console.log(a[0].statusCode);
  console.log(b[0].statusCode);
  console.log(c[0].statusCode);
})()