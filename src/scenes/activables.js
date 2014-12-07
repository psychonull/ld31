
module.exports = {

  floor1: {

    littleNana: {
      command: {
        env: { music: 0.1, tv: 0.1 },
        state: { mind: -0.01, body: 0.05 },
        //animation: 'test',
        duration: 2, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    },

    tv: {
      command: {
        env: { tv: 0.1 },
        state: { mind: 0.05, body: -0.01 },
        animation: 'tvOn',
        duration: 120, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    }

  }

};
