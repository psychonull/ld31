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
    this.floor = (options && options.floor) || this.floor;
    this.frameHover = (options && options.frameHover) || this.frameHover;
    this.caption = (options && options.caption) || this.caption || this.name;

    if(!_.isArray(this.caption)){
      this.caption = [this.caption];
    }

    if (this.frameHover && this.texture){
      this.createHover();
    }

    this.actions.pushFront(new pac.actions.Speaker({
      textOptions: {
        font: '10px lucas',
        isBitmapText: true,
        wordWrap: '200',
        wrapToScreen: false,
        visible: false
      },
      offset: (options && options.captionOffset) || new pac.Point(0,-10),
      smartPosition: false,
    }));
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
    if(this.commandRemainingTime){
      this.speakerText.value = this.caption[1] + '' + this.commandRemainingTime;
    }
  },

  _hover: function(){
    if (!this.hoverChild){
      return;
    }

    this.speakerText.value = this.caption[this.isActivated ? 1 : 0] ||
      this.caption[0];

    if (this.isHover && !this.hoverChild.visible){
      this.hoverChild.visible = true;
      this.speakerText.visible = true;
    }
    else if(!this.isHover && this.hoverChild.visible) {
      this.hoverChild.visible = false;
      this.speakerText.visible = false;
      this.speakerText.value = '';
    }
  }

});

module.exports = InteractiveObject;
