## MMM-Fortunix

Under construction

## Initial version


* Annotated .css file included for coloring text and header.

## Examples

* One with color. One standard white.

![](images/2.PNG) ![](images/1.PNG)

![](images/3.png)

## Installation

* `git clone https://github.com/mykle1/MMM-Fortunix` into the `~/MagicMirror/modules` directory.

* `npm install` in your `~/MagicMirror/modules/MMM-Fortunix` directory.


## Config.js entry and options

{
disabled: false,
module: 'MMM-Fortunix',
position: 'top_left',
config: {
    useHeader: true,           // true if you want a header.
    header: "MMM-Fortunix",    // Any text you want. useHeader must be true
    maxWidth: "100%",
    animationSpeed: 3,         // 0 = no fade in and out.
    updateInterval: 3 * 60 * 1000,
}
},

## Thanks to Sam for his wizardry at getting data from a terminal command
