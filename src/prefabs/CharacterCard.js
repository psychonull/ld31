var _ = pac._;
var popUpContainer = require('./PopUpContainer.js');
module.exports = pac.Sprite.extend({

  texture: 'characterCard',

  layer: 'gui',
  size: {
    width: 135,
    height: 200
  },

  caption: 'N/A',
  barWidth: 120,

  mind: 1,
  body: 1,

  mentalDisaster: false,
  bodyProblems: false,
  mentalDisasterTextValue: 'WRECKED',
  bodyProblemsTextValue: 'BROKEN DOWN',

  disabled: false,

  popup: {
    title: '',
    content: '',
    footer: ''
  },

  init: function(options){

    this.caption = (options && options.caption) || this.caption;
    this.mind = (options && options.mind) || this.mind;
    this.body = (options && options.body) || this.body;
    this.popup = (options && options.popup) || this.popup;

    this.mentalDisasterTextValue =
      (options && options.mentalDisasterTextValue) ||
        this.mentalDisasterTextValue;
    this.bodyProblemsTextValue =
      (options && options.bodyProblemsTextValue) ||
        this.bodyProblemsTextValue;

    if(options.avatarFrame){
      this.avatar = new pac.Sprite({
        texture: 'characterCard',
        frame: options.avatarFrame,
        layer: 'gui',
        size: {
          width: 125,
          height: 80
        },
        position: {
          x: 5,
          y: 5
        }
      });
      this.children.add(this.avatar);
    }

    this.captionText = new pac.Text({
      value: this.caption,
      font: '12px lucaswhite',
      isBitmapText: true,
      wordWrap: 130,
      position: {
        x: 5,
        y: 90
      }
    });

    this.infoIcon = new pac.Sprite({
        texture: 'infoIcon',
        layer: 'gui',
        size: {
          width: 15,
          height: 15
        },
        actions: [new pac.actions.Clickable()],
        shape: new pac.Rectangle({
          size: {
          width: 15,
          height: 15
        } }),
        position: {
          x: 110,
          y: 90
        }
      });

    var mentalHealthText = new pac.Text({
      value: 'Mind',
      font: '8px lucaswhite',
      isBitmapText: true,
      wordWrap: 130,
      position: {
        x: 5,
        y: 120
      }
    }),
    physicalHealthText = new pac.Text({
      value: 'Body',
      font: '8px lucaswhite',
      isBitmapText: true,
      wordWrap: 130,
      position: {
        x: 5,
        y: 160
      }
    });
    this.mentalDisasterText = new pac.Text({
      value: this.mentalDisasterTextValue,
      font: '10px lucaswhite',
      isBitmapText: true,
      wordWrap: this.barWidth,
      position: {
        x: 7,
        y: 135
      },
      visible: false
    }),
    this.bodyProblemsText = new pac.Text({
      value: this.bodyProblemsTextValue,
      font: '10px lucaswhite',
      isBitmapText: true,
      wordWrap: this.barWidth,
      position: {
        x: 7,
        y: 175
      },
      visible: false
    });

    this.mindBar = new pac.Rectangle({
      size: {
        width: this.barWidth,
        height: 20
      },
      fill: '#00FF00',
      position: {
        x: 5,
        y: 133
      }
    });

    this.bodyBar = new pac.Rectangle({
      size: {
        width: this.barWidth,
        height: 20
      },
      fill: '#00FF00',
      position: {
        x: 5,
        y: 173
      }
    });

    /*this.infoIcon
    .on('click', function(){
      this.game.addObject(new popUp({
        layer:'modals',
        title:'test',
        content:'test content',
        footer:'test footer',
        actions: [new pac.actions.Clickable()],
        position:{x:this.position.x, y:this.position.y}
      }));
    });*/
    var that = this;
    this.infoIcon
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
      popUpCont.createModal(new pac.Point(this.position.x, this.position.y), {
        orientation: 'left',
        title:that.popup.title,
        content:that.popup.content,
        footer:that.popup.footer,
        size: {
          width: 400,
          height: 200
        }
      });

      popUpCont.on('click', function(){
        this.game
          .removeObject(popUpCont.popUpControl)
          .removeObject(popUpCont);

        popUpCont.removeAllListeners('click');
      });
    });

    this.disabledOverlay = new pac.Rectangle({
      size: _.clone(this.size),
      position: this.position.clone(),
      layer: 'overlay',
      fill: '#000000',
      alpha: 0.7,
      zIndex: 100,
      visible: false
    });

    //this.children.add(this.disabledOverlay);

    this.children.add(this.captionText);
    this.children.add(mentalHealthText);
    this.children.add(physicalHealthText);
    this.children.add(this.mindBar);
    this.children.add(this.bodyBar);
    this.children.add(this.mentalDisasterText);
    this.children.add(this.bodyProblemsText);
    this.children.add(this.infoIcon);


  },

  update: function(dt){

    if(this.mentalDisaster && this.bodyProblems){
      if(this.disabled){
        return;
      }
      else{
        this.disabledOverlay.visible = true;
        this.game.addObject(this.disabledOverlay);
        this.disabled = true;
      }
    }

    if(!this.mentalDisaster){
      this.mind = Math.min( Math.max(0, this.mind), 1);
      this.mindBar.size.width = this.mind * this.barWidth;
      if(this.mind === 0){
        this.mentalDisaster = true;
      }
    }
    else {
      this.mindBar.size.width = this.barWidth;
      this.mindBar.fill = '#FF0000';
      this.mentalDisasterText.visible = true;
    }

    if(!this.bodyProblems){
      this.body = Math.min( Math.max(0, this.body), 1);
      this.bodyBar.size.width = this.body * this.barWidth;
      if(this.body === 0){
        this.bodyProblems = true;
      }
    }
    else {
      this.bodyBar.size.width = this.barWidth;
      this.bodyBar.fill = '#FF0000';
      this.bodyProblemsText.visible = true;
    }

  }

});
