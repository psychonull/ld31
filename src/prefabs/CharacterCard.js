
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

  init: function(options){

    this.caption = (options && options.caption) || this.caption;
    this.mind = (options && options.mind) || this.mind;
    this.body = (options && options.body) || this.body;

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

    this.children.add(this.captionText);
    this.children.add(mentalHealthText);
    this.children.add(physicalHealthText);
    this.children.add(this.mindBar);
    this.children.add(this.bodyBar);


  },

  update: function(dt){
    this.mind = Math.min( Math.max(0, this.mind), 1);
    this.body = Math.min( Math.max(0, this.body), 1);
    this.mindBar.size.width = this.mind * this.barWidth;
    this.bodyBar.size.width = this.body * this.barWidth;
  }

});
