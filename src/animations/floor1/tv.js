
module.exports = {

  tvOn: new pac.Animation({
    fps: 6,
    frames: ['tv_on_0','tv_on_1','tv_on_1']
  }),

  tvOff: new pac.Animation({
    fps: 1,
    frames: ['tv']
  }),

  tvHover: new pac.Animation({
    fps: 1,
    frames: ['tv_hover']
  })

};
