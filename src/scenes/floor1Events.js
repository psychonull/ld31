
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
    }
  };

};