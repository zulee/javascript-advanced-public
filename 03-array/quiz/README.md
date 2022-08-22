# Kvíz
## 1. kérdés  
Melyik metódus módosítja az eredeti tömböt?

- forEach()
- map()
- reduce()
- **egyik sem**

### Magyarázat
A fenti metódusok az eredeti tömböt nem módosítják, azaz nem mutálják, ellenben a `push()`, `pop()`, `shift()`, `unshift()` metódusok például igen. Érdemes mindig olyan megoldásokra törekednünk, amelyek az eredeti tömböt nem módosítják.

## 2. kérdés
Az alábbi metódushívásnak mi lesz a visszatérési értéke?

```JavaScript
    [0, null ,undefined, ''].filter(item => item)
```
- **[]**
- [0]
- [0, null, undefined, '']
- [null, '']

### Magyarázat
Üres tömböt fogok visszakapni, mert feltételvizsgálatnál mind a `0`, a `null`, az `undefined` és az `üres string` is `false`-t ad vissza.

## 3. kérdés
Mi lesz a value értéke? (A `0` paraméterérték csak a kezdő értéket állítja be.)

```JavaScript
const value = [{v: 1}, {v: 2}, {v: 3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.v, 0)
```
- 1
- 2
- 3
- **6**

### Magyarázat
A `reduce` jelen esetben nem csinál mást, mint hogy összeadja a tömbben lévő objektumok `v` tulajdonságainak az értékét. A kezdőértéket `0`-ra állítjuk, és az `accumulator`-ben ehhez folyamatosan hozzáadjuk a soron lévő objektum `v` tulajdonságának értékét.