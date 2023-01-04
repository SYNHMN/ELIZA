ELIZA 1.0 "MAD-Slip"

ELIZA is a Modular Search System.
32KB, versatile, responsive and fast, ELIZA delivers sleek, performant, low overhead code with high order functions that will run on anything.

ELIZA is written in vanilla HTML, CSS and JavaScript.

The code is Free and Open Source Software (FOSS) under the Massachusetts Institute of Technology (MIT) license.

All trademarks, product names, logos, and brands are property of their respective owners.


## Commands

### Appearance

`dark` - dark theme

`light` - light theme

### Search

`amazon` or `amz` - search amazon

`archive` or `arc` - search archive

`bing` - search bing

`brave` or `brv` - search brave

`duckduckgo` or `ddg` - search duckduckgo

`github` or `git` - search github

`google` or `goo` - search google

`googlemaps` or `ggm` - search googlemaps

`imdb` - search imdb

`instagram` or `insta` - search instagram

`openstreetmaps` or `osm` - search openstreetmaps

`reddit` or `rdt` - search reddit

`soundcloud` or `scd` - search soundcloud

`spotify` or `spy` - search spotify

`startpage` or `stp` - search startpage

`tiktok` or `tik` - search tiktok

`twitch` or `ttv` - search twitch

`twitter` or `ttr` - search brave

`wikipedia` or `wiki` - search wikipedia

`wolframalpha` or `wolf` - search wolframalpha

`youtube` or `you` - search youtube

### Search examples

example 1: `google How old is Harry Styles?`

example 2: `wiki Mona Lisa`


## Add commands

### The commands are located in /js/eliza.js

```js
goo = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://google.com/search?q=" + search);
    }
}
```

## License

[MIT](https://opensource.org/licenses/MIT)


## Preview

![](https://raw.githubusercontent.com/SYNHMN/ELIZA/main/preview/Preview-1.png)

![](https://raw.githubusercontent.com/SYNHMN/ELIZA/main/preview/Preview-2.png)
