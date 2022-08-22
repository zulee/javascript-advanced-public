# Kvíz

## 1. kérdés
Melyik kulcsszóval létrehozott változók esetében van hoisting?

- **var**
- **let**
- **const**
- Egyiknél sincs

### Magyarázat
Mind a háromnál van `hoisting`, a különbség annyi, hogy `var` esetében a változó inicializálódik is `undefined` kezdőértékkel.

## 2. kérdés
Melyik kulcsszóval létrehozott változó esetében nem megengedett a reassignment (újra értékadás)?

- var
- let
- **const**
- Mindegyiknél megengedett

### Magyarázat
A `const immutable binding`-ot hoz létre, nem lehet újra értéket adni a változónak.

## 3. kérdés
Melyik állítások igazak a let és const kulcsszóval deklarált változókra?

- **nem lehet őket újradeklarálni**
- **blokk hatókörűek**
- **inicializálás előtt nem elérhetőek**
- nem lehet újra értéket adni nekik (reassignment)

### Magyarázat
Egyedül csak a `const`tal létrehozott változókra igaz, hogy a reassignment nem lehetséges.   
