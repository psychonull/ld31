var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');

var stats = require('./Stats');

var OneScreen = pac.Scene.extend({

  texture: 'back_building',

  init: function(options){

  },

  onEnter: function(scene){

    var x = 13;

    var floor1 = new (prefabs.Floor(stats.floor1, stats.livingTime))({
      floor: 1,
      name: 'floor1',
      stats: stats.floor1.start,
      env: stats.floor1.env,
      position: new pac.Point(x, 407),
    });

    var floor2 = new (prefabs.Floor(stats.floor2, stats.livingTime))({
      floor: 2,
      name: 'floor2',
      stats: stats.floor2.start,
      env: stats.floor2.env,
      position: new pac.Point(x, 208)
    });

    var floor3 = new (prefabs.Floor(stats.floor3, stats.livingTime))({
      floor: 3,
      name: 'floor3',
      stats: stats.floor3.start,
      env: stats.floor3.env,
      position: new pac.Point(x, 12)
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
