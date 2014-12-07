
module.exports = {

  walkRight: new pac.Animation({
    fps: 8,
    frames: ['right1','right2','right3','right4',
             'right5','right6','right7','right8']
  }),

  walkLeft: new pac.Animation({
    fps: 8,
    frames: ['left1','left2','left3','left4',
             'left5','left6','left7','left8']
  }),

  idleLeft: new pac.Animation({
    fps: 2,
    frames: ['idle1','idle2','idle3']
  }),

  idleRight: new pac.Animation({
    fps: 2,
    frames: ['idle4','idle5','idle6']
  }),

};
