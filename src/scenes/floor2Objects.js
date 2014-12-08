
var actions = require('../actions');
var activables = require('./activables').floor2;
var animations = require('../animations/floor2');

module.exports = function(floor) {
  
  return [
    {
      name: 'Dude Bed',
      position: floor.position.add(new pac.Point(522, 34)),
      size: {
        width: 150,
        height: 150
      },
      floor: 2,
      frame: 'dude_bed',
      texture: 'dude_bed',

      frameHover: 'dude_bed_hover',

      animations: new pac.AnimationList(animations.bedDude, {
        default: 'dudeBedOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.bedDude) ]
    }
  ];
};
