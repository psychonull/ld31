
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

var GrandMa = module.exports = Character.extend({

  texture: 'grandma',

  animations: new pac.AnimationList(animations.GrandMa, {
    default: 'idleLeft',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  walkAnim: {
    'idleLeft': 'idleLeft',
    'idleRight': 'idleRight',
    'walkLeft': 'walkLeft',
    'walkRight': 'walkRight'
  },

  update: function(dt){
    GrandMa.__super__.update.apply(this, arguments);

  },

});
