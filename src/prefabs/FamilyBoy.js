
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

module.exports = Character.extend({

  texture: 'familyboy',

  animations: new pac.AnimationList(animations.FamilyBoy, {
    default: 'idle',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  update: function(dt){

    if (this.walkingTo){

      if (this.walkingTo.x >= 0){
        this.animations.play('walkRightBoy');
      }
      else {
        this.animations.play('walkLeftBoy');
      }

    }
    else {
      this.animations.play('idleBoy');
    }

  },

});
