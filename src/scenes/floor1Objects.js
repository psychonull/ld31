
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

  }, {

    name: 'Old Bed',
    position: floor.position.add(new pac.Point(273, 74)),
    size: {
      width: 111,
      height: 108
    },
    frame: 'cama',
    texture: 'granma_bed',

    frameHover: 'cama_hover',

    captionOffset: new pac.Point(20, 20),
    animations: new pac.AnimationList(animations.bed, {
      default: 'bedOff',
      autoplay: false
    }),

    actions: [ new actions.Activable(activables.bed) ]

  }, {

    name: 'Old kitchen',
    position: floor.position.add(new pac.Point(848, 79)),
    size: {
      width: 57,
      height: 105
    },
    frame: 'cocina',
    texture: 'granma_kitchen',

    frameHover: 'cocina_hover',

    captionOffset: new pac.Point(-20, 10),
    animations: new pac.AnimationList(animations.kitchen, {
      default: 'kitchenOff',
      autoplay: false
    }),

    actions: [ new actions.Activable(activables.kitchen) ]

  }];


};
