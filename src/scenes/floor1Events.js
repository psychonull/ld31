var actions = require('../actions');
var _ = pac._;

module.exports = function(floor, granMa){

  floor.onActivateObject = function(obj){
    //console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Old Bed':
        granMa.visible = granMa.active = false;
        break;
      case 'Old Shower':
        granMa.visible = granMa.active = false;
        break;
      case 'Grandma Broom':
        granMa.visible = granMa.active = obj.active = false;
        obj.position = floor.position.add(new pac.Point(640, -20));
        this.game.sounds.personaHablando1.loop(true);
        this.game.sounds.golpeTecho1.loop(true);
        this.game.sounds.golpeTecho1.play();
        this.game.sounds.personaHablando1.play();
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    //console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Old Bed':
        granMa.visible = granMa.active = true;
        break;
      case 'Old Shower':
        granMa.visible = granMa.active = true;
        break;
      case 'Grandma Broom':
        obj.position = floor.position.add(new pac.Point(675, 22));
        granMa.visible = granMa.active = obj.active = true;
        this.game.sounds.golpeTecho1.stop();
        this.game.sounds.personaHablando1.stop();
        break;
      case 'Old kitchen':
        var food = this.scene.findOne('Grandma Food');
        food.visible = food.active = true;
        break;
      case 'Grandma Food':
        obj.visible = obj.active = false;
        break;
    }
  };

  floor.onLostMind = function(){
    this.game.sounds.viejaHablando.play();

    granMa.actions.pushBack(new pac.actions.Speak({
      text: _.sample(['I\'m not crazy!', 'I cannot deal with this anymore']),
      duration: 2,
      isBlocking: true,
      minDuration: 2,
      after: function(){
        granMa.actions.pushBack(new pac.actions.Speak({
          text: 'AAAAAaaaaaAAAAa!!!',
          duration: 1,
          isBlocking: true,
          minDuration: 1
        }));
      }
    }));
    floor.actions.each(function(action){
      if (action instanceof actions.Living){
        action.lose.body *= 4;
      }
    });

  };

  floor.onLostBody = function(){
    console.log('granma lostBody');
  };

};
