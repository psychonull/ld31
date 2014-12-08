
var animations = require('../animations');
var actions = require('../actions');

var Character = require('./Character');

var FamilyBoy = module.exports = Character.extend({

  texture: 'familyboy',

  animations: new pac.AnimationList(animations.FamilyBoy, {
    default: 'idleLeftBoy',
    autoplay: true
  }),

  actions: [ new actions.Walker({ velocity: 50 }) ],

  walkAnim: {
    'idleLeft': 'idleLeftBoy',
    'idleRight': 'idleRightBoy',
    'walkLeft': 'walkLeftBoy',
    'walkRight': 'walkRightBoy'
  },

  init: function(options){
    this.constructor.__super__.init.call(this, options);

    this.actions.pushFront(new pac.actions.Speaker({
      textOptions: {
        font: '12px lucas',
        isBitmapText: true,
        wordWrap: '220',
        wrapToScreen: false,
        tint: 0x1111EE
      },
      offset: new pac.Point(0,-20),
      smartPosition: false,
    }));
  },

  update: function(dt){
    FamilyBoy.__super__.update.apply(this, arguments);


  },

});
