
var Command = require('./Command');

module.exports = pac.Action.extend({

  name: 'WalkerCommand',

  init: function(walker, command) {
    this.walker = walker;
    this.command = command;
  },

  onStart: function() { },

  onEnd: function() { },

  update: function(dt) {

    if (this.walker.targetReached){
      this.insertBehindMe(new Command(this.command));
    }

    if (!this.walker.walkingTo){
      this.isFinished = true;
    }

  },

});