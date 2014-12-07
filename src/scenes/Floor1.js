
var prefabs = require('../prefabs');
var actions = require('../actions');
var InteractiveObject = require('../prefabs/InteractiveObject.js');

module.exports = function(floor, scene){

  var floorFeet = floor.getFeet();

  var grandMa = new prefabs.GrandMa({
    floor: 1
  });

  var pos = grandMa.shape.getBounds().getFeet();
  grandMa.position = floorFeet.subtract(pos);

  scene.addObject(grandMa);

  var objects = require('./floor1Objects')(floor);
  objects.forEach(function(obj) {
    scene.addObject(new InteractiveObject(obj));
  });

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
