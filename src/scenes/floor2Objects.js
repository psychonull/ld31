
var actions = require('../actions');
var activables = require('./activables').floor2;
var animations = require('../animations/floor2');

module.exports = function(floor) {

  return [
    {
      name: 'Dude Bed',
      position: floor.position.add(new pac.Point(273, 74)),
      size: {
        width: 150,
        height: 150
      },
      frame: 'dude_bed',
      texture: 'dude_bed',

      frameHover: 'dude_bed_hover',

      animations: new pac.AnimationList(animations.bed, {
        default: 'bedOff',
        autoplay: false
      })
    }
  ];
};
