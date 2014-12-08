
module.exports = function(floor, boy, girl){

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Family Bed':
        boy.visible = false;
        girl.visible = false;
        break;
      case 'Family Shower':
        var random = Math.round(Math.random() * 10);
        console.log(random);
        if(random < 5)
          boy.visible = false;
        else
          girl.visible = false;
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Family Bed':
        boy.visible = true;
        girl.visible = true;
        break;
      case 'Family Shower':
        boy.visible = true;
        girl.visible = true;
        break;
    }
  };

};