
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
  },
  'granma_bed': {
    path: 'assets/img/granma/granma_bed.png',
    atlas: 'assets/img/granma/granma_bed.json'
  },
  'granma_kitchen': {
    path: 'assets/img/granma/granma_kitchen.png',
    atlas: 'assets/img/granma/granma_kitchen.json'
  },
  'granma_food': {
    path: 'assets/img/granma/granma_food.png',
    atlas: 'assets/img/granma/granma_food.json'
  },
  'grandma_shower': {
    path: 'assets/img/granma/grandma_shower.png',
    atlas: 'assets/img/granma/grandma_shower.json'
  },
  'grandma_water': {
    path: 'assets/img/water.png',
    atlas: 'assets/img/water.json'
  },
  'grandma_broom': {
    path: 'assets/img/granma/grandma_broom.png',
    atlas: 'assets/img/granma/grandma_broom.json'
  },

  //Dude
  'dude_bed': {
    path: 'assets/img/dude/dude_bed.png',
    atlas: 'assets/img/dude/dude_bed.json'
  },
  'dude_stereo': {
    path: 'assets/img/dude/dude_stereo.png',
    atlas: 'assets/img/dude/dude_stereo.json'
  },
  'dude_oven': {
    path: 'assets/img/dude/dude_oven.png',
    atlas: 'assets/img/dude/dude_oven.json'
  },
  'dude_food': {
    path: 'assets/img/dude/dude_food.png',
    atlas: 'assets/img/dude/dude_food.json'
  },
  'dude_shower': {
    path: 'assets/img/dude/dude_shower.png',
    atlas: 'assets/img/dude/dude_shower.json'
  },
  'dude_water': {
    path: 'assets/img/water.png',
    atlas: 'assets/img/water.json'
  },

  //family
  'family_bed': {
    path: 'assets/img/family/family_bed.png',
    atlas: 'assets/img/family/family_bed.json'
  },
  'baby': {
    path: 'assets/img/family/baby.png',
    atlas: 'assets/img/family/baby.json'
  },
  'family_kitchen': {
    path: 'assets/img/family/family_kitchen.png',
    atlas: 'assets/img/family/family_kitchen.json'
  },
  'family_shower': {
    path: 'assets/img/family/family_shower.png',
    atlas: 'assets/img/family/family_shower.json'
  },
  'family_food': {
    path: 'assets/img/family/family_food.png',
    atlas: 'assets/img/family/family_food.json'
  }

};

module.exports = pac._.merge(fonts, textures);
