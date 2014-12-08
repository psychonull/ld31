
module.exports = function(floor, dude){

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Dude Bed':
        dude.visible = false;
        break;
      case 'Dude Shower':
        var oldWater = this.scene.findOne('Old Water');
        oldWater.visible = true;
        dude.visible  = false;
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Dude Bed':
        dude.visible = true;
        break;
      case 'Dude Shower':
        var oldWater = this.scene.findOne('Old Water');
        oldWater.visible = false;
        dude.visible = true;
        break;
    }
  };

};