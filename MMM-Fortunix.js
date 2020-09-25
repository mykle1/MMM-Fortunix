/* Magic Mirror
 * Module: MMM-Fortunix
 *
 * By Mykle1
 *
 */
Module.register("MMM-Fortunix", {

    defaults: {
        useHeader: false,
        header: "",
        maxWidth: "300px",
        animationSpeed: 0,
        initialLoadDelay: 0,
        retryDelay: 2500,
        updateInterval: 60 * 1000,

    },

    getStyles: function() {
        return ["MMM-Fortunix.css"];
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
        var testing = document.createElement("div");
        testing.classList.add("small", "bright", "testing");
        testing.innerHTML = "testing";
        wrapper.appendChild(testing);
    },


    processUF: function(data) {
        this.uf = data;
        this.loaded = true;
        console.log(this.uf); // for checking in dev console
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
