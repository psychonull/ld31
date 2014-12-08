var _ = pac._;

module.exports = function(game){

  return function(messages, score){

    var floors = [
      game.scenes.current.findOne('floor3'),
      game.scenes.current.findOne('floor2'),
      game.scenes.current.findOne('floor1')
    ];
    var firstText, secondText, scoreText, resetBtn;

    _.forEach(floors, function(floor, index){
      if(floor.disabled){
        if(!firstText){
          firstText = new pac.Text({
            value: messages[0],
            font: '42px lucaswhite',
            isBitmapText: true,
            wordWrap: floor.size.width - 50,
            position: floor.position.add(30, 20),
            layer: 'overlay'
          });
        }
        else {
          secondText = new pac.Text({
            value: messages[1],
            font: '42px lucaswhite',
            isBitmapText: true,
            wordWrap: floor.size.width - 50,
            position: floor.position.add(70, 20),
            layer: 'overlay'
          });

          scoreText = new pac.Text({
            value: (messages[2] || 'You lasted ') + score + 's',
            font: '28px lucaswhite',
            isBitmapText: true,
            wordWrap: floor.size.width - 50,
            position: floor.position.add(70, 150),
            tint: 0x33AAFF,
            layer: 'overlay'
          });
          resetBtn = new pac.Text({
            value: 'Try again.',
            font: '28px lucaswhite',
            isBitmapText: true,
            layer: 'overlay',
            wordWrap: floor.size.width - 50,
            position: floor.position.add(600, 150),
            tint: 0x1166AA,
            shape: new pac.Rectangle({
              position: floor.position.add(600, 100),
              size: {
                width: 100,
                height: 20
              }
            }),
            actions: [new pac.actions.Hoverable(), new pac.actions.Clickable()]
          });
          resetBtn
          .on('hover:in', function(){
            this.tint = 0xF1F1F1;
          })
          .on('hover:out', function(){
            this.tint = 0x1166AA;
          })
          .on('click', function(){
            window.alert('peton');
          });
        }
      }
    });


    game.addObject(firstText);
    game.addObject(secondText);
    game.addObject(scoreText);
    game.addObject(resetBtn);

  };

};
