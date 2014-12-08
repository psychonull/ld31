
module.exports = pac.Action.extend({

  name: 'Walker',

  init: function(options) {
    this.velocity = (options && options.velocity) || 10;
    this.feet = (options && options.feet) || null;

    this.doOnNextTick = false;
  },

  onStart: function() {
    var obj = this.actions.owner;
    this.floor = obj.game.findOne('floor' + obj.floor);

    this.bounds = {
      min: this.floor.position.x,
      max: this.floor.position.x + this.floor.size.width
    };

    this.floor.walkers.add(obj);
  },

  onEnd: function() {
    this.floor.walkers.remove(this.actions.owner);
  },

  _getTarget: function(){
    var obj = this.actions.owner;
    var pos = obj.game.inputs.cursor.position;

    var target = new pac.Point(pos.x, obj.position.y);
    var w = obj.shape.size.width;
    var halfWidth = w/2;

    target.x -= halfWidth;

    if (target.x + w > this.bounds.max){
      target.x = this.bounds.max - w;
    }

    if (target.x < this.bounds.min){
      target.x = this.bounds.min;
    }

    return target;
  },

  update: function(dt) {
    var obj = this.actions.owner;

    if (this.floor.isClicked && obj.active){

      if (this.floor.walkers.length > 1){
        var walker = this.floor.getWalker(this._getTarget());

        if (obj.cid !== walker.cid){
          return;
        }
      }

      this.actions.removeAll(pac.actions.WalkTo);
      this.doOnNextTick = true;
      return;
    }

    if (this.doOnNextTick){
      this.doOnNextTick = false;

      this.insertBehindMe(new pac.actions.WalkTo({
        velocity: this.velocity,
        target: this._getTarget()
      }));
    }

  }

});