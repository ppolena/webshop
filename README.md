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

<img width="1440" alt="Képernyőfotó 2019-05-20 - 0 25 21" src="https://user-images.githubusercontent.com/22857059/57989110-7b127100-7a96-11e9-90d6-a92a9a6e520a.png">
<img width="1434" alt="Képernyőfotó 2019-05-20 - 0 25 36" src="https://user-images.githubusercontent.com/22857059/57989111-7b127100-7a96-11e9-92c1-20d55d974711.png">
<img width="1435" alt="Képernyőfotó 2019-05-20 - 0 26 01" src="https://user-images.githubusercontent.com/22857059/57989112-7b127100-7a96-11e9-9563-2c202cb96cee.png">
<img width="1440" alt="Képernyőfotó 2019-05-20 - 0 26 32" src="https://user-images.githubusercontent.com/22857059/57989113-7b127100-7a96-11e9-8d7e-41d354c944f1.png">
<img width="1434" alt="Képernyőfotó 2019-05-20 - 0 26 43" src="https://user-images.githubusercontent.com/22857059/57989114-7bab0780-7a96-11e9-8f09-4770bf21a8b9.png">
<img width="1438" alt="Képernyőfotó 2019-05-20 - 0 27 03" src="https://user-images.githubusercontent.com/22857059/57989115-7bab0780-7a96-11e9-8487-c005b38ee466.png">
<img width="1427" alt="Képernyőfotó 2019-05-20 - 0 27 18" src="https://user-images.githubusercontent.com/22857059/57989116-7bab0780-7a96-11e9-894d-977b44fb799f.png">
<img width="1434" alt="Képernyőfotó 2019-05-20 - 0 28 47" src="https://user-images.githubusercontent.com/22857059/57989117-7bab0780-7a96-11e9-8fc5-46a66455e128.png">
<img width="1438" alt="Képernyőfotó 2019-05-20 - 0 28 56" src="https://user-images.githubusercontent.com/22857059/57989118-7bab0780-7a96-11e9-9830-24e75659385e.png">








![usecase](https://user-images.githubusercontent.com/22147849/57988371-bbb9bc80-7a8d-11e9-94c8-942495a8f468.png)








##### 4. Felhasználói dokumentáció
Futtatáshoz szükséges operációs rendszer, hardver: tetszőleges
Egyéb követelmények: internet böngésző telepítése, JavaScript ajánlott a felhasználói élmény jvaítása érdekében

*Program használata:*
1.  Böngészőben nyissuk meg a főoldalt

2.  Jobb felső sarokban regisztráció szükséges, amennyiben még nincs

3.  Bejelentkezés után megtekinthetjük a termékeket, majd a kosárba helyezhetjük

4.	A kosárban lévő termékeket megvehetjük
