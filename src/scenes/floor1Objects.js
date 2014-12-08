
var actions = require('../actions');
var activables = require('./activables').floor1;
var animations = require('../animations/floor1');
var water = require('../animations');
module.exports = function(floor) {

  return [{
    name: 'Old TV',
    position: floor.position.add(new pac.Point(488, 50)),
    size: {
      width: 65,
      height: 133
    },
    frame: 'tv',
    texture: 'granma_tv',

    frameHover: 'tv_hover',
    caption: ['Turn ON old TV', 'Turn OFF old TV'],
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
    caption: ['Sleep in old bed', 'Wake up'],
    captionOffset: new pac.Point(20, 20),
    animations: new pac.AnimationList(animations.bed, {
      default: 'bedOff',
      autoplay: false
    }),

    actions: [ new actions.Activable(activables.bed) ]

  }, 

  {
    name: 'Old Shower',
    position: floor.position.add(new pac.Point(-2, 74)),
    size: {
      width: 111,
      height: 108
    },
    frame: 'grandma_shower',
    texture: 'grandma_shower',

    frameHover: 'grandma_shower_hover',
    caption: ['Take a shower', 'Take a shower'],
    captionOffset: new pac.Point(20, 20),
    animations: new pac.AnimationList(animations.grandmaShower, {
      default: 'grandmaShowerOff',
      autoplay: false
    }),

    actions: [ new actions.Activable(activables.grandmaShower) ]

  },

  {
    name: 'Old kitchen',
    position: floor.position.add(new pac.Point(848, 79)),
    size: {
      width: 57,
      height: 105
    },
    frame: 'cocina',
    texture: 'granma_kitchen',

    frameHover: 'cocina_hover',
    caption: ['Cook', ''],

    captionOffset: new pac.Point(-20, 10),
    animations: new pac.AnimationList(animations.kitchen, {
      default: 'kitchenOff',
      autoplay: false
    }),

    actions: [ new actions.Activable(activables.kitchen) ]
  },

  {
    name: 'Old Water',
    position: floor.position.add(new pac.Point(5, 0)),
    visible: false,
    size: {
      width: 200,
      height: 200
    },
    floor: 1,
    frame: 'water_on_0',
    texture: 'dude_water',
    animations: new pac.AnimationList(water.Water, {
      default: 'waterOn',
      autoplay: true
    })
  }, 

  {
    name: 'Grandma Food',
    position: floor.position.add(new pac.Point(802, 122)),
    size: {
      width: 34,
      height: 19
    },
    frame: 'granmaFood',
    texture: 'granma_food',

    visible: false,
    active: false,

    frameHover: 'granmaFood_hover',
    caption: ['Eat food'],

    captionOffset: new pac.Point(-20, -20),    

    actions: [ new actions.Activable(activables.grandmaFood) ]

  }];

};
