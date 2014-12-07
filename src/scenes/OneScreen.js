var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');
var actions = require('../actions');

function v(mind, body){
  return { mind: mind/1000, body: body/1000 };
}

var stats = {
  floor1: {
    start: { mind: 1, body: 1 },
    living: v(-3, -1.5),

    env: {
      tv: v(0, -1.5),
      babyCry: v(-3, -1.5),
      cook: v(-3, -1.5),
      videogame: v(-3, -1.5),
      music: v(-2, 0),
    }
  },
  floor2: {
    start: { mind: 1, body: 1 },
    living: v(-1.5, -3),

    env: {
      tv: v(-3, -1.5),
      babyCry: v(-3, -1.5),
      cook: v(-3, -1.5),
      videogame: v(-3, -1.5),
      music: v(-3, 1.5),
    }
  },
  floor3: {
    start: { mind: 1, body: 1 },
    living: v(-4.5, -1.5),

    env: {
      tv: v(-3, -1.5),
      babyCry: v(-3, -1.5),
      cook: v(-3, -1.5),
      videogame: v(-3, -1.5),
      music: v(-3, -1.5),
    }
  },

  livingTime: 0.1 //seconds
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
      env: stats.floor1.env,
      position: new pac.Point(x, 407),
    });

    var floor2 = new (prefabs.Floor())({
      floor: 2,
      name: 'floor2',
      stats: stats.floor2.start,
      env: stats.floor2.env,
      position: new pac.Point(x, 208)
    });

    var floor3 = new (prefabs.Floor())({
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

    floor1.actions.pushFront(
      new actions.Living(stats.floor1.living, stats.livingTime));

    floor2.actions.pushFront(
      new actions.Living(stats.floor2.living, stats.livingTime));

    floor3.actions.pushFront(
      new actions.Living(stats.floor3.living, stats.livingTime));
  },

  onExit: function(scene){

  },

  update: function(dt){

  }
});

module.exports = OneScreen;
