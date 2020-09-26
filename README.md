## MMM-Fortunix

Gets words of wisdom (not fortunes, so much) from unix/linux

So, Fortune + Unix = Fortunix!

## Initial version

* Annotated .css file included for coloring text and header.

## Examples

* One with color. One standard white, default font.

![](images/2.png)
`~`
![](images/1.png)

## Installation

* `git clone https://github.com/mykle1/MMM-Fortunix` into the `~/MagicMirror/modules` directory.

* Open a new terminal and run `sudo apt install fortune`.


## Config.js entry and options

```
{
disabled: false,
module: 'MMM-Fortunix',
position: 'top_left',
config: {
    css: "1", // 1-6            // 1= default, 2-6 various fonts and colors
    useHeader: false,           // true if you want a header.
    header: "MMM-Fortunix",    // Any text you want. useHeader must be true
    maxWidth: "100%",
    updateInterval: 3 * 60 * 1000,
}
},
```
## Thanks to Sam for his wizardry at getting data from a terminal command
