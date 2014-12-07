
var popUpContainer = require('./PopUpContainer.js');
var activable = require('../actions/Activable.js');
module.exports = pac.GameObject.extend({
  layer: 'gui',
  visible: false,
  size: {
    width: 100,
    height: 200
  },
  optionsArray: [],
  init: function(options){    
  },

  createMenu: function(options){
    var popUpCont = new popUpContainer({
        zIndex: 1,
        layer:'modals'
        /*actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({ 
          size: {
          width: 1067,
          height: 600
        } }),*/
    });
    this.game.addObject(popUpCont);
    this.optionsArray = this.createMenuContent(options.menuOptions);
    popUpCont.createModalMenu(new pac.Point(options.position.x , options.position.y), { 
      contentObject: this.optionsArray,//this.createMenuContent(options.menuOptions),
      size: {
        width: options.size.width,
        height: options.size.height
      }
    });

    /*popUpCont.on('click', function(){
      this.game
        .removeObject(popUpCont.popUpControl)
        .removeObject(popUpCont);

      popUpCont.removeAllListeners('click');
    });*/
  },

  createMenuContent: function(menuOptions){
    var optionsArray = [];
    var paddingTop = 20;

    function onClicked(i){
      console.log(this.selected);
      console.log(this.selected);
      this.selected = this.optionsArray[i].value;
    }


    for(var i = 0; i < this.optionsArray.length; i++){
      var text = new pac.Text({
      value: this.optionsArray[i].text,
      font: '12px lucaswhite',
      isBitmapText: true,
      wordWrap: 150,
      actions: [new pac.actions.Clickable()],
      shape: new pac.Rectangle({size: {width: 100, height:20 }, fill: '#4f4f4f', visible:true}),
      position: new pac.Point(0, 0 + paddingTop)
      });

      text.on('click', onClicked.bind(this, i));

      this.optionsArray[i].push(text);
      paddingTop += 50;
    }
    /*pac._.forEach(menuOptions, function(option){
      var scope = this;
      var text = new pac.Text({
        value: option.text,
        font: '12px lucaswhite',
        isBitmapText: true,
        wordWrap: 150,
        actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({size: {width: 100, height:20 }, fill: '#4f4f4f', visible:true}),
        position: new pac.Point(0, 0 + paddingTop)
        });
      text.on('click', function(){
        console.log(scope.selected);
        console.log(scope.selected);
        scope.selected = this.value;
      });
      optionsArray.push(text);
      paddingTop += 50;
    }, this);*/
    return optionsArray;
  },


  update: function(){
    /*if(this.optionsArray){
      for(var i = 0; i < this.optionsArray.length; i++){
        if(this.optionsArray[i].isClicked){
        console.log(this.optionsArray[i].value);
        this.selected = this.optionsArray[i].value;
        }
      }
    }
    /*pac._.forEach(this.optionsArray, function(option){
      if(option.isClicked){
        console.log(option.value);
        this.selected = option.value;
      }
    }, this);*/
  },

  menuOptionSelected: function(){
    return this.selected;
  }

});
