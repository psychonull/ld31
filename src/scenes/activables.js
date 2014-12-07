
module.exports = {

  floor1: {

    littleNana: {
      command: {
        env: { music: 0.1, tv: 0.1 },
        state: { mind: -0.01, body: 0.05 },
        //animation: 'test',
        duration: 2, // seconds || true for infinite
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    },

    tv: {
      command: {
        env: { tv: 0.1 },
        state: { mind: 0.05, body: -0.01 },
        animation: 'tvOn',
        duration: true,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    bed: {
      command: {
        env: { tv: 0.1 },
        state: { mind: 0.02, body: 0.05 },
        animation: 'bedOn',
        duration: true,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    kitchen: {
      command: {
        env: { tv: 0.1 },
        state: { mind: 0.02, body: 0.05 },
        animation: 'kitchenOn',
        duration: 120, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    }

  }

};
