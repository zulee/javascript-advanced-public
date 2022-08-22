# Kvíz

## 1. Kérdés
Melyik Regexp flag segítségével tudom case insensitive-en vizsgálni az illeszkedést?  

- g
- m
- **i**
- Nincs rá lehetőség

### Magyarázat
Az `i` az ignorecase kapcsoló. Nem fog különbséget tenni a kis-, és nagybetűk között.  A `g` flaggel globális keresést, az `m`-el a többsoros keresést tudjuk bekapcsolni.

## 2. Kérdés
Adott az alábbi reguláris kifejezés: ([A-Z])\w+/g  
Hány találatunk lenne illeszkedés vizsgálatakor az alábbi mondat esetében?:  
"RegExr was created By trining360.com."   

- 1
- **2**
- 3
- 4

### Magyarázat
Kettő darab nagybetűvel kezdődő szó van a mondatban, ezekre fog illeszkedni a kifejezés.

- [A-Z]: legyen egy angol nagybetű 
- \w: utána az alábbiak közül: a-z, A-Z, 0-9, _
- +:  egy vagy több az előző karakterből  
- /g: globálisan keresünk  

## 3. Kérdés
Melyik stringre fog illeszkedni az alábbi minta?   
/^(\d{3} ){2}\d{3}$/

- '123456789'
- **'123 456 789'**   
- '123'
- '456 789'

### Magyarázat
A leckék során már egyszer előkeült ez a példa. A TAJ számot validáltuk.  
- ^(\d{3} ){2}: kezdődjön a string három darab számmal, ami után egy szóköz
- {2}: az előbbiből legyen 2
- \d{3}$: majd a végén legyen még 3 darab számjegy egymás után