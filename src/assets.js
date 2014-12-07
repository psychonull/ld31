
var fonts = {
  'lucas': {
    texture: 'assets/fonts/lucas/lucas.png',
    definition: 'assets/fonts/lucas/font.json',
    type: 'bitmapFont'
  },
  'lucaswhite': {
    texture: 'assets/fonts/lucaswhite/lucaswhite.png',
    definition: 'assets/fonts/lucaswhite/font.json',
    type: 'bitmapFont'
  }
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
    atlas: 'assets/img/chars/familyboy.json'
  },

  'familygirl': {
    path: 'assets/img/chars/familygirl.png',
    atlas: 'assets/img/chars/familygirl.json'
  },

  'characterCard': {
    path: 'assets/img/characterCards.png',
    atlas: 'assets/img/characterCards.json'
  },


  'infoIcon': {
    path: 'assets/img/info_icon.png'
  },

  'some_object': {
    path: 'assets/img/chars/grandma.png',
    atlas: 'assets/img/chars/grandma.json'
  },


  /* Vieja */
  'granma_tv': {
    path: 'assets/img/granma/granma_tv.png',
    atlas: 'assets/img/granma/granma_tv.json'
  }

};

module.exports = pac._.merge(fonts, textures);
