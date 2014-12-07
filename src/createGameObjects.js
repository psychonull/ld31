var CharacterCard = require('./prefabs/CharacterCard.js');

module.exports = function(){
  var familyCard = new CharacterCard({
    frame: 'family',
    caption: 'Family',
    avatarFrame: 'family_pic',
    position: {
      x: 932,
      y: 0
    }
  });
  var dudeCard = new CharacterCard({
    frame: 'dude',
    avatarFrame: 'dude_pic',
    caption: 'Richard McWeed',
    position: {
      x: 932,
      y: 200
    }
  });
  var granmaCard = new CharacterCard({
    frame: 'granma',
    avatarFrame: 'granma_pic',
    caption: 'Granma Dorothy',
    position: {
      x: 932,
      y: 400
    }
  });

  this.familyCard = familyCard;
  this.dudeCard = dudeCard;
  this.granmaCard = granmaCard;

  this.addObject([familyCard, dudeCard, granmaCard]);

  this.env = {
    tv: 0,
    babyCry: 0,
    cook: 0,
    videogame: 0,
    music: 0
  };

};
