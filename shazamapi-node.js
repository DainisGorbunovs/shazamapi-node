function initializer(apiKey) {
    this.identify = function (song) {
        console.log(song);
    };
    return this;
}

module.exports = initializer;