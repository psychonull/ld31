
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
      actions: [ new actions.Activable(activables.baby) ]
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
    }
  ];
};
