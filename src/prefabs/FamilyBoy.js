
var animations = require('../animations');

module.exports = pac.Sprite.extend({

  texture: 'familyboy',

  animations: new pac.AnimationList(animations.FamilyPerson, {
    default: 'idle',
    autoplay: true
  }),

  shape: true,

  size: {
    width: 100,
    height: 100
  }

});
