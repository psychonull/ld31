var Loading = require('./Loading.js'),
  scenes = require('./scenes');

window.pac = require('../../pac/src/');

window.document.title += ' [pac  v' + pac.VERSION + ']';
pac.DEBUG = false;

var ctn = window.document.getElementById('content');

var gameSize = { width: 1067, height: 600 };

var game = pac.create();
var gameScale = ctn.clientHeight / gameSize.height;

game.use('loader', pac.Loader, require('./assets.js'));

game.use('renderer', pac.PixiRenderer, {
  container: ctn,
  backgroundColor: '#00FF00',
  size: gameSize,
  scale: gameScale,
  layers: ['background', 'objects', 'front', 'gui'],
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

game.on('ready', require('./createGameObjects.js'));

if (pac.DEBUG){
  window.addEventListener('load', function(){
    require('./editor')(game);
  });
}

Loading.create();
game.loader.load();

// hack for develop
window.game = game;
