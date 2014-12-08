var CharacterCard = require('./prefabs/CharacterCard.js');
var _ = pac._;

module.exports = function(){

  this.env = { };

  var familyCard = new CharacterCard({
    frame: 'family',
    caption: 'Family',
    avatarFrame: 'family_pic',
    position: {
      x: 932,
      y: 0
    },
    popup: {
      title: 'Family',
      content: 'They like to chill, thought order and homeworks come first.\n Lil guy is growing up and demanding tons of love.',
      footer: ''
    },
    mentalDisasterTextValue: _.sample([
      'EXHAUSTED'
    ]),
    bodyProblemsTextValue: _.sample([
      'EXHAUSTED'
    ])
  });
  var dudeCard = new CharacterCard({
    frame: 'dude',
    avatarFrame: 'dude_pic',
    caption: 'Richard McWeed',
    position: {
      x: 932,
      y: 200
    },
    popup: {
      title: 'Richard McWeed',
      content: 'He is in a constant search of fun and the meaning of the life, withouth worrying too much.',
      footer: ''
    },
    mentalDisasterTextValue: _.sample([
      'FRIED'
    ]),
    bodyProblemsTextValue: _.sample([
      'UNHEALTHY'
    ])
  });
  var granmaCard = new CharacterCard({
    frame: 'granma',
    avatarFrame: 'granma_pic',
    caption: 'Granma Dorothy',
    position: {
      x: 932,
      y: 400
    },
    popup: {
      title: 'Granma Dorothy',
      content: 'She is an aged conservative girl who likes to keep things in perfect order. She is cool after all, but...',
      footer: ''
    },
    mentalDisasterTextValue: _.sample([
      'INSANE'
    ]),
    bodyProblemsTextValue: _.sample([
      'WRECKED'
    ])
  });

  this.familyCard = familyCard;
  this.dudeCard = dudeCard;
  this.granmaCard = granmaCard;

  this.addObject([familyCard, dudeCard, granmaCard]);
};
