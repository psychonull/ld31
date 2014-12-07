module.exports = pac.Rectangle.extend({
  layer: 'modals',
  visibe: true,
  size: {
    width: 400,
    height: 200
  },
  fill: '#4f4f4f',
  content: 'Content',

  init: function(options){
    /*jshint maxcomplexity: 10*/
    this.layer = (options && options.layer) || this.layer;
    this.content = (options && options.content) || this.content;
    this.position.x = options.position.x - this.size.width;
    this.position.y = options.position.y;


    if(!options.titleObject && options.title){
      options.titleObject = new pac.Text({
        value: options.title,
        font: '20px lucaswhite',
        isBitmapText: true,
        wordWrap: 380,
        position: {
          x: 10,
          y: 10
        }
      });
    }

    if(!options.contentObject){
      options.contentObject = [new pac.Text({
        value: this.content,
        font: '12px lucaswhite',
        isBitmapText: true,
        wordWrap: 380,
        position: {
          x: 10,
          y: 50
        }
      }),
      new pac.Text({
        value: 'ArrayTest',
        font: '12px lucaswhite',
        isBitmapText: true,
        wordWrap: 380,
        position: {
          x: 10,
          y: 70
        }
      })
      ];
    }

    if(!options.contentFooter && options.footer){
        options.contentFooter = new pac.Text({
          value: options.footer,
          font: '6px lucaswhite',
          isBitmapText: true,
          wordWrap: 380,
          position: {
            x: 10,
            y: 180
          }
        });
    }

    if(options.titleObject)
      this.children.add(options.titleObject);
    
    this.children.add(options.contentObject);

    if(options.contentFooter)
      this.children.add(options.contentFooter);
  },

  update: function(){
  }

});