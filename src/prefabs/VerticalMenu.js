
var popUpContainer = require('./PopUpContainer.js');
module.exports = pac.Sprite.extend({
  layer: 'gui',
  size: {
    width: 100,
    height: 200
  },

  init: function(options){    
    this
    .on('click', function(){
      var popUpCont = new popUpContainer({
        zIndex: 1,
        layer:'modals',
       
        actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({ 
          size: {
          width: 1067,
          height: 600
        } }),
      });
      this.game.addObject(popUpCont);
      popUpCont.createModal(new pac.Point(options.position.x + (options.size.width * 3/2), options.position.y + options.size.height/2), { 
        contentObject: this.createMenuContent(options.menuOptions),
        size: {
          width: options.size.width,
          height: options.size.height
        }
      });

      popUpCont.on('click', function(){
        this.game
          .removeObject(popUpCont.popUpControl)
          .removeObject(popUpCont);

        popUpCont.removeAllListeners('click');
      });
    });
  },

  createMenuContent: function(menuOptions){
    var optionsArray = [];
    var paddingTop = 20;
    var scope = this;
    pac._.forEach(menuOptions, function(option){
      optionsArray.push(new pac.Text({
        value: option.text,
        font: '12px lucaswhite',
        isBitmapText: true,
        wordWrap: 150,
        //position: new pac.Point(scope.position.x, scope.position.y + paddingTop)
        position: new pac.Point(0, 0 + paddingTop)
        })
      );
      paddingTop += 20;
    });
    return optionsArray;
  },


  update: function(){
  }

});
