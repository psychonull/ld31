var _ = pac._;
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
        floor.getWalker(obj.position).visible = false;
        dudeWater.visible = true;
        break;
      case 'Baby':
        this.game.sounds.babyCrying.loop(true);
        this.game.sounds.babyCrying.play();
        this.game.sounds.babyCrying.volume(0.1);
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
        floor.getWalker(obj.position).visible = true;
        dudeWater.visible = false;
        break;
      case 'Baby':
        // Delay between 3 and 15 seconds
        this.game.sounds.babyCrying.stop();
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
    var say = function(c, t, d, a){
      return function(){
        c.actions.pushBack(new pac.actions.Speak({
          text: _.sample(t),
          duration: d,
          isBlocking: true,
          minDuration: d,
          after: a
        }));
      };
    };

    var isBoy = _.random(0,1);


    say(isBoy ? boy : girl, ['We should break up.', 'I\'M DONE. I\'m leaving'], 2,
      say(!isBoy ? boy : girl, ['ITS ALL YOUR FAULT', 'Let\'s do this for the kids'], 1.5,
        say(isBoy ? boy : girl, ['yeah sure.'], 1, function(){
          floor.walkers.remove(isBoy ? boy : girl);
          floor.scene.removeObject(isBoy ? boy : girl);
        })
      )
    )();


  };

  floor.onLostBody = function(){
    var say = function(c, t, d, a){
      return function(){
        c.actions.pushBack(new pac.actions.Speak({
          text: _.sample(t),
          duration: d,
          isBlocking: true,
          minDuration: d,
          after: a
        }));
      };
    };

    say(girl, ['We are a complete disaster as parents.'], 2,
      say(boy, ['Don\'t say that. This apartment is a complete disaster'], 2,
        function(){
          floor.actions.each(function(action){
            if (action instanceof actions.Living){
              action.lose.mind *= 5;
            }
          });
        }
      )
    )();

  };
};
