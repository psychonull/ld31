
var prefabs = require('../prefabs');

module.exports = function(bounds, scene){

  var floor = bounds.getFeet();

  var boy = new prefabs.FamilyBoy({
    floor: 3
  });

  var girl = new prefabs.FamilyGirl({
    floor: 3
  });

  var pos = boy.shape.getBounds().getFeet();

  boy.position = floor.subtract(pos);

  girl.position = floor.subtract(pos);
  girl.position.x += 150;

  scene.addObject(boy);
  scene.addObject(girl);

};
