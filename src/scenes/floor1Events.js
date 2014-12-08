
module.exports = function(floor, granMa){

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Old Bed':
        granMa.visible = false;
        break;
      case 'Old Shower':
        granMa.visible = false;
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Old Bed':
        granMa.visible = true;
        break;
      case 'Old Shower':
        granMa.visible = true;
        break;
      case 'Old kitchen':
        var food = this.scene.findOne('Grandma Food');
        food.visible = true;
        food.active = true;
        break;
      case 'Grandma Food':
        obj.visible = false;
        obj.active = false;
        break;
    }
  };

};