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

    this.floor1 = new (prefabs.Floor(stats.floor1, stats.livingTime))({
      floor: 1,
      name: 'floor1',
      stats: stats.floor1.start,
      env: stats.floor1.env,
      position: new pac.Point(x, 407),
    });

    this.floor2 = new (prefabs.Floor(stats.floor2, stats.livingTime))({
      floor: 2,
      name: 'floor2',
      stats: stats.floor2.start,
      env: stats.floor2.env,
      position: new pac.Point(x, 208)
    });

    this.floor3 = new (prefabs.Floor(stats.floor3, stats.livingTime))({
      floor: 3,
      name: 'floor3',
      stats: stats.floor3.start,
      env: stats.floor3.env,
      position: new pac.Point(x, 12)
    });

    this.addObject([ this.floor1, this.floor2, this.floor3 ]);

    require('./Floor1')(this.floor1, this);
    require('./Floor2')(this.floor2, this);
    require('./Floor3')(this.floor3, this);
  },

  onExit: function(scene){

  },

  update: function(dt){
    if(this.game.familyCard.disabled && !this.floor3.disabled){
      this.floor3.disable();
    }
    if(this.game.dudeCard.disabled && !this.floor2.disabled){
      this.floor2.disable();
    }
    if(this.game.granmaCard.disabled && !this.floor1.disabled){
      this.floor1.disable();
    }
  }
});

module.exports = OneScreen;
