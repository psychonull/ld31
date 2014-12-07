var popUp = require('./PopUp.js');
module.exports = pac.Rectangle.extend({
  layer: 'modals',
  visibe: false,
  position:{
    x: 0,
    y: 0
  },
  size: {
    width: 1067,
    height: 600
  },
  zIndex: 1,

  update: function(){
  },

  createModal: function(pos, options){
    this.popUpControl = new popUp({
        layer:'modals',
        zIndex: 1000,
        title: options.title, 
        content: options.content, 
        footer: options.footer,
        actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({ 
          size: {
          width: 400,
          height: 200
        } }),
        position: pos
      });
    
    this.game.addObject(this.popUpControl);
  }

});