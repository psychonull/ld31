
var prefabs = require('../prefabs');

module.exports = function(bounds, scene){

  var floor = bounds.getFeet();

  var dude = new prefabs.Dude({
    floor: 2
  });

  var pos = dude.shape.getBounds().getFeet();
  dude.position = floor.subtract(pos);

  scene.addObject(dude);

};
