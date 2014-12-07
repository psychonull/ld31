module.exports = pac.Rectangle.extend({
  layer: 'modals',
  visibe: true,
  size: {
    width: 400,
    height: 200
  },
  fill: '#4f4f4f',
  title: 'N/A',
  content: 'Content',
  footer: 'Footer',

  init: function(options){
    /*jshint maxcomplexity: 10*/
    this.layer = (options && options.layer) || this.layer;
    this.title = (options && options.title) || this.title;
    this.content = (options && options.content) || this.content;
    this.footer = (options && options.footer) || this.footer;
    this.position.x = options.position.x - this.size.width;
    this.position.y = options.position.y;


    if(!options.titleOject){
      this.titleOject = new pac.Text({
        value: this.title,
        font: '20px lucaswhite',
        isBitmapText: true,
        wordWrap: 380,
        position: {
          x: 10,
          y: 10
        }
      });
    }

    if(!options.contentOject){
        this.contentOject = new pac.Text({
          value: this.content,
          font: '12px lucaswhite',
          isBitmapText: true,
          wordWrap: 380,
          position: {
            x: 10,
            y: 50
          }
        });
    }

    if(!options.contentFooter){
        this.contentFooter = new pac.Text({
          value: this.footer,
          font: '6px lucaswhite',
          isBitmapText: true,
          wordWrap: 380,
          position: {
            x: 10,
            y: 180
          }
        });
    }

    this.children.add(this.titleOject);
    this.children.add(this.contentOject);
    this.children.add(this.contentFooter);
  },

  update: function(){
  }

});