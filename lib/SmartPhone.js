/*jshint esversion: 6 */

// import files
var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

// extend function
function extend(destination, origin) {
  for(var k in origin.prototype) {
    destination.prototype[k] = origin.prototype[k];
  }
}

// create class
function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, "Smart Phone");
}
extend(SmartPhone, Phone);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

// export new class
module.exports = SmartPhone;