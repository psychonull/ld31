
var prefabs = require('../prefabs');

module.exports = function(bounds, scene){

  var floor = bounds.getFeet();

  var grandMa = new prefabs.GrandMa();
  grandMa.floor = 1;

  var pos = grandMa.shape.getBounds().getFeet();
  grandMa.position = floor.subtract(pos);

  scene.addObject(grandMa);

};
