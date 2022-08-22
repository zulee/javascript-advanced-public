# Kvíz
## 1. kérdés  
Hogyan hívják azt a függvényt, amelyet más függvénynek adunk át paraméterként?

- **callback function**
- arrow function
- higher order function
- IIFE

### Magyarázat
Azt a függvényt, amelyet másik függvénynek adunk át paraméterként, egyezményesen `callback function`-nek hívjuk.  
Azt pedig, amelyik ezzel dolgozik, `higher order function`-nek.   
Az `arrow function` egy újabb szintaxis function expression létrehozására, illetve rendelkezik néhány speciális tulajdonsággal.   
Az `IIFE` (Immediately Invoked Function Expression - azonnal meghívott függvénykifejezés) segítségével olyan függvényeket tudunk írni, amelyek a definiálásakor rögtön le is futnak.

## 2. kérdés
Melyik állítások helyesek a JavaScript memóriakezelésével kapcsolatban?

- **A Heap rendezetlen memóriaterület**
- A Stack-ben tárolódnak az objektumok
- A Heapben tárolódnak a primitívek
- **A JavaScriptben automatikus a szemétgyűjtés**

### Magyarázat
A `Heap` egy rendezetlen nagyméretű memóriaterület, ahol az objektumok tárolódnak.  
A `Stack` mérete sokkal korlátozottabb, a primitívek itt tárolódnak.  
A JavaScriptben a szemétgyűjtés automatikus. A `garbage collector` munkájába nem tudunk közvetlenül beleavatkozni.

## 3. kérdés
Melyik állítás igaz az arrow function-re?

- **nem bindolja a this-t**
- a paramétert/paramétereket kötelező zárójelbe tenni
- objektum nem szerepelhet visszatérési értékként
- mindig használnunk kell a return utasítást a függvényen belül

### Magyarázat
Az `arrow function` nem köti a saját `this`-t, ezért ne használjuk objektum metódusaként.  
Amennyiben csak egy darab paraméter van, azt nem kötelező zárójelbe tenni.  
`Arrow function` esetében, akárcsak hagyományos függvényeknél, bármilyen típusú adat lehet visszatérési érték.  
`Return` utasítást nem kötelező használni, lehet implicit visszatérési értékünk. 


