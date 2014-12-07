
module.exports = pac.Action.extend({

  name: 'Command',

  init: function() { },

  onStart: function() { },

  onEnd: function() { },

  update: function(dt) {

    console.log('Command Executed for object ' + this.actions.owner.name);
    this.isFinished = true;

  },

});