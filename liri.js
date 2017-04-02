var spotify = require('spotify');
var request = require('request');
var inquirer = require('inquirer');
var hollaback = require('hollaback')
var fs = require("fs");
var nodeArgs = process.argv[3];
var trackInfo = "";

request("http://ws.spotify.com/search/1/track", function(error, response, body){
    if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).);
  }
},

inquirer.prompt([
    {
        type: "input",
        message: "What song are you looking for?",
        name: "songName"
    },
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }
]).then(function (user) {

    if (user.confirm) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            console.log("========");
            console.log("");
            console.log("Song Name " + user.songName);
        })
    }
})