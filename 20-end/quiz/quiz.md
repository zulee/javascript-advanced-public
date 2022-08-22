# Kvíz  

## 1. Kérdés  
**Hol tárolnád a biztonsági szempontból érzékeny adatokat?**  

- localStorage-ban   
- sessionStorage-ban  
- **httpOnly secure cookiban**   
- JavaScript konstansban   

### Magyarázat
A httpOnly secure cookie-hoz nem lehet JavaScriptből módosítani, így ez a legjobb megoldás.  
http header-ben található.

## 2. Kérdés  
**Több aszinkron kérést kell elindítani egyszerre, és meg kell várni, míg mindegyik fulfilled lesz. Melyik Promise metódust használnád?** 

- **all()**
- race()   
- allSettled()  
- any()  

### Magyarázat
[Dokumentáció](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## 3. Kérdés  
**Melyik összetett adatszerkezetet kell használni, ha nem akarod, hogy duplikált forduljanak elő benne?**  

- Array    
- Map   
- **Set**    
- WeakMap

### Magyarázat
Set-be nem fognak belekerülni a duplikált elemek. Array, Map, WeakMap esetében lehetnek duplikált elemek.

## 4. Kérdés  
**Válaszd ki a helyes állítást! Minden objektum rendelkezik:**  

- prototype tulajdonsággal   
- **egy belső [[Prototpye]] tulajdonsággal**    
- PROTO tulajdonsággal  
- egyik sem igaz

### Magyarázat
prototype tulajdonsággal csak a függvények rendelkeznek, [[Prototype]]-al pedig minden egyes objektum.  
PROTO így negybetűkkel nem létezik. __proto__ van ami egy getter/setter a [[Prototype]]-ra.  

## 5. Kérdés  
**Adott az alábbi kód:** 
```javascript
const arr = [1, 2, 3, 4, 5];
const i = 2;
[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
```
** Mi lesz az arr[i] és az arr[i+1] értéke?

- 2, 3   
- 3, 2   
- 3, 4  
- **4, 3**

### Magyarázat
Két értéket felcserélünk egymással. Egy tipikus példája a desctructuringnak.

## 6. Kérdés  
**Az alábbiak közül melyik nem egy Promise állapota?** 

- pending    
- fulfilled   
- **catched**       
- rejected  

### Magyarázat
A promise az alábbi állapotokkal rendelkezhet: pending, fulfilled, rejected, illetve settled ha fulfilled vagy rejected, de nem pending.

## 7. Kérdés  
**Mi lesz az alábbi kód visszatérési értéke?**  
```javascript
[1, 2, 3, 4, 5]
    .filter(item => item ** 2 % 3)
    .reduce((previous, curent) => previous + curent);
```

-  5  
- **12**  
- 14  
- 7  

### Magyarázat
Négyzetre emeljük az elemeket, majd maradékosan elosztjuk 3-al, amennyiben itt a kiértékelés után true-t kapunk visszaadjuk az eredeti elemet.
A filternél egyedül itt lesz az érték 0, ami false-ra értékelődik ki: 3 ** 2 % 3   
Tehát a filter után a tömbünk: [1, 2, 4, 5]   
Ezután ezeket az értékeket összeadjuk:  12

## 8. Kérdés  
**A következő kód esetében mi lesz a "b" változó típusa?**

```javascript
const arr = [undefined, '', , 'two', 'three', 'four'];
const [a, b, c, d] = arr;
```

- undefined  
- null   
- **string**    
- empty  

### Magyarázat
A "b" az "arr" tömb 2 elemének az értékét veszi fel, ami egy üres string. Attól, hogy üres még string marad.   

## 9. Kérdés  
**Mi a különbség a call() és az apply() metódusok között?**  

- **az call() a this után felsorolva várja a paramétereket az apply() tömbösítve`**    
- semmi  
- az apply() a this után felsorolva várja a paramétereket az call() tömb szinten    
- a call() új függvényt hoz létre az apply() csak meghívja azt, beállítva a this értékét 

### Magyarázat
A call() felsorolva, az apply() tömbösítve várja a paramétereket a this után.

## 10. Kérdés  

**Az alábbi minta melyik stringre fog illeszkedni?**
```javascript
    /^(\d{3} ){2}\d{3}$/
```
- **'111 222 333'**   
- 'ABC BCD' 
- 'ABC BCD CDE'  
- '111222333'

### Magyarázat
- ^(\d{3} ): kezdődjön három darab számmal, majd utána legyen egy szóköz
- {2}: Az előző ismétlődjön kétszer
- \d{3}$: majd legyen még 3 darab szám, és itt vége is a stringnek  