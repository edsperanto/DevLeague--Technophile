/*jshint esversion: 6 */

// import files
var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extend = require('./extend');

// extend function
function extend(destination, origin) {
  for(var k in origin.prototype) {
    destination.prototype[k] = origin.prototype[k];
  }
}

// create class
function SmartWatch() {
  Watch.call(this);
}
extend(SmartWatch, Watch, Tablet);

// export new class
module.exports = SmartWatch;