
module.exports = function(game){

  var editor = document.getElementById('editor');
  editor.style.display = '';

  var posEle = document.getElementById('pos');
  var polygon = document.getElementById('polygon');
  var polygonOfset = document.getElementById('polygon-offset');

  var done = document.getElementById('done');

  var mode = null;
  var offset = null;
  var points = [];

  function clearPoints(){
    if (mode === 'polygon-offset'){
      console.log('offset: ' + offset.x + ',' + offset.y);
    }

    var str = 'new ';

    str += 'pac.Polygon([';

    points.forEach(function(point, i){
      if (i > 0){ str += ','; }
      str += point.x + ',' + point.y;
    });

    str += '])';

    console.log(str);

    points = [];
    offset = null;
    mode = null;

    polygon.style.color = 'white';
    polygonOfset.style.color = 'white';
  }

  done.addEventListener('click', function(){
    clearPoints();
  });

  polygon.addEventListener('click', function(){
    clearPoints();
    mode = 'polygon';
    polygon.style.color = 'yellow';
  });

  polygonOfset.addEventListener('click', function(){
    clearPoints();
    mode = 'polygon-offset';
    polygonOfset.style.color = 'yellow';
  });

  game.on('update', function(){

    var pos = game.inputs.cursor.position;
    posEle.innerText = pos.x + ' : ' + pos.y;

    if (mode && this.inputs.cursor.isDown){

      if (mode === 'polygon-offset' && !offset){
        offset = pos;
        return;
      }

      if (offset){
        points.push(pos.subtract(offset));
      }
      else {
        points.push(pos);
      }
    }

  });

};

