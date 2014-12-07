ludum #31
===

### Development
```bash
npm install
```

### Grunt tasks

Compile:
```bash
grunt
grunt dist
```


Action
  onstart: function()
  cancelable: bool|function(owner)
  onend: function()
  effects: EffectEmmiterList
  cancel(): cancela todos los effects

EffectEmitter
  duration: number|function(owner)
  cancelable: bool|function(owner)
  update: function
  physicalRates: {
    vieja: number | function
  },
  mentalRates: {

  }
  position: ?


Action jugar juegos
  desencadena
  SonidoDeJuego(EffectEmmiter)
  Juego(EffectEmmiter)

## Vieja
* VIVIR LA VIDA
  * mental -3
  * fisico -1.5


* Ver TV
  * mental +2
  * fisico -0.5
* Cocinar-Comer
  * mental +1
  * fisico +2
* Dormir
  * mental +1
  * fisico +1

## Flaco
* VIVIR LA VIDA
  * mental -1.5
  * fisico -3


* Jugar
  * mental +2
  * fisico -0.5
* Escuchar Música
  * mental +2
  * fisico +0.5


## Flia
* VIVIR LA VIDA
  * mental -4.5
  * fisico -1.5


* Atender Bebé
  * mental +2
  * fisico -1
* Cenar
  * mental 0
  * fisico +2
