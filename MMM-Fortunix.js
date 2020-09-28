/* Magic Mirror
 * Module: MMM-Fortunix
 *
 * By Mykle1
 *
 */
Module.register("MMM-Fortunix", {

    defaults: {
        css: "",
        useHeader: true,
        header: "",
        maxWidth: "100%",
        animationSpeed: 0,
        initialLoadDelay: 0,
        retryDelay: 2500,
        updateInterval: 60 * 1000,

    },


    // Gets correct css file from config.js
    getStyles: function() {
      if(this.config.css != ""){
        return ["modules/MMM-Fortunix/css/MMM-Fortunix" + this.config.css + ".css"];
      } else {
        return ["modules/MMM-Fortunix/css/MMM-Fortunix1.css"]; // default.css
      }
    },


    getScripts: function() {
        return ["moment.js"];
    },


    start: function() {
        Log.info("Starting module: " + this.name);
        this.uf = {};
        this.scheduleUpdate();
    },


    getDom: function() {

        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        wrapper.style.maxWidth = this.config.maxWidth;

        if (!this.loaded) {
            wrapper.innerHTML = this.translate("Unix wisdom . . .");
            wrapper.classList.add("bright", "small");
            return wrapper;
        }

        if (this.config.useHeader != false) {
            var header = document.createElement("header");
            header.classList.add("small", "bright", "header");
            header.innerHTML = this.config.header;
            wrapper.appendChild(header);
        }


        // testing div while trying to get module to load
        var wisdom = document.createElement("div");
        wisdom.classList.add("small", "bright", "wisdom");
        wisdom.innerHTML = this.uf;
        wrapper.appendChild(wisdom);
        return wrapper;
    },


    processUF: function(data) {
        this.uf = data;
        this.loaded = true;
        // console.log(this.uf); // for checking in dev console
    },

    scheduleUpdate: function() {
        setInterval(() => {
            this.getUF();
        }, this.config.updateInterval);
        this.getUF();
    },

    getUF: function() {
        this.sendSocketNotification('GET_UF');
    },


    socketNotificationReceived: function(notification, payload) {
        if (notification === "UF_RESULT") {
            this.processUF(payload);
        }
        this.updateDom();
    },
});
