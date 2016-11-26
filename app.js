var apiKey = 'API-KEY-HERE';
var shazam = require('shazamapi-node')(apiKey);

var song = 'input.wav';
shazam.identify(song)
    .then((test) => {
        console.log(test.matches[0].metadata);
    });
