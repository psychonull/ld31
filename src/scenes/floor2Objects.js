
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
      captionOffset: new pac.Point(20, 25),

      animations: new pac.AnimationList(animations.bedDude, {
        default: 'dudeBedOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.bedDude) ]
    },
    {
      name: 'Dude Stereo',
      position: floor.position.add(new pac.Point(711, -17)),
      size: {
        width: 200,
        height: 200
      },
      floor: 2,
      frame: 'dude_stereo',
      texture: 'dude_stereo',

      frameHover: 'dude_stereo_hover',
      captionOffset: new pac.Point(15, 25),

      animations: new pac.AnimationList(animations.dudeStereo, {
        default: 'dudeStereoOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.dudeStereo) ]
    },
    {
      name: 'Dude Oven',
      position: floor.position.add(new pac.Point(271, 48)),
      size: {
        width: 70,
        height: 70
      },
      floor: 2,
      frame: 'dude_oven',
      texture: 'dude_oven',

      frameHover: 'dude_oven_hover',
      captionOffset: new pac.Point(0, 20),

      animations: new pac.AnimationList(animations.dudeOven, {
        default: 'dudeOvenOff',
        autoplay: false
      }),
      actions: [ new actions.Activable(activables.dudeOven) ]
    }
  ];
};
