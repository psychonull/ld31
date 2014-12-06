
var animations = require('../animations');

module.exports = pac.Sprite.extend({

  texture: 'grandma',

  animations: new pac.AnimationList(animations.GrandMa, {
    default: 'idle',
    autoplay: true
  }),

  shape: true,

  size: {
    width: 100,
    height: 100
  }

});
