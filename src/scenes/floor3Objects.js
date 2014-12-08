
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
    }
  ];
};
