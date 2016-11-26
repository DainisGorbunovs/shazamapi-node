# shazamapi-node

## Sample code `app.js`
```JavaScript
var apiKey = 'API-KEY-HERE';
var shazam = require('shazamapi-node')(apiKey);

var song = 'input.wav';
shazam.identify(song)
    .then((test) => {
        console.log(test.matches[0].metadata);
    });
```

### Trimming audio
```
$ ffmpeg -ss 27 -t 10 -i input.mp3 input.wav
```

### Running
```
$ node app.js
```
