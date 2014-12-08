
var actions = require('../actions');
var activables = require('./activables').floor3;
module.exports = function(floor, boy, girl){

  floor.onActivateObject = function(obj){
    //console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Family Bed':
        boy.visible = boy.active = false;
        girl.visible = girl.active = false;
        break;
      case 'Family Shower':
        var dudeWater = this.scene.findOne('Dude Water');
        boy.visible = false;
        dudeWater.visible = true;
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    //console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Family Bed':
        boy.visible = boy.active = true;
        girl.visible = girl.active = true;
        break;
      case 'Family Shower':
        var dudeWater = this.scene.findOne('Dude Water');
        boy.visible = true;
        dudeWater.visible = false;
        break;
      //case 'Baby':
        /*var delay = Math.round(Math.random() * 10);
        obj.actions.pushFront(new pac.actions.Delay(delay));
        obj.actions.pushFront(
          new pac.actions.Execute(function (dt, action) {
                    var command = new actions.Command(activables.baby.command);

                    this.actions.pushFront(command);
                    return true;
                  })
        );
        obj.actions.pushFront(new actions.Activable(activables.babySleep));*/
        //break;
      case 'Family Kitchen':
        var food = this.scene.findOne('Family Food');
        food.visible = food.active = true;
        break;
      case 'Family Food':
        obj.visible = obj.active = false;
        break;
    }
  };

};