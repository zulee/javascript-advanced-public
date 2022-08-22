# Kvíz

## 1. Kérdés
Mi lesz a this értéke a függvényen belül, amikor meghívjuk? (A globális környezetben vagyunk)

```javascript
    'use strict';

    function myFunction() {
        return this;
    }

    myFunction();
```

- A function
- A Window object
- null
- **undefined**

### Magyarázat
Strict módban globális kódban elhelyezett függvény esetében mindig `undefined`.

## 2. Kérdés
Mi lesz a this értéke a függvényen belül, amikor meghívjuk? (A globális környezetben vagyunk)

```javascript
    function myFunction() {
        return this;
    }

    myFunction();
```

- A function
- **A Window object**
- null
- undefined

### Magyarázat
Strict mód nélkül globális kódban elhelyezett függvény esetében mindig a globális `Window object`.

## 3. Kérdés
Mi lesz a konzolon az alábbi kód lefutása után?

```javascript
    'use strict';

    const user = {
        name: 'John',
        myNameIs() {
            console.log(this.name);
        }
    };

    const data = {
        name: 'Jane',
    }

    const person = user.myNameIs;
    person.call(data);
```

- **Jane**
- John
- Window object
- undefined

### Magyarázat
A `person`-nak átadom a `myNameIs` metódus referenciáját.   
Meghívom ezt a `call`-al a `this` értéknek a `data`-t adom meg, tehát a name értéke `Jane` lesz. Ez lesz a logon.

## 4. Kérdés
Mi lesz a konzolon, miután rákattintok a gombra?  (A gomb a DOM része)
```javascript
    document.body.insertAdjacentHTML(
        'afterend', 
        '<button onclick="console.log(this)">Click me</button>'
    );
```
- A Window object
- **A Button element**
- Az Event object
- undefined

### Magyarázat
Eventnél maga az object, amin az esemény bekövetkezett, tehát a button. 