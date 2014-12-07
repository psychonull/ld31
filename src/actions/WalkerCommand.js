
var Command = require('./Command');

module.exports = pac.Action.extend({

  name: 'WalkerCommand',

  init: function(walker) {
    this.walker = walker;
  },

  onStart: function() { },

  onEnd: function() { },

  update: function(dt) {

    if (this.walker.targetReached){
      this.insertBehindMe(new Command());
    }

    if (!this.walker.walkingTo){
      this.isFinished = true;
    }

  },

});