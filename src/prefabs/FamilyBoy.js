
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

module.exports = Character.extend({

  texture: 'familyboy',

  animations: new pac.AnimationList(animations.FamilyPerson, {
    default: 'idle',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

});
