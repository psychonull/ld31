
module.exports = function(floor, dude){

  floor.onActivateObject = function(obj){
    //console.log('onActivateObject > ' + obj.name);

    switch(obj.name){
      case 'Dude Bed':
        dude.visible = dude.active = false;
        break;
      case 'Dude Shower':
        var oldWater = this.scene.findOne('Old Water');
        oldWater.visible = true;
        dude.visible = dude.active = false;
        break;
      case 'Dude Stereo':
        this.game.sounds.musicaDude.loop(true);        
        this.game.sounds.musicaDude.play();
        this.game.sounds.musicaDude.volume(0.1);
        break;
    }
  };

  floor.onDeactivateObject = function(obj){
    //console.log('onDeactivateObject > ' + obj.name);

    switch(obj.name){
      case 'Dude Bed':
        dude.visible = dude.active = true;
        break;
      case 'Dude Shower':
        var oldWater = this.scene.findOne('Old Water');
        oldWater.visible = false;
        dude.visible = dude.active = true;
        break;
      case 'Dude Stereo':
        this.game.sounds.musicaDude.stop();
        break;
      case 'Dude Oven':
        var food = this.scene.findOne('Dude Food');
        food.visible = food.active = true;
        break;
      case 'Dude Food':
        obj.active = obj.visible = dude.active = false;
        break;
    }
  };

};