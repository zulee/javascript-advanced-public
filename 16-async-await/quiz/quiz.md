# Kvíz

## 1. Kérdés
Mi lesz az async function visszatérési értéke?  

- amit megadunk return után
- **mindig egy Promise**
- egy Iterable 
- egy Iterator

### Magyarázat
Az aszinkron függvények visszatérési értéke indig egy Promise.  
A async await valójába csak egy egyszerűsített szintaxis a new Promise, then... részekre.  

## 2. Kérdés
Mi lesz a konzolon az alábbi kód lefutása után, ha minden async hívás is véget ért?

```javascript
    const thenable = {
        age: 30,
        then(resolve, reject) {
            setTimeout(() => resolve(this.age * 2), 1000)
        }
    };

    async function f() {
        const result = await thenable;
        console.log(result)
    }

    f();
```
- Error
- **60**
- Promise
- ƒ Function() { [native code] }

### Magyarázat
Az await után megadtunk egy thenable objectet, tehát egy olyan objektumot aminek van then metódusa.  
Tehát az await után a thenable object then metódusa hívódik meg. Ott egy setTimeout van, ami egy másodperc múlva meghívja resolve-ot, paraméterként átadva neki az age property értékének a dupláját a 2 * 30-at. Az f függvényen belül ezt az értéket fogjuk kiírni. 
