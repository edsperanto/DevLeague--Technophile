/*jshint esversion: 6 */

// import files
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

// extend function
function extend(destination, origin) {
  for(var k in origin.prototype) {
    destination.prototype[k] = origin.prototype[k];
  }
}

// create class
function NintendoDS() {
  GameConsole.call(this, "Nintendo DS");
}
extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

// export new class
module.exports = NintendoDS;