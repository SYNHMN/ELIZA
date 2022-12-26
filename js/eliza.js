// ELIZA

var input = document.getElementById("eliza-input");

input.onkeyup = function(e){
    if(e.keyCode == 13){
    	var input = document.getElementById("eliza-input");
    	var inputValue = input.value;
		event.currentTarget.value = "";
    	var command = inputValue.split(" ")[0];
    	var args = inputValue.replace(command, "");
    	window[command](args);
    }
}

// AUTO-COMPLETE

const data = ["amazon","archive","bing","brave","duckduckgo","github","google","googlemaps","imdb","instagram","openstreetmaps","reddit","soundcloud","spotify","startpage","tiktok","twitch","twitter","wikipedia","wolframalpha","youtube"];

const autocomplete = document.getElementById("eliza-input")
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
      results = getResults(userInput);
      resultsHTML.style.display = "grid";
      for (i = 0; i < results.length; i++) {
        resultsHTML.innerHTML += "<div>" + results[i] + "</div>";
      }
    }
};

  function getResults(input) {
    const results = [];
    for (i = 0; i < data.length; i++) {
      if (input === data[i].slice(0, input.length)) {
        results.push(data[i]);
      }
    }
    return results;
}

  resultsHTML.onclick = function (event) {
    document.getElementById("eliza-input").focus();
    const setValue = event.target.innerText;
    autocomplete.value = setValue;
    this.innerHTML = "";
};

// COMMANDS

amz = amazon;
function amazon(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.amazon.de/s?k=" + search);
    }
}

arc = archive;
function archive(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://archive.org/search.php?query=" + search);
    }
}

bing = bing;
function bing(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.bing.com/search?q=" + search);
    }
}

brv = brave;
function brave(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://search.brave.com/search?q=" + search);
    }
}

ddg = duckduckgo;
function duckduckgo(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://duckduckgo.com/" + search);
    }
}

git = github;
function github(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://github.com/search?q=" + search);
    }
}

goo = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://google.com/search?q=" + search);
    }
}

ggm = googlemaps;
function googlemaps(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.google.com/maps/place/" + search);
    }
}

imdb = imdb;
function imdb(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.imdb.com/find?q=" + search);
    }
}

insta = instagram;
function instagram(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.instagram.com/" + search);
    }
}

osm = openstreetmaps;
function openstreetmaps(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.openstreetmap.org/search?query=" + search);
    }
}

rdt = reddit;
function reddit(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://reddit.com/r/" + search);
    } 
}

scd = soundcloud;
function soundcloud(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://soundcloud.com/search?q=" + search);
    }
}

spy = spotify;
function spotify(args) {
    if (args != undefined) {
        search = args.replace(" ", "%20")
        window.open("https://open.spotify.com/search/" + search);
    }
}

stp = startpage;
function startpage(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.startpage.com/sp/search?q=" + search);
    }
}

tik = tiktok;
function tiktok(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.tiktok.com/search?q=" + search);
    }
}

ttv = twitch;
function twitch(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.twitch.tv/" + search);
    }
}

ttr = twitter;
function twitter(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://twitter.com/search?q=" + search);
    }
}

wiki = wikipedia;
function wikipedia(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://en.wikipedia.org/w/index.php?go=Go&search=" + search);
    }
}

wolf = wolframalpha;
function wolframalpha(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.wolframalpha.com/input?i=" + search);
    }
}

you = youtube;
function youtube(args) {
    if (args != undefined) {
        search = args.replace(" ", "")
        window.open("https://www.youtube.com/results?search_query=" + search);
    }
}

// Theme

let theme = () => document.documentElement.getAttribute('theme-variable');

const toogleTheme = (e) => {
  const setTheme = (th) => {
    document.documentElement.setAttribute('theme-variable', th);
  };

  if (e)
    if (e === 'dark')
      setTheme('dark');
    if (e === 'light')
      setTheme('light');
};

function light(args) {
    if (args != undefined) {
        toogleTheme('light');
    }
}

function dark(args) {
    if (args != undefined) {
        toogleTheme('dark');
    }
}