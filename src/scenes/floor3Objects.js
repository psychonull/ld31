
var actions = require('../actions');
var activables = require('./activables').floor3;
var animations = require('../animations/floor3');

module.exports = function(floor) {

  return [
    {
      name: 'Family Bed',
      position: floor.position.add(new pac.Point(245, 73)),
      size: {
        width: 110,
        height: 110
      },
      floor: 3,
      frame: 'family_bed',
      texture: 'family_bed',

      frameHover: 'family_bed_hover',

      animations: new pac.AnimationList(animations.bedFamily, {
        default: 'familyBedOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.bedFamily) ]
    },
    {
      name: 'Baby',
      position: floor.position.add(new pac.Point(355, 73)),
      size: {
        width: 110,
        height: 110
      },
      floor: 3,
      frame: 'baby',
      texture: 'baby',

      frameHover: 'baby_hover',

      animations: new pac.AnimationList(animations.baby, {
        default: 'babyOff',
        autoplay: false
      }),

      actions: [
        // Delay between 8 and 15 seconds
        new pac.actions.Delay(Math.floor(Math.random() * 15) + 8),
        new pac.actions.Execute(function (dt, action) {
          var command = new actions.Command(
            pac._.clone(activables.baby.command, true));

          this.actions
            .removeAll(actions.Command)
            .pushFront(command)
            .pushBack(new actions.Activable(
              pac._.clone(activables.babySleep, true)
            ));

          return true;
        }),
      ]
    },
    {
      name: 'Family Kitchen',
      position: floor.position.add(new pac.Point(615, 73)),
      size: {
        width: 57,
        height: 105
      },
      floor: 3,
      frame: 'family_kitchen',
      texture: 'family_kitchen',

      frameHover: 'family_kitchen_hover',

      animations: new pac.AnimationList(animations.familyKitchen, {
        default: 'familyKitchenOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.familyKitchen) ]
    },
    {
      name: 'Family Shower',
      position: floor.position.add(new pac.Point(-7, 7)),
      size: {
        width: 100,
        height: 175
      },
      floor: 3,
      frame: 'family_shower',
      texture: 'family_shower',

      frameHover: 'family_shower_hover',

      animations: new pac.AnimationList(animations.familyShower, {
        default: 'familyShowerOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.familyShower) ]
    },

    {
    name: 'Family Food',
    position: floor.position.add(new pac.Point(500, 110)),
    size: {
      width: 34,
      height: 19
    },
    frame: 'familyFood',
    texture: 'family_food',

    visible: false,
    active: false,
    floor: 3,
    frameHover: 'familyFood_hover',
    caption: ['Eat food'],

    captionOffset: new pac.Point(-20, -20),

    actions: [ new actions.Activable(activables.familyFood) ]
    }

  ];
};
