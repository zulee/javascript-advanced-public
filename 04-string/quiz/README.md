# Kvíz

## 1. kérdés
Mi lesz a `b` értéke a függvényen belül?

```JavaScript
    function restParameter(a, ...b) {
        //...
    }

    restParameter(1, 2, 3, 4, 5);
```
- 2
- [2]
- **[2, 3, 4, 5]**
- [1, 2, 3, 4, 5]

### Magyarázat
Jelen esetben rest paramétert használtunk. Az `a` értéke `1` lesz, míg a `b` értéke az összes többi paraméter tömbösítve, tehát: `[2, 3, 4, 5]`.

## 2. kérdés
Az alábbi kód lefutása után mi lesz a konzolon?

```JavaScript
    const age = { age: 33 }
    const name = { firstname: 'John', lastname: 'Doe' }
    console.log({ ...name, ...age })
```
- **{ firstname: 'John', lastname: 'Doe', age: 33 }**
- [ firstname: 'John', lastname: 'Doe', { age: 33 } ]
- [ { firstname: 'John', lastname: 'Doe' }, { age: 33 } ]
- [ 'John', 'Doe', 33 ]

### Magyarázat
Két objektumot fűztünk össze. A kimeneten egy olyan új objektum lesz, amely mind a kettő tulajdonságait tartalmazza.

## 3. kérdés
Melyik kifejezés nem lenne helyes egy konzolra való kiíráskor, amennyiben a kiinduló kód a következő?
```JavaScript
    const a = 10
    const b = 20
    const sum = (firstNumber, secondNumber) => firstNumber + secondNumber 
```

- `érték: ${a + b}`
- `érték: ${sum(a, b)}`
- **`érték: ${sum(firstNumber, secondNumber)}`**
- `érték: ${sum(10, 20)}`

### Magyarázat
A `firstNumber` és a `secondNumber` a paraméterek nevei, csak függvényen belül használhatom őket.  
A függvényen kívül nem léteznek, tehát itt `ReferenceError`-t kapunk.