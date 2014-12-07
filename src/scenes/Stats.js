function v(mind, body){
  return { mind: mind/1000, body: body/1000 };
}

module.exports = {
  floor1: {
    start: { mind: 1, body: 1 },
    living: v(-3, -1.5),

    env: {
      tv: v(0, -1.5),
      babyCry: v(-3, -1.5),
      cook: v(-3, -1.5),
      videogame: v(-3, -1.5),
      music: v(-2, 0),
    }
  },
  floor2: {
    start: { mind: 1, body: 1 },
    living: v(-1.5, -3),

    env: {
      tv: v(-3, -1.5),
      babyCry: v(-3, -1.5),
      cook: v(-3, -1.5),
      videogame: v(-3, -1.5),
      music: v(-3, 1.5),
    }
  },
  floor3: {
    start: { mind: 1, body: 1 },
    living: v(-4.5, -1.5),

    env: {
      tv: v(-3, -1.5),
      babyCry: v(-3, -1.5),
      cook: v(-3, -1.5),
      videogame: v(-3, -1.5),
      music: v(-3, -1.5),
    }
  },

  livingTime: 0.1 //seconds
};