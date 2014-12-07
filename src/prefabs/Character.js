
module.exports = pac.Sprite.extend({

  layer: 'objects',
  zIndex: 50,

  shape: true,

  size: {
    width: 100,
    height: 100
  },

  walkAnim: null,

  init: function(options){
    this.floor = (options && options.floor) || this.floor;

    this.walkAnim = pac._.defaults(options.walkAnim || this.walkAnim, {
      'idleLeft': 'idle',
      'idleRight': 'idle',
      'walkLeft': 'walkLeft',
      'walkRight': 'walkRight'
    });
  },

  update: function(dt){


    if (this.walkingTo){

      if (this.walkingTo.x >= 0){
        this.animations.play(this.walkAnim.walkRight);
        this.lastSide = 'Right';
      }
      else {
        this.animations.play(this.walkAnim.walkLeft);
        this.lastSide = 'Left';
      }

    }
    else {
      this.animations.play(this.walkAnim['idle' + this.lastSide]);
    }

  },

});
