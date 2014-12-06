Convertir de JSON-TP-Hash (http://www.leshylabs.com/apps/sstool/) a pac:


    function toPACAtlas(json){
      var result = {};
        _.forEach(json.frames, function(f, key){
          result[key] = {
            x: f.frame.x,
            y: f.frame.y,
            width: f.frame.w,
            height: f.frame.h
          }
          ;
          });
          return JSON.stringify({frames: result});
        }
