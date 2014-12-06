
var floorSize = { width: 908, height: 183 };

module.exports = function(){

  return pac.Rectangle.extend({

    layer: 'background',
    zIndex: 0,

    shape: new pac.Rectangle({ size: pac._.clone(floorSize) }),
    size: pac._.clone(floorSize),

    actions: [ new pac.actions.Clickable() ]

  });

};
