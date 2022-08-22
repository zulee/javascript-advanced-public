# Kvíz

## 1. Kérdés
Az alábbi kód esetében a date változónál a 2020-as év melyik hónapja és napja van beállítva?

```javascript
const date = new Date(2020, 1, 1)
```

- január 1.
- **február 1.**
- január 2.
- február 2.

### Magyarázat
Mivel a hónapok 0-tól kezdődően számozódnak (mint a tömbindexek), ezért az 1 a február hónapot jelöli.   
A második egyes a nap száma, az 1-től számozódik.

## 2. Kérdés
Mi lesz a konzolon az alábbi kód lefutása után?

```javascript
const date = new Date(2020, 0, 1)
date.setDate(32)
console.log(date)
```

- Jan 01 2020
- Jan 32 2020
- **Feb 01 2020**
- RangeError: Invalid argument.

### Magyarázat
Trükkös volt. A január 1-et módosítjuk. A napszámot 32-re átállítottam. Ugyan januárban nincs 32. nap, azonban ez nem probléma, mert ilyen esetben 
automatikusan ugrik a következő dátumra. Tehát januárban 31 nap van, plusz egy az február 1.

## 3. Kérdés
Mi lesz a konzolon az alábbi kód lefutása után?

```javascript
const date = Date.UTC(2020, 0, 1)
console.log(date)
```
- Egy date object UTC alapú értékkel
- Egy date object lokális idő alapú értékkel
- **1970 január 1 óta eltelt idő ezredmásodpercben**
- Error

### Magyarázat
Az `UTC()` metódus az 1970 január 1 óta eltelt időt adja vissza ezredmásodpercben.