
module.exports = pac.Action.extend({

  name: 'Living',

  init: function(lose, time) {
    this.lose = pac._.clone(lose);
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

      var gameEnv = obj.game.env;

      pac._.forIn(obj.env, function(value, key){
        obj.stats.mind += value.mind * (gameEnv[key] || 0);
        obj.stats.body += value.body * (gameEnv[key] || 0);
      });

      obj.stats.mind = obj.stats.mind > 1 ? 1 : obj.stats.mind;
      obj.stats.mind = obj.stats.mind < 0 ? 0 : obj.stats.mind;

      obj.stats.body = obj.stats.body > 1 ? 1 : obj.stats.body;
      obj.stats.body = obj.stats.body < 0 ? 0 : obj.stats.body;

      this.elapsed = 0;
    }
  },

});