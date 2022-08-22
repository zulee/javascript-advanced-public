# Kvíz

## 1. Kérdés  
Melyik storage típus tartalma törlődik a böngésző bezárásakor?

- cookie
- **sessionStorage**
- localStorage
- egyiké sem


### Magyarázat
A `cookie` és a `localStorage` megőrzi benne tárolta adatokat, amíg mi vagy a user ki nem törli őket.    
Ezzel szemben a `sessionStorage`, ahogy a neve is mondja csak az adott sessionre, azaz munkamenetre őrzi meg a tartalmat.

## 2. Kérdés
Mekkora lehet egy süti maximális mérete (általában)?

- **4KB**
- 5MB
- 25MB
- Nincs korlátozva

### Magyarázat
[Dokumentáció](https://tools.ietf.org/html/rfc6265#section-4.1.1)  
RFC szabvány által van meghatározva. 

## 3. Kérdés
Hol tároljuk a titkosítatlan jelszavakat?  

- cookie-ban
- localStorage-ben
- sessionStorage-ben
- **Sehol**

### Magyarázat
A jelszavakat mindig sózzuk, titkosítjuk! 