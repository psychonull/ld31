
module.exports = {

  kitchenOn: new pac.Animation({
    fps: 2,
    frames: ['cocina_on_0','cocina_on_1','cocina_on_2']
  }),

  kitchenOff: new pac.Animation({
    fps: 1,
    frames: ['cocina']
  }),

  kitchenHover: new pac.Animation({
    fps: 1,
    frames: ['cocina_hover']
  })

};
