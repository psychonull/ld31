
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

var FamilyGirl = module.exports = Character.extend({

  texture: 'familygirl',

  animations: new pac.AnimationList(animations.FamilyGirl, {
    default: 'idleGirl',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  walkAnim: {
    'idleLeft': 'idleGirl',
    'idleRight': 'idleGirl',
    'walkLeft': 'walkLeftGirl',
    'walkRight': 'walkRightGirl'
  },

  update: function(dt){
    FamilyGirl.__super__.update.apply(this, arguments);


  },

});
