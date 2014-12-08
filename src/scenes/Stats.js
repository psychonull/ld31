function v(mind, body){
  return { mind: mind/1000, body: body/1000 };
}

module.exports = {
  floor1: {
    start: { mind: 1, body: 1 },
    living: v(-100, -5),

    env: {      
      familyTV: v(-1, 0),
      babyCry: v(-2, 0),
      dudeStereo: v(-10, -35),
      dudeShower: v(-75, -75)
    }
  },
  floor2: {
    start: { mind: 1, body: 1 },
    living: v(-3, -1),

    env: {
      garnmaTV: v(-2, -1.5),
      familyTV: v(-3, -1.5),
      babyCry: v(-3, -1.5)
    }
  },
  floor3: {
    start: { mind: 1, body: 1 },
    living: v(-1, -1),

    env: {
      garnmaTV: v(-1, -1),
      dudeTV: v(-3, -3),
      dudeStereo: v(-75, -75)
    }
  },

  livingTime: 1 //seconds
};
