
var prefabs = require('../prefabs');
var actions = require('../actions');

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

  var MenuObject = new prefabs.VerticalMenu({menuOptions: [{text: 'funciona'}, {text: 'bien'}],
    position: new pac.Point(200, 30),
    frame: 'idle1',
    texture: 'some_object',
    actions: [new pac.actions.Clickable()],
    shape: new pac.Rectangle({
          size: {
          width: 100,
          height: 100
        } }),
    size: {
      width: 100,
      height: 100
    },
    floor: 1
  });

  scene.addObject(MenuObject);

  require('./floor1Events')(floor);
};
