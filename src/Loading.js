
module.exports = {

  create: function(){
    var loadingEl = document.createElement('div');
    loadingEl.id = 'loading';
    loadingEl.className = 'loading';

    loadingEl.innerHTML =
      '<div class="cyborg levitate"></div>' +
      '<div class="bar-ctn">' +
        '<div id="bar">' +
        '  <div id="prg"></div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(loadingEl);
  },

  update: function(prg){
    var barEl = document.getElementById('prg');
    barEl.style.width = (prg*100) + '%';
  },

  ready: function(time, done){
    window.setTimeout(function(){
      var loadingEl = document.getElementById('loading');
      loadingEl.style.display = 'none';
      done();
    }, time);
  }

};
