
var actions = require('../actions');
var activables = require('./activables').floor1;

module.exports = function(floor) {

  return [{

    name: 'Little GrandMa',
    position: floor.position.add(new pac.Point(100, 30)),
    frame: 'idle1',
    texture: 'some_object',
    actions: [ new actions.Activable(activables.littleNana) ]

  }];


};