
var prefabs = require('../prefabs');
var actions = require('../actions');
var InteractiveObject = require('../prefabs/InteractiveObject.js');

module.exports = function(floor, scene){

  var floorFeet = floor.getFeet();

  var dude = new prefabs.Dude({
    floor: 2
  });

  var pos = dude.shape.getBounds().getFeet();
  dude.position = floorFeet.subtract(pos);

  scene.addObject(dude);

  var objects = require('./floor2Objects')(floor);
  objects.forEach(function(obj) {
    scene.addObject(new InteractiveObject(obj));
  });

  require('./floor2Events')(floor, dude);
};
