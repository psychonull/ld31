var verticalMenu = require('../prefabs/VerticalMenu.js');
var Activable = require('./Activable.js');
module.exports = pac.Action.extend({
  name: 'MenuCommander',
  requires: [pac.actions.Clickable ],

  init: function(options) {
    this.options = options;
  },

  onStart: function() {
    var obj = this.actions.owner;
    this.floor = obj.game.findOne('floor' + obj.floor);
  },

  onEnd: function() {

  },

  update: function() {
    var obj = this.actions.owner;

    if(this.menu && this.menu.menuOptionSelected()){
      obj.actions.pushFront(new Activable({
        command: {
          env: { music: 0.1, tv: 0.1 },
          state: { mind: -0.01, body: 0.05 },
          duration: 2, // seconds
          changeInterval: 0.5, // apply state every X seconds
        },
        nearness: 50
      }));
      obj.scene.removeObject(this.menu);
      this.menu = null;
    }
    else if (obj.isClicked){
      this.menu = new verticalMenu();      
      obj.scene.addObject(this.menu);
      this.menu.createMenu({menuOptions: [{text: 'funciona'}, {text: 'bien'}],
        position: new pac.Point(this.options.position.x, this.options.position.y),
        /*actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({ 
                  size: {
                  width: 100,
                  height: 100
                  } 
                }),*/
        size: {
          width: 100,
          height: 100
        }
      });
    }
  }
});