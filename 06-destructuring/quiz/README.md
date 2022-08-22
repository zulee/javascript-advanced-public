# Kvíz

## 1. Kérdés
Mi lesz az `n` és az `s` és `k` változók értéke?

```javascript
    const pet = {
        name: 'Szetti',
        species: 'dog',
        age: 3
    }

    const { name: n, species: s, kor: k = 10 } = pet;
```
- 'Szetti', 'dog', 3
- **'Szetti', 'dog', 10**
- 'Szetti', 'dog', undefined
- Hibás a kód

### Magyarázat
A `pet` objektum nem rendelkezik kor tulajdonsággal, így a megadott default value, azaz `10` lesz az értéke.

## 2. Kérdés
Mi lesz az `a` és a `d` változók értéke?

```javascript
    const arr = ['one', 'two', 'three', 'four'];
    const [a, , , d] = arr;
```
- 'one', 'two'
- 'one', 'three'
- **'one', 'four'**
- Hibás a kód

### Magyarázat
Az `a` értéke a tömb első elemének az értékét veszi fel, majd két elemet kihagyunk, a `d` a negyedik elem, azaz a
3. indexű elem értékét kapja meg ami `'four'`

## 3. Kérdés
Mi lesz a `pet` objektum `name` tulajdonságának az értéke a kód lefutása után? 

```javascript
    const pet = {
        name: 'Szetti',
        species: 'dog',
        age: 3
    }

    const { name } = pet
    name = 'Bogyó'
```

- **Szetti**
- Bogyó
- undefined
- Hibás a kód

### Magyarázat
A destructuring után a referencia elveszik. A `name` egy egyszerű primitív lesz. Ha azt módosítjuk az
objektum tulajdonsága nem fog módosulni.