
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

var FamilyGirl = module.exports = Character.extend({

  texture: 'familygirl',

  animations: new pac.AnimationList(animations.FamilyGirl, {
    default: 'idleLeftGirl',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  walkAnim: {
    'idleLeft': 'idleLeftGirl',
    'idleRight': 'idleRightGirl',
    'walkLeft': 'walkLeftGirl',
    'walkRight': 'walkRightGirl'
  },

  update: function(dt){
    FamilyGirl.__super__.update.apply(this, arguments);


  },

});
