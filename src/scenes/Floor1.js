
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

  /*var wallDivision = new pac.Rectangle({
    zIndex : 1000,
    size: {
      width: 5,
      height: 183
    },
    fill: '#8b4513',
    position: {
      x: 247,
      //x: 240,
      y: 406
    }
  });

  var wallDivision2 = new pac.Rectangle({
    zIndex : 1000,
    size: {
      width: 5,
      height: 50
    },
    fill: '#8b4513',
    position: {
      x: 242,
      y: 406
    }
  });
  scene.addObject(wallDivision);
  scene.addObject(wallDivision2);*/
  scene.addObject(grandMa);

  var objects = require('./floor1Objects')(floor);
  objects.forEach(function(obj) {
    scene.addObject(new InteractiveObject(obj));
  });

  require('./floor1Events')(floor, grandMa);
};
