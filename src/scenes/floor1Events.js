
module.exports = function(floor, granMa){

  floor.onActivateObject = function(obj){
    //console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Old Bed':
        granMa.visible = granMa.active = false;
        break;
      case 'Old Shower':
        granMa.visible = granMa.active = false;
        break;
      case 'Grandma Broom':
        granMa.visible = granMa.active = obj.active = false;
        obj.position = floor.position.add(new pac.Point(640, -20));
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    //console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Old Bed':
        granMa.visible = granMa.active = true;
        break;
      case 'Old Shower':
        granMa.visible = granMa.active = true;
        break;
      case 'Grandma Broom':
        obj.position = floor.position.add(new pac.Point(675, 22));
        granMa.visible = granMa.active = obj.active = true;
        break;
      case 'Old kitchen':
        var food = this.scene.findOne('Grandma Food');
        food.visible = granMa.active = true;
        break;
      case 'Grandma Food':
        obj.visible = granMa.active = false;
        break;
    }
  };

};