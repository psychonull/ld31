
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
    name: 'Little GrandMa',
    position: floor.position.add(new pac.Point(100, 30)),
    frame: 'idle1',
    texture: 'some_object',
    actions: [ new actions.Activable({
      command: {
        env: { music: 0.1, tv: 0.1 },
        state: { mind: -0.01, body: 0.05 },
        //animation: 'test',
        duration: 2, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    }) ]
  });

  scene.addObject(obj);


    var MenuObject = new DummyObject({
      position: floor.position.add(new pac.Point(200, 30)),
      frame: 'idle1',
      texture: 'some_object',
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

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);
  };

  floor.onDeactivateObject = function(obj){
    console.log('onDeactivateObject > ' + obj.name);
  };
};
