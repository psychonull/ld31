
var animations = require('../animations');

module.exports = pac.Sprite.extend({

  texture: 'dude',

  animations: new pac.AnimationList(animations.Dude, {
    default: 'idle',
    autoplay: true
  }),

  shape: true,

  size: {
    width: 100,
    height: 100
  }

});
