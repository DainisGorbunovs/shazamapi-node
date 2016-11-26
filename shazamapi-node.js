var request = require('request-promise'),
    fs = require('fs'),
    Promise = require('bluebird');

function initializer(apiKey) {
    this.identify = function (songFileName) {
        var readFileAsync = Promise.promisify(fs.readFile);

        return readFileAsync(songFileName)
            .then((binarySong) => {
            return request(
                {
                    url: 'http://beta.amp.shazam.com/partner/recognise',
                    method: 'POST',
                    headers: {
                        'X-Shazam-Api-Key': apiKey,
                        'Content-Type': 'application/octet-stream'
                    },
                    body: binarySong
                }
            );
        }).then((response) => {
            return JSON.parse(response);
        });
    };
    return this;
}

module.exports = initializer;