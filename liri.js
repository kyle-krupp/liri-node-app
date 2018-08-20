// environment variables
require("dotenv").config();

var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require("request");

var spotify = new Spotify(keys.spotify);

// argument variables
var command = process.argv[2];
var searchedItem = process.argv[3];



function getSpotify(searchedItem){
    var songName = searchedItem || "The sign";

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


switch (command) {

    case 'spotify-this-song':
        getSpotify(searchedItem);
        break;

}