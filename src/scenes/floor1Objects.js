
var actions = require('../actions');
var activables = require('./activables').floor1;
var animations = require('../animations/floor1');

module.exports = function(floor) {

  return [{

    name: 'Little GrandMa',
    position: floor.position.add(new pac.Point(100, 30)),
    frame: 'idle1',
    texture: 'some_object',
    actions: [ new actions.Activable(activables.littleNana) ]

  }, {

    name: 'Old TV',
    position: floor.position.add(new pac.Point(488, 50)),
    size: {
      width: 65,
      height: 133
    },
    frame: 'tv',
    texture: 'granma_tv',

    frameHover: 'tv_hover',

    animations: new pac.AnimationList(animations.tv, {
      default: 'tvOff',
      autoplay: false
    }),

    actions: [ new actions.Activable(activables.tv) ]

  }];


};