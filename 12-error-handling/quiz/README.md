# Kvíz

## 1. Kérdés
Egy try blokk után mennyi catch blokk lehet?  

- **csak egy** 
- maximum 12 darab
- akármennyi
- ha van utána finally akkor akármennyi

### Magyarázat
JavaScriptem nem támogatott a multiple catch ág.  
Ha több kivételt szeretnénk lekezelni azt egy catch blokkon belül kell megtennünk.

## 2. Kérdés
Milyen estben fut le finally ágban lévő kód?

- csak akkor, ha a try blokkban nem volt hiba
- csak akkor, ha a try blokkban hiba volt, ilyenkor a catch blokk kódja után
- csak akkor, ha a try blokkban hiba volt, ilyenkor a catch blokk kódja előtt
- **mindig** 

### Magyarázat
Mindig. A finally mindig lefut akár volt hiba akár nem.

## 3. Kérdés
Milyen típusú hibát fogok kapni az alábbi kód esetében? (Csak ennyi a file tartalma!)
```javascript
    try {
        powFunction();
    } catch(error){
        console.log(error.name);
    }
```

- **ReferenceError**
- SyntaxError
- TypeError
- RangeError

### Magyarázat
ReferenceError, mert nem létezik a `powFunction` nevű függvény.