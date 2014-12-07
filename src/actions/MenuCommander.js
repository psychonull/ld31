var verticalMenu = require('../prefabs/VerticalMenu.js');
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

    if (obj.isClicked){
      var menu = new verticalMenu();      
      obj.scene.addObject(menu);
      menu.createMenu({menuOptions: [{text: 'funciona'}, {text: 'bien'}],
        position: new pac.Point(this.options.position.x, this.options.position.y),
        actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({ 
                  size: {
                  width: 100,
                  height: 100
                  } 
                }),
        size: {
          width: 100,
          height: 100
        }
      });
    }
  }
});