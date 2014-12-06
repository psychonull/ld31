var pac = require('../../pac/src/'),
  Loading = require('./Loading.js'),
  scenes = require('./scenes');

window.document.title += ' [pac  v' + pac.VERSION + ']';
pac.DEBUG = false;

var ctn = window.document.getElementById('content');

var game = pac.create();
var gameScale = ctn.clientHeight / 200;

game.use('loader', pac.Loader, require('./assets.js'));

game.use('renderer', pac.PixiRenderer, {
  container: ctn,
  backgroundColor: '#000000',
  size: {
    width: 320,
    height: 200
  },
  layers: ['background', 'front', 'dialogue', 'gui'],
  scale: gameScale
});

game.use('input', pac.MouseInput, {
  enabled: true,
  scale: gameScale
});

game.use('scenes', {
  'oneScreen': new scenes.OneScreen()
});

game.loader.on('progress', Loading.update);

game.loader.on('complete', function(){
  Loading.update(1);
  Loading.ready(100, function(){
    game.start('oneScreen');
  });
});

game.on('ready', createGameObjects);

if (pac.DEBUG){
  window.addEventListener('load', function(){
    require('./editor')(game);
  });
}

Loading.create();
game.loader.load();

// hack for develop
window.game = game;

function createGameObjects(){

}
