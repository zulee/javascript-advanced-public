# Kvíz

## 1. Kérdés
Mi lesz a két visszatérési érték az alábbi esetekben?

```javascript
isNaN('value')
Number.isNaN('value')
```
- true, true
- **true, false**
- false, true
- false, false

### Magyarázat
A globális `isNaN()` loose equality-t használ, addig a `Number.isNaN()` strict equality-t, tehát a típust is vizsgálja nem csak az értéket.

## 2. Kérdés
Az alábbiak közül milyen számrendszerbeli számokkal tudunk dolgozni JavaScriptben?

- **bináris (2)**
- **oktális (8)**
- **decimális (10)**
- **hexadecimális (16)**

### Magyarázat
Mindegyik helyes megoldás volt. Alaphelyzetben 10-es számrendszerbeli számokkal dolgozunk, azonban
0b, 0o, 0x előtagokkal megadott számok automatikusan a bináris, oktális, és hexadecimális számrendszerbe fognak tartozni.

## 3. Kérdés
Maximum mekkora értéket vehetnek fel a BigInt típusú számok?

- A Number.MAX_SAFE_INTEGER segítségével lekérdezhető
- A Number.MAX_VALUE segítségével lekérdezhető
- **Nincs elvi korlátja, maximum a memória mennyisége szab neki határt**
- Pontosan 10 a századikon a legnagyobb ábrázolható érték

### Magyarázat
A `BigInt` típusnak nincs a mérete lekorlátozva. Amíg van elég memória bármekkora értéket felvehet.