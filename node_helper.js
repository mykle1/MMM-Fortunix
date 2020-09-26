/* Magic Mirror
 * Module: MMM-Fortunix
 *
 * By Mykle1
 *
 */
const NodeHelper = require('node_helper');
const exec = require('child_process').exec; // I needed this to run the terminal command 'fortune -s'


module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
    },

    getUF: function(url) {
        let self=this;

    exec('fortune -s', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      self.sendSocketNotification("UF_RESULT", stdout)
      // console.log(`stdout: ${stdout}`);
      // console.error(`stderr: ${stderr}`);
    });

},

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_UF') {
            this.getUF(payload);
        }
  }

});
