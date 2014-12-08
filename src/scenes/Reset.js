var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');

var stats = require('./Stats');

var Loader = pac.Scene.extend({

  init: function(options){

  },

  onEnter: function(scene){
    this.game.loadScene('OneScreen');
  },

  onExit: function(scene){

  },

  update: function(dt){

  }
});

module.exports = Loader;
