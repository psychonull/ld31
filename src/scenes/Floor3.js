
var prefabs = require('../prefabs');

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

  require('./floor3Events')(floor);
};
