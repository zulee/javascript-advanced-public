# Kvíz

## 1. Kérdés
Mire tipikus példa az alábbi kód? 
```javascript
one(1, function () {
    two(2, function () {
        three(3, function () {
            four(4, function () {
                five(5)
            })
        })
    })
})
```

- async programming
- **callback hell**
- timer
- loopback

### Magyarázat
Függvény, ami paraméterként kap egy függvényt ami paraméterként kap egy függvényt, ami...  
`Callback hell`. Callbacknek hívjuk a függvényt amit paraméterként adunk át másik függvénynek. Ebből van sok egymásba ágyazva. Pokoli nehéz átlátni egy idő után.


## 2. Kérdés
Mi lesz a konzolon az alábbi kód esetén, ha rákattintok a DOM-ba lévő click-me class-ű gombra?

```javascript
const btn = document.querySelector('.click-me');

btn.addEventListener('click', () => {
    console.log('Listener');

    setTimeout(console.log, 0, 'Timer')

    Promise
        .resolve('Promise1')
        .then(console.log)

    Promise
        .resolve('Promise2')
        .then(console.log)    
})
```

- Promise1, Promise2, Listener, Timer
- Listener, Timer, Promise1, Promise2
- **Listener, Promise1, Promise2, Timer** 
- Timer, Promise1, Promise2, Listener

### Magyarázat
Először lefut a szinkron kód, utána a Microtask queue-ben lévő 2 Promise, tehát Promise1, Promise2, és a végén a Task Queue-ben lévő timeout callbackje.

## 3. Kérdés
Mi lesz a kimeneten?

```javascript
console.log('start');
setTimeout(console.log, 1000, '1000');
console.log('end');
setTimeout(console.log, 0, '0');
```

- start, 1000, end, 0
- start, end, 1000, 0
- **start, end, 0, 1000**
- 0, 1000, start, end

### Magyarázat
Először sorrendben a 2 szinkron utasítás: `start`, `end`  
Utána a két callback, jelen esetben elsőnek a `0`, mert itt sokkal kisebb volt a delay, (hacsak az előtte lévő console.log('end') művelet lefuttatása nem tart egy másodpercig, és nem fog) mint az `1000`-es párjánál, ami a legvégén fog csak lefutni.
