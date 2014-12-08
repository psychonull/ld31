
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

  init: function(options){
    this.constructor.__super__.init.call(this, options);

    this.actions.pushFront(new pac.actions.Speaker({
      textOptions: {
        font: '12px lucas',
        isBitmapText: true,
        wordWrap: '220',
        wrapToScreen: false,
        tint: 0xEE1111
      },
      offset: new pac.Point(0,-20),
      smartPosition: false,
    }));
  },

  update: function(dt){
    FamilyGirl.__super__.update.apply(this, arguments);


  },

});
