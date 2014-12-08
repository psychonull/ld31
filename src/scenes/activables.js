
module.exports = {

  floor1: {
    tv: {
      command: {
        env: { granmaTV: 0.1 },
        state: { mind: 0.05, body: -0.01 },
        animation: 'tvOn',
        duration: 15,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    bed: {
      command: {
        state: { mind: 0.02, body: 0.05 },
        animation: 'bedOn',
        duration: 7,
        changeInterval: 0.5,
      },
      nearness: 50
    },
    kitchen: {
      command: {
        state: { mind: 0.02, body: 0.02 },
        animation: 'kitchenOn',
        duration: 10, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    }

  },

  floor2: {
    dudeStereo: {
      command: {
        env: { dudeStereo: 0.1 },
        state: { mind: 0.05, body: -0.01 },
        animation: 'dudeStereoOn',
        duration: true,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    bedDude: {
      command: {
        state: { mind: 0.02, body: 0.05 },
        animation: 'dudeBedOn',
        duration: 7,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    dudeOven: {
      command: {
        state: { mind: -0.02, body: 0.05 },
        animation: 'dudeOvenOn',
        duration: true, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    },

    dudeShower: {
      command: {
        env: { dudeShower: 0.1 },
        state: { mind: 0.02, body: 0.05 },
        animation: 'dudeShowerOn',
        duration: 15, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    }

  },

  floor3: {

    baby: {
      command: {
        env: { babyCry: 0.1 },
        state: { mind: 0.05, body: -0.01 },
        animation: 'babyOn',
        duration: true,
        changeInterval: 0.5,
      },
      nearness: 50
    },
    babySleep: {
      command: {
        state: { mind: 0.05, body: -0.01 },
        animation: 'babyoff',
        duration: 3,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    bedFamily: {
      command: {
        state: { mind: 0.1, body: 0.05 },
        animation: 'familyBedOn',
        duration: 7,
        changeInterval: 0.5,
      },
      nearness: 50
    },

    familyKitchen: {
      command: {
        state: { mind: 0.02, body: 0.05 },
        animation: 'familyKitchenOn',
        duration: 10, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    },
    familyShower: {
      command: {
        env: { dudeShower: 0.1 },
        state: { mind: 0.02, body: 0.05 },
        animation: 'familyShowerOn',
        duration: 1, // seconds
        changeInterval: 0.5, // apply state every X seconds
      },
      nearness: 50
    }

  }

};
