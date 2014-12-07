
module.exports = pac.Action.extend({

  name: 'Living',

  init: function(lose, floorNbo, time) {
    this.lose = pac._.clone(lose);
    this.floorNbo = floorNbo;
    this.time = time;

    this.elapsed = 0;
  },

  onStart: function() { },

  onEnd: function() { },

  update: function(dt) {
    this.elapsed += dt;

    if(this.elapsed >= this.time){
      var obj = this.actions.owner;

      obj.stats.mind += this.lose.mind;
      obj.stats.body += this.lose.body;

      if (obj.stats.mind > 1) {
        obj.stats.mind = 1;
      }

      if (obj.stats.body > 1) {
        obj.stats.body = 1;
      }

      if (obj.stats.mind < 0) {
        obj.stats.mind = 0;
      }

      if (obj.stats.body < 0) {
        obj.stats.body = 0;
      }

      this.elapsed = 0;
    }
  },

});