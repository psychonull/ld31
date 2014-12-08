
var actions = require('../actions');
var floorSize = { width: 908, height: 183 };

module.exports = function(stats, livingTime){

  return pac.Rectangle.extend({

    layer: 'background',
    zIndex: 0,

    shape: new pac.Rectangle({ size: pac._.clone(floorSize) }),
    size: pac._.clone(floorSize),

    actions: [
      new pac.actions.Clickable(),
      new actions.Living(stats.living, livingTime)
    ],

    start: null,
    env: null,
    floor: 0,
    disabled: false,

    init: function(options){
      this.walkers = new pac.List();
      this.stats = (options && options.stats) || this.stats;
      this.env = (options && options.env) || this.env;
      this.floor = (options && options.floor) || this.floor;
    },

    update: function(dt){

      switch(this.floor){
        case 1:
          this.checkCharacterCard(this.game.granmaCard);
          break;
        case 2:
          this.checkCharacterCard(this.game.dudeCard);
          break;
        case 3:
          this.checkCharacterCard(this.game.familyCard);
          break;
      }

    },

    checkCharacterCard: function(card){
      card.mind = this.stats.mind;
      card.body = this.stats.body;
      if(card.mentalDisaster && !this.lostMind){
        this.onLostMind();
        this.lostMind = true;
      }
      if(card.bodyProblems && !this.lostBody){
        this.onLostBody();
        this.lostBody = true;
      }
    },

    disable: function(){
      this.scene.objects.find({floor: this.floor}).each(function(o){
        o.active = false;
      });
      this.walkers.each(function(w){ w.visible = false; });
      var rect = new pac.Rectangle({
        size: pac._.clone(floorSize),
        position: this.position.clone(),
        layer: 'overlay',
        fill: '#000000',
        alpha: 0.7
      });
      this.game.addObject(rect);
      this.disabled = true;
    },

    getWalker: function(toPos){
      if (this.walkers.length === 1){
        return this.walkers.at(0);
      }

      if (this.walkers.length > 1){

        var min = {
          index: -1,
          len: Number.POSITIVE_INFINITY
        };

        this.walkers.each(function(walker, i){

          var len = walker.position.subtract(toPos).length();

          if (len < min.len){
            min.len = len;
            min.index = i;
          }
        });

        if (min.index > -1){
          return this.walkers.at(min.index);
        }

        return null;
      }

      return null;
    },

  });

};
