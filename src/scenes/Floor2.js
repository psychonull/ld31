
var prefabs = require('../prefabs');

module.exports = function(floor, scene){

  var floorFeet = floor.getFeet();

  var dude = new prefabs.Dude({
    floor: 2
  });

  var pos = dude.shape.getBounds().getFeet();
  dude.position = floorFeet.subtract(pos);

  scene.addObject(dude);

  require('./floor2Events')(floor);
};
