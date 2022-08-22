# Kvíz

## 1. Kérdés
Melyik adatszerkezetben nem lehetséges duplikált elemek elhelyezése?

- Array
- Map
- **Set**
- WeakMap

### Magyarázat
[Dokumentáció](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## 2. Kérdés
Melyik metódus nem érhető el WeakMap esetben?

- get
- set
- delete
- **clear**

### Magyarázat
[Dokumentáció](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)  
A `WeakMap` csak `get()`, `set()`, `has()`, `delete()` metódusokkal rendelkezik.

## 3. Kérdés
Mi lesz a konzolon?

```javascript
    const id = Symbol('id');
    const person = {
        [id]: 1,
        firstName: 'John',
        lastName: 'Doe'
    }
    console.log(person.id)
```

- 1
- **undefined**
- Symbol(id): 1
- Error

### Magyarázat
A  `person` `id` tulajdonságát a pont operátorral nem érjük el. Használjuk a `getOwnPropertySymbols()` metódust a Symbol property-k elérésére, vagy itt akár a `person[id]`-t.