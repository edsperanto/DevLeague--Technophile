/*jshint esversion: 6 */

// import files
var Watch = require('./Watch');
var Tablet = require('./Tablet');

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
extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

// export new class
module.exports = SmartWatch;