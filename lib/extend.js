/*jshint esversion: 6 */
function extend() {
  for(var i = 1; i < arguments.length; i++) {
    for(var k in arguments[i].prototype) {
      arguments[0].prototype[k] = arguments[i].prototype[k];
    }
  }
}
module.exports = extend;