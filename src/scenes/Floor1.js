
var prefabs = require('../prefabs');
var actions = require('../actions');
var InteractiveObject = require('../prefabs/InteractiveObject.js');
var animations = require('../animations/floor1/index.js');
var activables = require('./activables.js').floor1;

module.exports = function(floor, scene){

  var floorFeet = floor.getFeet();

  var grandMa = new prefabs.GrandMa({
    floor: 1
  });

  var pos = grandMa.shape.getBounds().getFeet();
  grandMa.position = floorFeet.subtract(pos);

  scene.addObject(grandMa);



  //// tessssst

  /* Remove with the ObjectPrefab  */
  var DummyObject = pac.Sprite.extend({
    layer: 'objects',
    zIndex: 50,

    shape: true,

    size: {
      width: 50,
      height: 50
    },

    floor: 1,
  });

  var objects = require('./floor1Objects')(floor);
  objects.forEach(function(obj) {
    scene.addObject(new DummyObject(obj));
  });

  var tv = new InteractiveObject({
    name: 'Old TV',
    size: {
      width: 65,
      height: 133
    },
    position: new pac.Point(488 + 11, 60 + 188 * 2 + 10*3),
    texture: 'granma_tv',
    frame: 'tv',
    animationHover: 'tvHover',
    animations: new pac.AnimationList(animations.tv, {
      default: 'tvOff',
      autoplay: false
    }),
    actions: [ new actions.Activable(activables.tv) ]
  });

  scene.addObject(tv);

  var MenuObject = new prefabs.VerticalMenu({menuOptions: [{text: 'funciona'}, {text: 'bien'}],
    position: new pac.Point(200, 30),
    frame: 'idle1',
    texture: 'some_object',
    shape: new pac.Rectangle(),
    actions: [ new actions.MenuCommander({
      menuOptions: [{text: 'funciona'}, {text: 'bien'}],
      position: floor.position.add(new pac.Point(200, 30)),
      size: {
        width: 100,
        height: 100
      },
      floor: 2
      })
    ]
  });

  scene.addObject(MenuObject);

  require('./floor1Events')(floor);
};
