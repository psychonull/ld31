function v(mind, body){
  return { mind: mind/1000, body: body/1000 };
}

module.exports = {
  floor1: {
    start: { mind: 1, body: 1 },
    living: v(-2, -5),

    env: {
      familyTV: v(0, -1),
      babyCry: v(-3, -1.5),
      dudeStereo: v(-120, -35),
      dudeShower: v(-75, -75)
    }
  },
  floor2: {
    start: { mind: 1, body: 1 },
    living: v(-1, -5),

    env: {
      garnmaTV: v(-2, -1.5),
      familyTV: v(-3, -1.5),
      babyCry: v(-3, -1.5)
    }
  },
  floor3: {
    start: { mind: 1, body: 1 },
    living: v(-500, -1.5),

    env: {
      garnmaTV: v(-1, -1),
      dudeTV: v(-3, -3),
      dudeStereo: v(-75, -75)
    }
  },

  livingTime: 1 //seconds
};
