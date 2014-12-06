
module.exports = pac.Sprite.extend({

  layer: 'objects',
  zIndex: 50,

  shape: true,

  size: {
    width: 100,
    height: 100
  },

  init: function(options){
    this.floor = (options && options.floor) || this.floor;
  }

});
