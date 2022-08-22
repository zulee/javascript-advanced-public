# Kvíz

## 1. Kérdés
Mi a next() metódus visszatérési értéke?

- egy value, azaz valamilyen érték
- egy boolean, amit true, ha a függvény befejezett egyéként false
- **egy object, amit done, és value tulajdonságokat tartalmaz** 
- egy Promise

### Magyarázat
A visszatérési érték egy olyan object, ahol a done property értéke true, ha a függvény befejezett egyéként false, a value property értéke pedig a yield utáni érték.

## 2. Kérdés
Válaszd ki az igaz állításokat!

- **Meg lehet adni generátor függvényen belül a yield után értéknek egy másik generátor függvény hívás értékét**
- A hibakezelést mindig a generátor függvényen kívül kell megvalósítanunk, az nem tartalmazhat try catch blokkot
- Generátor függvényen belül a return használata esetén mindig hibát kapunk
- **Generátor függvényeket kombinálhatunk Promise-okkal**

### Magyarázat
- Meg lehet adni generátor függvényen belül a yield után értéknek egy másik generátor függvény hívás értékét: igaz, hiszen a yield* pont erre szolgál
- A hibakezelést mindig a generátor függvényen kívül kell megvalósítanunk, az nem tartalmazhat try catch blokkot: hamis, példát is láthattunk a használatára
- Generátor függvényen belül a return használata esetén mindig hibát kapunk: nem kapunk hibát egyszerűen next() metódushívásnál nem lesz ott return utáni érték
- Generátor függvényeket kombinálhatunk Promise-okkal: természetesen, erre is láthattunk példát. Több fetch kérést küldtünk el a kettő kombinálásával.
