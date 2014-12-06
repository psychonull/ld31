
var fonts = {

};

var textures = {
  'back_building': 'assets/img/back_building.png',

  'grandma': {
    path: 'assets/img/chars/grandma.png',
    atlas: 'assets/img/chars/grandma.json'
  },

  'dude': {
    path: 'assets/img/chars/dude.png',
    atlas: 'assets/img/chars/dude.json'
  },

  'familyboy': {
    path: 'assets/img/chars/familyboy.png',
    atlas: 'assets/img/chars/familyperson.json'
  },

  'familygirl': {
    path: 'assets/img/chars/familygirl.png',
    atlas: 'assets/img/chars/familyperson.json'
  },
};

module.exports = pac._.merge(fonts, textures);
