// environment variables
require("dotenv").config();

var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require("moment");
var request = require("request");

var spotify = new Spotify(keys.spotify);

// argument variables
var command = process.argv[2];
var searchedItem = process.argv[3];



function getSpotify(searchedItem){
    var songName = searchedItem || "I Want It That Way";

	spotify.search({ type: 'track', query: songName }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
 
		    var infoSong = "\n" + "\nSong Details" + "\n " + '\nArtist: ' + data.tracks.items[0].artists[0].name + '\nSong: ' + data.tracks.items[0].name +
            '\nPreview Link: ' + data.tracks.items[0].preview_url + '\nAlbum: ' + data.tracks.items[0].album.name;
            console.log(infoSong);

    		fs.appendFile('log.txt', infoSong, function (error) {
            	if (error) {
		        		console.log(" Error in appending text from Spotify: " + error);
		        	}
            });


	});
}


function getOmdb(searchedItem) {

  
	var queryUrl =
	  "http://www.omdbapi.com/?t=" +
	  searchedItem +
	  "&y=&plot=short&tomatoes=true&apikey=trilogy";
  
	request(queryUrl, function(error, response, body) {
	  if (!error && response.statusCode === 200) {
		var pbody = JSON.parse(body);

		console.log("Title - " + pbody.Title);
		console.log("Release Year: - " + pbody.Year);
		console.log("IMDB Rating - " + pbody.imdbRating);
		console.log("Rotten Tomatoes Rating - " + pbody.tomatoRating);
		console.log("Country where the movie was produced - " + pbody.Country);
		console.log("Language - " + pbody.Language);
		console.log("Plot - " + pbody.Plot);
		console.log("Actors - " + pbody.Actors);
	  }
	});
  }



  function getBandsInTown(searchedItem) {
	var queryUrl =
	  "https://rest.bandsintown.com/artists/" +
	  searchedItem +
	  "/events?app_id=codingbootcamp";
	console.log(queryUrl);
	request(queryUrl, function(error, response, body) {
	  var parsedData = JSON.parse(body);
	  if (!error && response.statusCode === 200) {
		parsedData.forEach(function(element) {
		  console.log("Venue name - " + element.venue.name);
		  console.log(
			"Venue Location - " +
			  element.venue.city +
			  " , " +
			  element.venue.region +
			  "  - " +
			  element.venue.country
		  );
		  console.log("Date - " + moment(element.datetime).format("MM/DD/YYYY"));
		});
	  }
	});
  }

  
  function doWhatItSays() {
	fs.readFile("./random.txt", "utf8", function(error, fileText) {
	  if (error) throw error;
  
	  fileText = fileText.split(",");
	  command = fileText[0];
	  console.log(command);
	  txtSearch= fileText[1];
	  console.log(txtSearch);
	  getSpotify(txtSearch);
	});
  }





switch (command) {

    case 'spotify-this-song':
        getSpotify(searchedItem);
		break;
		
		case 'movie-this':
		getOmdb(searchedItem);
		break;

		case 'do-what-it-says':
		doWhatItSays();
		break;

		case 'concert-this':
		getBandsInTown(searchedItem);

}