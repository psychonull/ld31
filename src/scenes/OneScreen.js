var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');
var actions = require('../actions');

var stats = {
  floor1: {
    start: { mind: 1, body: 1 },
    lose: { mind: -0.03, body: -0.015 }
  },
  floor2: {
    start: { mind: 1, body: 1 },
    lose: { mind: -0.015, body: -0.03 }
  },
  floor3: {
    start: { mind: 1, body: 1 },
    lose: { mind: -0.045, body: -0.015 }
  },
  loseTime: 5 //seconds
};

var OneScreen = pac.Scene.extend({

  texture: 'back_building',

  init: function(options){

  },

  onEnter: function(scene){

    var x = 13;

    var floor1 = new (prefabs.Floor())({
      floor: 1,
      name: 'floor1',
      stats: stats.floor1.start,
      position: new pac.Point(x, 407),
    });

    var floor2 = new (prefabs.Floor())({
      floor: 2,
      name: 'floor2',
      stats: stats.floor2.start,
      position: new pac.Point(x, 208)
    });

    var floor3 = new (prefabs.Floor())({
      floor: 3,
      name: 'floor3',
      stats: stats.floor3.start,
      position: new pac.Point(x, 12)
    });

    this.addObject([ floor1, floor2, floor3 ]);

    require('./Floor1')(floor1, this);
    require('./Floor2')(floor2, this);
    require('./Floor3')(floor3, this);

    floor1.actions.pushFront(
      new actions.Living(stats.floor1.lose, stats.loseTime, 1));

    floor2.actions.pushFront(
      new actions.Living(stats.floor2.lose, stats.loseTime, 1));

    floor3.actions.pushFront(
      new actions.Living(stats.floor3.lose, stats.loseTime, 1));
  },

  onExit: function(scene){

  },

  update: function(dt){

  }
});

module.exports = OneScreen;
