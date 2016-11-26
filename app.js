var apiKey = 'API-KEY-HERE';
var shazam = require('shazamapi-node')(apiKey);

var song = 'input.wav';
shazam.identify(song);
