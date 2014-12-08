var pac = require('../../../pac/src/');
var _ = pac._;

var prefabs = require('../prefabs');

var OneScreen = pac.Scene.extend({

  texture: 'back_building',
  deadCount: 0,

  init: function(options){

  },

  onEnter: function(scene){
    var stats = this.game.stats;
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

    this.showScores = require('./showScores.js')(this.game);
  },

  onExit: function(scene){

  },

  update: function(dt){
    if(this.game.familyCard.disabled && !this.floor3.disabled){
      this.floor3.disable();
      this.deadCount++;
    }
    if(this.game.dudeCard.disabled && !this.floor2.disabled){
      this.floor2.disable();
      this.deadCount++;
    }
    if(this.game.granmaCard.disabled && !this.floor1.disabled){
      this.floor1.disable();
      this.deadCount++;
    }
    if(this.deadCount === 2){
      this.showEnding();
    }
  },

  showEnding: function(){
    this.game.pause();

    var msg = '';
    if(!this.floor1.disabled){
      msg = 'You behave like a sweet selfish granny.';
    }
    else if(!this.floor2.disabled){
      msg = 'Time to get serious, uh?';
    }
    else if(!this.floor3.disabled){
      msg = 'You are a family hero.';
    }
    this.showScores(
      ['YOU LOST.', msg],
      (this.game.time / 1000).toFixed(2));

    window.setTimeout(function(){
      window.addEventListener('click', function(){
        window.location.href = window.location.href;
      });
    }, 1000);
  }

});

module.exports = OneScreen;
