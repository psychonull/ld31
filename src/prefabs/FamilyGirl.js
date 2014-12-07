
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

module.exports = Character.extend({

  texture: 'familygirl',

  animations: new pac.AnimationList(animations.FamilyGirl, {
    default: 'idle',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  update: function(dt){

    if (this.walkingTo){

      if (this.walkingTo.x >= 0){
        this.animations.play('walkRightGirl');
      }
      else {
        this.animations.play('walkLeftGirl');
      }

    }
    else {
      this.animations.play('idleGirl');
    }

  },

});
