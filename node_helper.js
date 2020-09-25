/* Magic Mirror
 * Module: MMM-Fortunix
 *
 * By Mykle1
 *
 */
const NodeHelper = require('node_helper');
const exec = require('child_process').exec; // Assumed I needed this to run the terminal command 'fortune -s'


module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
    },

    getUF: function(url) {

    // I stripped down MMM-PC-Stats that you had helped me with to get the terminal output of a terminal command
    // In this case, the user would have to install by using 'sudo apt install fortune' (not by npm install)
    // I tried using the npm package 'tfortune' which appears to give the same output but no luck there either
    // I've tried a number of things that I found on stack exchange to get terminal output but errored in all cases

},

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_UF') {
            this.getUF(payload);
        }
  }

});
