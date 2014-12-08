var Howl = require('howler').Howl,
  sounds = require('./sounds.js'),
  _ = pac._;

var result = {};

_.forIn(sounds, function(files, key){
  result[key] = new Howl({
    urls: files
  });
});

module.exports = result;
