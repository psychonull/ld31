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
    this.frameHover = (options && options.frameHover) || this.frameHover;

    if (this.frameHover && this.texture){
      this.createHover();
    }
  },

  createHover: function(){
    this.hoverChild = new pac.Sprite({
      texture: this.texture,
      frame: this.frameHover,
      size: pac._.clone(this.size),
      visible: false
    });

    this.children.add(this.hoverChild);
  },

  update: function(dt){
    this._hover();
  },

  _hover: function(){
    if (!this.hoverChild){
      return;
    }

    if (this.isHover && !this.hoverChild.visible){
      this.hoverChild.visible = true;
    }
    else if(!this.isHover && this.hoverChild.visible) {
      this.hoverChild.visible = false;
    }
  }

});

module.exports = InteractiveObject;
