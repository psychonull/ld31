
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

  init: function(options){
    this.constructor.__super__.init.call(this, options);

    this.actions.pushFront(new pac.actions.Speaker({
      textOptions: {
        font: '12px lucas',
        isBitmapText: true,
        wordWrap: '220',
        wrapToScreen: false,
        tint: 0xAA00AA
      },
      offset: new pac.Point(0,-20),
      smartPosition: false,
    }));
  },

  update: function(dt){
    GrandMa.__super__.update.apply(this, arguments);

  },

});
