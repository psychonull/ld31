
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

module.exports = Character.extend({

  texture: 'grandma',

  animations: new pac.AnimationList(animations.GrandMa, {
    default: 'idle',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

});
