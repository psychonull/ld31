
var Walker = require('./Walker');
var WalkerCommand = require('./WalkerCommand');
var Command = require('./Command');

module.exports = pac.Action.extend({

  name: 'Activable',

  requires: [ pac.actions.Hoverable, pac.actions.Clickable ],

  init: function(options) {
    this.nearness = (options && options.nearness) || 10;
    this.command = pac._.clone(options.command || {}, true);
  },

  onStart: function() {
    var obj = this.actions.owner;
    this.floor = obj.game.findOne('floor' + obj.floor);
  },

  onEnd: function() {

  },

  update: function(dt) {
    var obj = this.actions.owner;
    var isTurnOff = false;

    if (obj.isClicked){

      if (obj.isActivated){
        // the object is activated

        if (this.command.duration === true){
          // duration is infite so clear any command that is active
          isTurnOff = true;
        }
        else return;
      }

      // TODO: add a random position to get a walker for Family
      this.walker = this.floor.walkers.at(0);

      var myPos = obj.shape.getBounds(obj.position).getCenter();
      myPos.x -= this.walker.shape.size.width/2;
      myPos.y = this.walker.position.y;

      if (myPos.subtract(this.walker.position).length() <= this.nearness){

        if (isTurnOff){
          this.actions.removeAll(Command);
          return;
        }

        this.actions.pushFront(new Command(this.command));
        return;
      }

      this._walkToObject(myPos, isTurnOff);
    }
  },

  _walkToObject: function(myPos, isTurnOff){

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

      this.actions.pushFront(new WalkerCommand(this.walker, this.command, isTurnOff));
    }
  }

});