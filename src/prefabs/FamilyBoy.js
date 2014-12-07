
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

var FamilyBoy = module.exports = Character.extend({

  texture: 'familyboy',

  animations: new pac.AnimationList(animations.FamilyBoy, {
    default: 'idleBoy',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  walkAnim: {
    'idleLeft': 'idleBoy',
    'idleRight': 'idleBoy',
    'walkLeft': 'walkLeftBoy',
    'walkRight': 'walkRightBoy'
  },

  update: function(dt){
    FamilyBoy.__super__.update.apply(this, arguments);

    
  },

});
