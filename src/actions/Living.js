
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

      obj.stats.mind = obj.stats.mind > 1 ? 1 : obj.stats.mind;
      obj.stats.mind = obj.stats.mind < 0 ? 0 : obj.stats.mind;

      obj.stats.body = obj.stats.body > 1 ? 1 : obj.stats.body;
      obj.stats.body = obj.stats.body < 0 ? 0 : obj.stats.body;

      this.elapsed = 0;
    }
  },

});