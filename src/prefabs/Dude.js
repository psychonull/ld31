
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

var Dude = module.exports = Character.extend({

  texture: 'dude',

  animations: new pac.AnimationList(animations.Dude, {
    default: 'idle',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  walkAnim: {
    'idleLeft': 'idle',
    'idleRight': 'idle',
    'walkLeft': 'walkLeft',
    'walkRight': 'walkRight'
  },

  update: function(dt){
    Dude.__super__.update.apply(this, arguments);

  },

});
