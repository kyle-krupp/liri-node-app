# liri-node-app

LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

- my-tweets
-  spotify-this-song
- movie-this
- do-what-it-says

## Getting Started

- **Clone the repo**.
  - Run command 'npm install' in Terminal or GitBash.
  - Run command 'node liri.js' or one of the commands below.



## What Each Command Does

1. **node liri.js spotify-this-song** <song name>

- Shows the following information about the song in terminal/bash window.
  - Artist(s)
  - The song's name
  - A preview link of the song from Spotify
  - The album that the song is from
  - Or if no song is passed through, it will default to *"The Sign" by Ace of Base*

2. **node liri.js movie-this** <movie name>

- Shows the following information in terminal/bash.

  - Title of the movie.

  - Year the movie came out.

  - IMDB Rating of the movie.

  - Country where the movie was produced.

  - Language of the movie.

  - Plot of the movie.

  - Actors in the movie.

  - Or if no movie is passed through, it will default to *"Mr. Nobody"*


3. **node liri.js do-what-it-says**

- Takes the text from random.txt and runs the song through spotify-this-song command



4. **node liri.js concert-this** <artist/band name>

- Shows the following information in terminal/bash
  - Venue name
  - Venue city 
  - Venue region 
  - Venue country
  - Venue Date & Time





## Tech Used 

```javascript
Node.js

Spotify NPM Package -https://www.npmjs.com/package/node-spotify-api

Request NPM Package - https://www.npmjs.com/package/request

Moment NPM Package -  https://www.npmjs.com/package/moment

Doentv NPM Package - https://www.npmjs.com/package/dotenv
```



## Prerequisites



```javascript
Node.js - Download the latest version of Node https://nodejs.org/en/
```



## Built With

**Visual Studio Code - Text Editor**

*Authors:*

 *- Kyle Krupp* 
