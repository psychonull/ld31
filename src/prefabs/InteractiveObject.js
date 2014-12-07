var _ = pac._;

var InteractiveObject = pac.Sprite.extend({
  layer: 'objects',
  zIndex: 10,

  shape: true,

  size: {
    width: 50,
    height: 50
  },

  floor: 1,
  actions: [],

  init: function(options){

    this.frameHover = (options && options.frameHover) ||
      (this.frame && this.frame + '_hover') || this.frameHover;

    this.animationHover = (options && options.animationHover) ||
      (this.frame && this.frame + '_hover') || this.animationHover;

    this.actions.pushFront(new pac.actions.Hoverable());

    this
      .on('hover:in', _.bind(function(){
        if(this.animationHover){
          this.originalAnimation = this.animations.current._name;
          this.animations.play(this.animationHover);
        }
        else {
          this.originalFrame = this.frame;
          this.frame = this.frameHover;

        }
      }, this))
      .on('hover:out', _.bind(function(){
        if(this.animationHover){
          this.animations.play(this.originalAnimation);
          this.originalAnimation = null;
        }
        else{
          this.frame = this.originalFrame;
          this.originalFrame = null;
        }
      }, this));

  }

});

module.exports = InteractiveObject;
