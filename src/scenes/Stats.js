function v(mind, body){
  return { mind: mind/1000, body: body/1000 };
}

module.exports = {
  floor1: {
    start: { mind: 1, body: 1 },
    living: v(-1, -2),

    env: {      
      babyCry: v(-2, 0),
      dudeStereo: v(-4, -2),
      dudeShower: v(-3, -1)
    }
  },
  floor2: {
    start: { mind: 1, body: 1 },
    living: v(-2, -1),

    env: {
      //garnmaTV: v(-2, -1.5),      
      babyCry: v(-3, -1),
      granmaBroom: v(-3, -1)
    }
  },
  floor3: {
    start: { mind: 1, body: 1 },
    living: v(-2, -1),

    env: {
      //garnmaTV: v(-1, -1),      
      dudeStereo: v(-3, -1)
    }
  },

  livingTime: 0.5 //seconds
};