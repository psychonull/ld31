
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

module.exports = Character.extend({

  texture: 'grandma',

  animations: new pac.AnimationList(animations.GrandMa, {
    default: 'idleLeft',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  update: function(dt){

    if (this.walkingTo){
      var dir = this.walkingTo;
      if (dir.x >= 0){
        this.animations.play('walkRight');
        this.lastSide = 'Right';
      }
      else {
        this.animations.play('walkLeft');
        this.lastSide = 'Left';
      }
    }
    else {
      this.animations.play('idle' + (this.lastSide || 'Left'));
    }
  },

});
