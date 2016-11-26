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
It needs to be approximately 10 second long WAV file.
```
$ ffmpeg -ss 27 -t 10 -i input.mp3 input.wav
```

### Running
```
$ node app.js
```

### Sample output
```json
{
   "matches":[
      {
         "key":"Xz5UTjcmsakF4B+JtayphlNUiqIj8haFFz5DeUiJhdZ2V963xMHdpjHxK7QmtUEUEA==",
         "metadata":{
            "title":"Invincible",
            "artist":"Deaf Kev"
         },
         "type":"music"
      }
   ]
}
```
