
module.exports = {

  walkRight: new pac.Animation({
    fps: 6,
    frames: ['right1','right2','right3','right4','right5','right6']
  }),

  walkLeft: new pac.Animation({
    fps: 6,
    frames: ['left1','left2','left3','left4','left5','left6']
  }),

  idleRight: new pac.Animation({
    fps: 3,
    frames: ['idle1','idle3','idle3']
  }),

  idleLeft: new pac.Animation({
    fps: 2,
    frames: ['idle4','idle5','idle6']
  }),

};
