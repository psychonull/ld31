
var Command = require('./Command');

module.exports = pac.Action.extend({

  name: 'WalkerCommand',

  init: function(walker, command, isTurnOff) {
    this.walker = walker;
    this.command = command;
    this.isTurnOff = isTurnOff;
  },

  onStart: function() { },

  onEnd: function() { },

  update: function(dt) {

    if (this.walker.targetReached){
      if (this.isTurnOff){
        this.actions.removeAll(Command);
      }
      else {
        this.insertBehindMe(new Command(this.command));
      }
    }

    if (!this.walker.walkingTo){
      this.isFinished = true;
    }

  },

});