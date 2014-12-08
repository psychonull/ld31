
var actions = require('../actions');
var activables = require('./activables').floor3;
module.exports = function(floor, boy, girl){

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Family Bed':
        boy.visible = false;
        girl.visible = false;
        break;
      case 'Family Shower':
          boy.visible = false;
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Family Bed':
        boy.visible = true;
        girl.visible = true;
        break;
      case 'Family Shower':
        boy.visible = true;
        break;
      case 'Baby':
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
        break;
    }
  };

};