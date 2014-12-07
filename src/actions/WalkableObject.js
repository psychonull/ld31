
var Walker = require('./Walker');
var WalkerCommand = require('./WalkerCommand');
var Command = require('./Command');

module.exports = pac.Action.extend({

  name: 'WalkableObject',

  requires: [ pac.actions.Hoverable, pac.actions.Clickable ],

  init: function(options) {
    this.nearness = (options && options.nearness) || 10;
  },

  onStart: function() {
    var obj = this.actions.owner;
    this.floor = obj.game.findOne('floor' + obj.floor);
  },

  onEnd: function() {

  },

  update: function(dt) {
    var obj = this.actions.owner;

    if (obj.isClicked){
      // TODO: add a random position to get a walker for Family
      this.walker = this.floor.walkers.at(0);

      var myPos = obj.shape.getBounds(obj.position).getCenter();
      myPos.x -= this.walker.shape.size.width/2;
      myPos.y = this.walker.position.y;

      if (myPos.subtract(this.walker.position).length() <= this.nearness){
        this.actions.pushFront(new Command());
        return;
      }

      this._walkToObject(myPos);
    }
  },

  _walkToObject: function(myPos){

    if (this.actions.has(WalkerCommand)){
      // it is already going to that object
      return;
    }

    var found;

    this.walker.actions.each(function(action){
      if (action instanceof Walker){
        found = action;
        return false;
      }
    });

    if (found) {

      this.walker.actions
        .removeAll(pac.actions.WalkTo)
        .insertAfter(new pac.actions.WalkTo({
          velocity: found.velocity,
          target: myPos,
          nearness: this.nearness
        }), found);

      this.actions.pushFront(new WalkerCommand(this.walker));
    }
  }

});