# Errata
## 01-variables/17-memory-lifecycle
03:56-nál a `const`nál a STACK táblázatában az érték 42, nem 43.
## 02-functions/12-arrow-function-as-object-method
A 19. sorban természetesen szintén implicit és nem nem explicit return van.

## 04-string/05-spread-operator
05:07-nél az hangzik el a videóban, hogy deep copy készül az objektumról. 
A **spread operátor** nem deep, hanem **shallow copy**-t készít.
## 11-regex/11-validator-example
A validátor a nevet csak két karakterig ellenőrzi, de egy vagy több kisbetű is lehet.  
Helyesen: `/^[A-ZÁÉÍÓÚÖŐÜŰ][a-záéíóúöőüű]+$/` 
## 14-async-programming/03-xmlHttpRequest
A lecke végén a request függvény deklarációjában nincs a harmadik paraméter megadva. Csak azért működik a kód, mert a `callback` globálisan elérhető. Helyesen:

```javascript
  function request(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr);
      }
    }
    xhr.open(method, url, true);
    xhr.send();
  }
```
## 15-generators/02-loop-through-an-object
Szebb lenne a függvény neve, ha `loop` és nem `lopp` lenne. :) 
## 19-class/11-method-overriding
A `setter` és a publikus adattag neve megegyezik, így a `sportcar.speed` nem a `setter`en keresztül fut, hanem közvetlenül a változó módosul. Tehát a kód helyesen:

```javascript
  class Car {
    _speed = '0 km/h';

    set speed(value) {
      this._speed = `${value} km/h`;
    }

    logActualSpeed() {
      console.log(`Actual speed: ${this._speed}`);
    }
  }
```
      
