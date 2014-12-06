var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');

var OneScreen = pac.Scene.extend({

  texture: 'back_building',

  init: function(options){

  },

  onEnter: function(scene){

    var x = 13;
    var floorSize = { width: 908, height: 183 };
    var debugColor = '#f2b5b5';

    var floor1 = new pac.Rectangle({
      position: new pac.Point(x, 406),
      size: floorSize,
      fill: debugColor
    });

    var floor2 = new pac.Rectangle({
      position: new pac.Point(x, 206),
      size: floorSize,
      fill: debugColor
    });

    var floor3 = new pac.Rectangle({
      position: new pac.Point(x, 11),
      size: floorSize,
      fill: debugColor
    });

    // for debug
    this.addObject([ floor1, floor2, floor3 ]);

    require('./Floor1')(floor1, this);
    require('./Floor2')(floor2, this);
    require('./Floor3')(floor3, this);
  },

  onExit: function(scene){

  },

  update: function(dt){

  }
});

module.exports = OneScreen;
