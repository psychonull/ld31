
var actions = require('../actions');
var activables = require('./activables').floor3;
module.exports = function(floor, boy, girl){

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);

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
    console.log('onDeactivateObject > ' + obj.name);

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
      case 'Baby':
        // Delay between 3 and 15 seconds
        var delay = Math.floor(Math.random() * 15) + 3;

        var activable;

        // get Current Activable Action
        obj.actions.each(function(action){
          if (action instanceof actions.Activable){
            activable = action;
            return false;
          }
        });

        // create an Execute Action to run a command after a Delay
        var execute = new pac.actions.Execute(function (dt, action) {

          var command = new actions.Command(
            pac._.clone(activables.baby.command, true));

          this.actions.removeAll(actions.Command);

          // Insert the command right after this action
          action.insertBehindMe(command);

          // Activate Hover and Click of the baby
          this.active = true;

          return true;
        });

        // Insert the Delay and the Execute Actions as
        // 1. Delay | 2. Execute | 3. Activable
        obj.actions
          .insertBefore(execute, activable)
          .insertBefore(new pac.actions.Delay(delay), execute);

        // Remove Hover and Click of the baby
        obj.active = false;

        break;
      case 'Family Kitchen':
        var food = this.scene.findOne('Family Food');
        food.visible = food.active = true;
        break;
      case 'Family Food':
        obj.visible = obj.active = false;
        break;
    }
  };

  floor.onLostMind = function(){
    console.log('granma lostMInd');
  };

  floor.onLostBody = function(){
    console.log('granma lostBody');
  };
};
