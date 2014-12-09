var stats = require('./Stats');

function calc(comm, mind, body){

  comm.changeInterval = stats.livingTime;

  var value = 0.01;

  comm.state = {
    mind: value*mind, 
    body: value*body
  };

  return comm;
}

var env = 0.001;

module.exports = {

  floor1: {
    tv: {      
      command: calc({ env: { granmaTV: env }, animation: 'tvOn', duration: 15 }, 2, -2)
    },

    bed: {
      command: calc({ animation: 'bedOn', duration: 7 }, 1, 2)
    },

    kitchen: {
      command: calc({ animation: 'kitchenOn', duration: 8 }, 1, -0.5)
    },

    grandmaFood: {
      command: calc({ duration: 0.1 }, 1, 2)
    },

    grandmaShower: {
      command: calc({ animation: 'grandmaShowerOn', duration: 10 }, 2, 1)
    },

    grandmaBroom: {
      command: calc({ animation: 'grandmaBroomOn', duration: 10}, 2, -2)
    }
  },

  floor2: {
    dudeStereo: {
      command: calc({ env: { dudeStereo: env }, animation: 'dudeStereoOn', duration: true }, 3, -1)
    },

    bedDude: {
      command: calc({ animation: 'dudeBedOn', duration: 7 }, 2, 2)
    },

    dudeOven: {
      command: calc({ animation: 'dudeOvenOn', duration: 6 }, -2, -1)
    },

    dudeShower: {
      command: calc({ env: { dudeShower: env }, animation: 'dudeShowerOn', duration: 15 }, 0, 1)
    },

    dudeFood: {
      command: calc({ duration: 0.1 }, 1, 3)
    }

  },

  floor3: {

    baby: {
      command: calc({ env: { babyCry: env }, animation: 'babyOn', duration: true }, -1, -2)
    },

    babySleep: {
      command: calc({ animation: 'babyoff', duration: true }, 0, 0)      
    },

    bedFamily: {
      command: calc({ animation: 'familyBedOn', duration: 7 }, 2, 2)
    },

    familyKitchen: {
      command: calc({ animation: 'familyKitchenOn', duration: 6 }, 0, -1)
    },

    familyShower: {
      command: calc({ env: { dudeShower: env }, animation: 'familyShowerOn', duration: 1 }, 1, 2)
    },

    familyFood: {
      command: calc({ duration: 0.1 }, 1, 3)
    }

  }

};
