
var floorSize = { width: 908, height: 183 };

module.exports = function(){

  return pac.Rectangle.extend({

    layer: 'background',
    zIndex: 0,

    shape: new pac.Rectangle({ size: pac._.clone(floorSize) }),
    size: pac._.clone(floorSize),

    actions: [ new pac.actions.Clickable() ],

    start: null,
    env: null,
    floor: 0,

    init: function(options){
      this.walkers = new pac.List();
      this.stats = (options && options.stats) || this.stats;
      this.env = (options && options.env) || this.env;
      this.floor = (options && options.floor) || this.floor;
    },

    update: function(dt){

      switch(this.floor){
        case 1:
          this.game.granmaCard.mind = this.stats.mind;
          this.game.granmaCard.body = this.stats.body;
          break;
        case 2:
          this.game.dudeCard.mind = this.stats.mind;
          this.game.dudeCard.body = this.stats.body;
          break;
        case 3:
          this.game.familyCard.mind = this.stats.mind;
          this.game.familyCard.body = this.stats.body;
          break;
      }

    }

  });

};
