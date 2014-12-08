
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
      case 'Grandma Broom':
        granMa.visible = false;
        obj.position = floor.position.add(new pac.Point(640, -20));
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
      case 'Grandma Broom':
        granMa.visible = true;
        obj.position = floor.position.add(new pac.Point(675, 22));
        break;
    }
  };

};