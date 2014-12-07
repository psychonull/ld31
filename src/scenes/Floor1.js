
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

  var obj = new DummyObject({
    position: floor.position.add(new pac.Point(100, 30)),
    frame: 'idle1',
    texture: 'some_object',
    actions: [ new actions.WalkableObject({ nearness: 50 }) ]
  });

  scene.addObject(obj);

};
