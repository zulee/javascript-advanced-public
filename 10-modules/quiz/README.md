# Kvíz

## 1. Kérdés
Maximum hány darab export utasítás lehet egy file-ban?

- 1
- 2
- Csak export default lehet, sima export nem
- **Akármennyi**

### Magyarázat
Az `export`ok száma nincs bekorlátozva a szabvány alapján.

## 2. Kérdés
Maximum hány darab export default utasítás lehet egy file-ban?

- **1**
- 2
- 32
- Akármennyi

### Magyarázat
Míg `named export`-ból akármennyi lehet, `default`ból csak egy darab. Akkor használjuk ha az adott file csak egy class-t, object-et stb. tartalmaz.  

## 3. Kérdés
Lehetséges az import utasítást feltételhez kötni? 
Pl.:
```javascript
if (condition) {
  import { myModule } from './my.js';
}
```

- Igen, bármikor lehet
- **Nem lehet**
- Csak import as utasítás lehet feltételnél
- Csak default export esetében lehet feltételhez kötött import

### Magyarázat
Minden `import`nak a file elején kell szerepelnie.   Tehát nem lehet ilyen módon feltételhez kötni