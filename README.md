# Inleiding

Tegenwoordig wordt alles gedigitaliseerd. Daarom wil ik met mijn applicatie de gebruiker de mogelijkheid geven, om hun
recepten online te kunnen uploaden! Naast het uploaden van eigen recepten, kan de gebruiker ook andere recepten opzoeken
en kan de gebruiker ook de naam van een land aangeven en passende recepten hier in terug vinden.


## Code runnen

Om de code te runnen, installeer je eerst alle dependencies. Dit doe je door je in je terminal 'npm install' te toetsen,
dit doe je zonder de ''. Meestal gaat dit al automatisch omdat de dependencies al in de package.json zitten. 
Vervolgens druk je op enter en worden alle dependencies automatisch geïnstalleerd. 
Mocht dit niet het geval zijn, dan moet je alle dependencies even automatisch downloaden, dit gaat om het volgende:

npm i react-router-dom
npm i axios
npm i react-use-effect

Wanneer het installeert is, kan je de code runnen door 'npm start' in te typen in de terminal.

### Registreren/inloggen

Om gebruik te kunnen maken van de applicatie, moet je eerst een account hebben aangemaakt en ingelogd zijn. Dit doe je
door op de login button te drukken. Via de sign-up, kan je je gegevens invullen, hier heb je de volgende informatie
voor nodig:

Username: Dit mag je zelf invullen
Email: Dit mag je zelf invullen
Password: LET OP! Dit moeten 6 karakters bevatten
User: user

Kijk maar naar het voorbeeld hieronder:

<img width="928" alt="signup" src="https://user-images.githubusercontent.com/94354993/166163813-96362a6d-e481-4d0a-a042-5257a728d8d6.png">

![](../../Desktop/signup.png)

Zodra je geregistreerd staat, voer je je username en password in om in te loggen.

### Recepten opzoeken

Om recepten op te zoeken kan je dit in de zoekbalk zoeken. Let wel op dat de gerechten voornamelijk in het engels
er in staan. Zodra je het ingetoets hebt, druk je op het zoek-icoon. 
Omdat de API wat trager is, kan het zijn dat je er twee keer op moet drukken. Als je een gerecht gevonden hebt, 
kan je er op aanklikken en zie je hoe het gerecht gemaakt kan worden.

### Recept uploaden

Via My Recipes, kan je al je toegevoegde recepten zien. Omdat je nog niks geüpload hebt, staat dit nog leeg.
Als je op de add-recipe button klikt, kan je hier je recept toevoegen.

Hier kan je alleen een afbeelding toevoegen. Zodra je alles ingevuld hebt en je op de
"Upload my delicious recipe" drukt.... Tada!! Het staat nu automatisch op je myrecipes pagina.

Hier in kan je nu al je heerlijke recepten uploaden! Dit ziet er als het goed is, zo uit:


![](![](src/assets/addrecepie.png))<img width="1422" alt="addrecepie" src="https://user-images.githubusercontent.com/94354993/166163795-88d42293-65dd-4157-9345-f5abc7a58b72.png">
