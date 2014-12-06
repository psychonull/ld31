var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');

var OneScreen = pac.Scene.extend({

  texture: 'back_building',

  init: function(options){

  },

  onEnter: function(scene){

    var x = 13;

    var floor1 = new (prefabs.FloorBack())({
      name: 'floor1',
      position: new pac.Point(x, 406)
    });

    var floor2 = new (prefabs.FloorBack())({
      name: 'floor2',
      position: new pac.Point(x, 206)
    });

    var floor3 = new (prefabs.FloorBack())({
      name: 'floor3',
      position: new pac.Point(x, 11)
    });

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
