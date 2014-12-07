
module.exports = function(floor){

  floor.onActivateObject = function(obj){
    console.log('onActivateObject > ' + obj.name);
  };

  floor.onDeactivateObject = function(obj){
    console.log('onDeactivateObject > ' + obj.name);
  };

};