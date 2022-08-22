# Kvíz

## 1. Kérdés
Mikor fut le a konstruktor függvény? 

- a class létrehozásakor
- **objektumpéldány létrehozásakor**
- amikor manuálisan megívom
- exportáláskor

### Magyarázat
MDN-ről idézve: "The constructor method is a special method of a class for creating and initializing an object of that class."  
Tehát objektum létrehozásakor fut le.

## 2. Kérdés
Mi lesz a kimeneten?

```javascript
    class User {

        static speak(message) {
            return `User says: ${message}`
        }
    }

   console.log(User.speak('hi')
```

- **User says: hi**
- User says: undefined
- hi
- Error, mert nincs példányosítás

### Magyarázat
Egy darab statikus metódusunk van, amint mindig példányosítás nélkül kell meghívni, mert a statikus metódusok csak classen keresztül érhetők el a példányokon keresztül nem. Jelen esetben a User.speak metódusa visszaadja  a User says: literált összefűzve a pareméterként átadott értékkel.

## 3. Kérdés
Lehetséges egy gyermekosztályban felülírni egy szölőosztályban definiált metódust?

- **igen**
- nem 
- csak a gettert/settert
- csak ha a szülőben volt constructor

### Magyarázat
Semmi akadálya az overriding-nek. Pl.:  

```javascript
class Car {

  constructor(name) {
    this.speed = 0;
  }

  go(speed) {
    this.speed = speed;
  }
}

class SportCar extends Car {
  logSpeed() {
    console.log(`Actual speed: ${this.speed}.`);
  }

  go() {
    super.go();
    this.logSpeed();
  }
}
```
