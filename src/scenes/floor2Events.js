var _ = pac._,
  actions = require('../actions');

module.exports = function(floor, dude){

  floor.onActivateObject = function(obj){
    //console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Dude Bed':
        dude.visible = dude.active = false;
        break;
      case 'Dude Shower':
        var oldWater = this.scene.findOne('Old Water');
        oldWater.visible = true;
        dude.visible = dude.active = false;
        break;
      case 'Dude Stereo':
        this.game.sounds.musicaDude.loop(true);
        this.game.sounds.musicaDude.play();
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    //console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Dude Bed':
        dude.visible = dude.active = true;
        break;
      case 'Dude Shower':
        var oldWater = this.scene.findOne('Old Water');
        oldWater.visible = false;
        dude.visible = dude.active = true;
        break;
      case 'Dude Stereo':
        this.game.sounds.musicaDude.stop();
        break;
      case 'Dude Oven':
        var food = this.scene.findOne('Dude Food');
        food.visible = food.active = true;
        break;
      case 'Dude Food':
        obj.active = obj.visible = dude.active = false;
        break;
    }
  };

  floor.onLostMind = function(){
    this.game.sounds.personaHablando1.play();
    var that = this;
    dude.actions.pushBack(new pac.actions.Speak({
      text: _.sample(['This place sucks.', 'STOOOOOPPP!!!!!']),
      duration: 1,
      isBlocking: true,
      minDuration: 1,
      after: function(){
        dude.actions.pushBack(new pac.actions.Speak({
          text: 'I just wanna leave this place.',
          duration: 2,
          isBlocking: true,
          minDuration: 2,
          after: function(){
            that.game.sounds.personaHablando1.stop();
          }
        }));
      }
    }));

    floor.actions.each(function(action){
      if (action instanceof actions.Living){
        action.lose.body *= 2;
      }
    });

  };

  floor.onLostBody = function(){
    console.log('granma lostBody');
  };

};
