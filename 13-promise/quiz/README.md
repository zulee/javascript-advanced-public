# Kvíz

## 1. Kérdés
Az alábbiak közül melyik nem lehet egy Promise állapota? 

- rejected  
- resolved
- pending
- **canceled**

### Magyarázat
A promise az alábbi állapotokkal rendelkezhet: pending, fulfilled, rejected, illetve settled ha fulfilled vagy rejected, de nem pending.

## 2. Kérdés
Mi lesz az alábbi kód lefutása után a konzolon?

```javascript
Promise.resolve('ok')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
    return data
  })
  .then(console.log)
```

- ok
- OK
- ok, OK
- **OK, OK**

### Magyarázat
Az első then-ben nagybetűssé alakítjuk az ok stringet. A második `then`-ben ezt kiírjuk a konzolra, és továbbadjuk. A harmadik then ezt callback function-je a `console.log`, ami automatikusan megkapja a stringet, tehát felesleges ezt írnunk: `data => console.log(data)`

## 3. Kérdés
Mit hivatott felváltani a fetch API?

- a setTimeout()-ot
- **az XMLHttpRequestet**
- a callback-eket
- a Promise-okat

### Magyarázat
[Dokumentáció](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)