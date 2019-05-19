# Webshop
 ### 1. Követelményanalízis
#### 1.1 Célkitűzés, projektindító dokumentum  
A program egy olyan webes alkalmazást fog megvalósítani, ahol különböző termékek megrendelésére lesz lehetőség. Regisztráció után a felhasználók különböző termékek kínálatából tudnak válogatni és vásárolni.
#### Funkcionális követelmény
- Felhasználó
  - regisztráció
  - bejelentkezés
  - termékek megtekintése és vásárlása
#### Nem funkcionális elvárások
Az oldal legyen
- gyors,
- felhasználóbarát, ergonomikus elrendezésű,
- biztonságos: biztosítsa a megfelelő funkciókhoz a megfelelő hozzáférést jogosultságok alapján.

#### 2. Tervezés
#### 2.1 Oldaltérkép
![usecase](https://user-images.githubusercontent.com/22147849/57988371-bbb9bc80-7a8d-11e9-94c8-942495a8f468.png)
#### 2.2 Végpontok
- /issues: főoldal
- /issues/electronics: termékeket megjelenítő oldal
- /issues/contact: a kapcsolatot tudjuk felvenni az oldal üzemeltetőjével
- /issues/shopping-cart: kosár
- /issues/buying-form: fizetés

#### 3. Fejlesztői környezet bemutatása, beállítása, használt technológiák
Ezen projekt fejlesztéséhez az Angular CLI nevű program 6.2.5 verziója lett használva.

A kliens oldali fejlesztés Visual Studio Code környezetben történt. Felhasználtuk az AngularJS-t, amely egy struktúrális szerkezetet     nyújt a dinamikus webes alkalmazásokhoz. Engedélyezi, hogy HTML-t lehessen használni a template-ek nyelvéhez, de ennek a        kiterjesztését is, hogy a komponenseket árnyaltabban tudjuk leírni, továbbá a JavaScryptet és a TypeScyptet is, illetve a css-t is. A  css a kinézetért felelős, a TypeScrypt, illetve a Javascrypt pedig a logikáért, a html pedig a különböző elemek elrendezéséért a megjelenő felületen.  
  
Futtasuk le az ng serve parancsot. A böngésző címsorába másoljuk be a http://localhost:4200/ szöveget. Ezen az oldalon az aplikáció folyamatosan frissül, ha a háttérben módosítunk valamit. Npm install-lal installálunk minden, a futáshoz kellő komponenst, és npm start-tal elindíthatuk az aplikációnkat.   
  
Adjuk ki az ng build parancsot a parancssorban a proekt build-eléséhez. A build-elt elemek a dist/ könyvtárba kerülnek.  
 
További segítséget az Angular CLI használatához az ng help parancs kiadásával kaphatunk, illetve, az Angular CLI README elolvasásával.

#### 3.1 Felületi tervek

Főoldal

![mainpage](https://user-images.githubusercontent.com/22147849/57988369-bbb9bc80-7a8d-11e9-8450-ecfcae524029.PNG)

Termékek

![electronics](https://user-images.githubusercontent.com/22147849/57988368-bb212600-7a8d-11e9-9b07-6a2dc2ead9de.PNG)
  
Kapcsolat

![contact](https://user-images.githubusercontent.com/22147849/57988367-bb212600-7a8d-11e9-93d7-a83611e9b29c.PNG)
  
Kosár

![shoppingcart](https://user-images.githubusercontent.com/22147849/57988370-bbb9bc80-7a8d-11e9-8284-f0b3397e3809.PNG)
  
Fizetés

![buy](https://user-images.githubusercontent.com/22147849/57988366-bb212600-7a8d-11e9-9a6c-65bc626ccc78.PNG)

##### 4. Felhasználói dokumentáció
Futtatáshoz szükséges operációs rendszer, hardver: tetszőleges
Egyéb követelmények: internet böngésző telepítése, JavaScript ajánlott a felhasználói élmény jvaítása érdekében

*Program használata:*
1.  Böngészőben nyissuk meg a főoldalt

2.  Jobb felső sarokban regisztráció szükséges, amennyiben még nincs

3.  Bejelentkezés után megtekinthetjük a termékeket, majd a kosárba helyezhetjük

4.	A kosárban lévő termékeket megvehetjük
