
var prefabs = require('../prefabs');
var actions = require('../actions');
var InteractiveObject = require('../prefabs/InteractiveObject.js');

module.exports = function(floor, scene){

  var floorFeet = floor.getFeet();

  var boy = new prefabs.FamilyBoy({
    floor: 3
  });

  var girl = new prefabs.FamilyGirl({
    floor: 3
  });

  var pos = boy.shape.getBounds().getFeet();
  boy.position = floorFeet.subtract(pos);

  girl.position = floorFeet.subtract(pos);
  girl.position.x += 150;

  scene.addObject(boy);
  scene.addObject(girl);

  var objects = require('./floor3Objects')(floor);
  objects.forEach(function(obj) {
    scene.addObject(new InteractiveObject(obj));
  });

  require('./floor3Events')(floor, boy, girl);
};
