
module.exports = pac.Action.extend({

  name: 'Command',

  init: function(options) {
    /*jshint maxcomplexity:10 */

    options = options || {};

    this.env = options.env || {};
    this.state = options.state || {};
    this.animation = options.animation || null;

    this.duration = options.duration || 0;
    this.changeInterval = options.changeInterval || 0;

    this.interval = this.changeInterval; // to update the state first time
    this.elapsed = 0;
  },

  onStart: function() {
    var obj = this.actions.owner;
    this.floor = obj.game.findOne('floor' + obj.floor);

    if (this.animation){

      if (this.animateAction){
        this.actions._endAction(this.animateAction, true);
      }

      this.animateAction = new pac.actions.Animate(this.animation);
      this.actions.pushFront(this.animateAction);
    }

    pac._.forIn(this.env, function(coef, name){
      if (!obj.game.env[name]){
        obj.game.env[name] = 0;
      }

      obj.game.env[name] += coef;
    }, this);

    obj.isActivated = true;
    this.floor.onActivateObject(obj);
  },

  onEnd: function() {
    var obj = this.actions.owner;

    pac._.forIn(this.env, function(coef, name){
      obj.game.env[name] -= coef;

      if (!obj.game.env[name] || obj.game.env[name] < 0) {
        obj.game.env[name] = 0;
      }
    }, this);

    if (this.animateAction){
      this.actions._endAction(this.animateAction, true);
      this.animateAction = null;
      obj.animations._playDefault();
    }

    obj.isActivated = false;
    this.floor.onDeactivateObject(obj);
  },

  update: function(dt) {
    var obj = this.actions.owner;
    this.elapsed += dt;
    this.interval += dt;

    if(this.interval >= this.changeInterval){
      this.floor.stats.mind += this.state.mind || 0;
      this.floor.stats.body += this.state.body || 0;
      this.interval = 0;
    }

    if (this.duration !== true && this.elapsed >= this.duration){
      this.isFinished = true;
    }

  },

});