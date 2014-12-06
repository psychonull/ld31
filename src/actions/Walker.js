
module.exports = pac.Action.extend({

  name: 'Walker',

  init: function(options) {
    this.velocity = (options && options.velocity) || 10;
    this.feet = (options && options.feet) || null;
  },

  onStart: function() {
    var obj = this.actions.owner;
    this.floor = obj.game.findOne('floor' + obj.floor);
  },

  onEnd: function() {

  },

  update: function(dt) {

    if (this.floor.isClicked){

      var obj = this.actions.owner;
      var pos = obj.game.inputs.cursor.position;

      obj.actions
        .removeAll(pac.actions.WalkTo)
        .pushFront(new pac.actions.WalkTo({
          velocity: this.velocity,
          target: new pac.Point(pos.x, obj.position.y)
        }));

    }

  }

});