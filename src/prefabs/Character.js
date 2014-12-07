
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

    this.wasWalking = false;
    this.doOnNextTick = false;
  },

  update: function(dt){


    if (this.walkingTo){
      this.wasWalking = true;

      if (this.walkingTo.x >= 0){
        this.animations.play(this.walkAnim.walkRight);
        this.lastSide = 'Right';
      }
      else {
        this.animations.play(this.walkAnim.walkLeft);
        this.lastSide = 'Left';
      }

    }
    else if (this.wasWalking && this.doOnNextTick){
      this.doOnNextTick = false;
      this.animations.play(this.walkAnim['idle' + this.lastSide]);
    }
    else {
      this.doOnNextTick = true;
    }

  },

});
