# Nerdy T-Shirt

Voor deze opdracht ga je een interactieve toepassing ontwerpen. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien, horen en/of voelen krijgen.

## Doel van deze opdracht

Het doel van deze opdracht is te leren hoe je een online interactieve toepassing kan maken met behulp van _Progressive Enhancement_ en _Feature Detection_ zodat die het altijd doet ...

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)

## Uitleg

Core functionaliteit is dat gebruikers een nerdy t-shirt kunnen samenstellen en deze vervolgens kunnen bestellen en/of opslaan bij hun favorieten. Dit moet ten alle tijden werken ook wanneer javascript en css uitstaat.

## Wireflows

![Frontend ](https://github.com/NielsPeeters96/Nerdy-tshirt/blob/master/Public/img/Home.jpg)

![Frontend ](https://github.com/NielsPeeters96/Nerdy-tshirt/blob/master/Public/img/Bestelpagina.jpg)

![Frontend ](https://github.com/NielsPeeters96/Nerdy-tshirt/blob/master/Public/img/Overzichtspagina.jpg)

## Lagen

### Functional
- De HTML content is zichtbaar en werkend
- Formulier is te gebruiken en te versturen
- Radio buttons worden aangepast en staan in de URL
- Kleur kan worden aangepast met de button
- Shirt is te delen via de URL, hiermee krijgt de bezoeker precies hetzelfde shirt te zien

### Usable
- CSS zorgt voor verbetering van de app
- Hiërarchie beter zichtbaar

### Pleasurable
- T-shirt past zich aan op basis van geselecteerde opties
- Het formulier wordt opgeslagen in localstorage

## Browsers
Google Chrome

Opera

Safari

Edge

## Vereisten

- Gegevens maker (naam, telefoon of email)
- Kleur t-shirt
- Tekst t-shirt
- Maat t-shirt
- M/V
- Verder gaan waar je gebleven bent/ontwerp herzien
- Validatie: alles moet zijn ingevuld. Geef duidelijke foutmeldingen
- Gebruiker moet meerdere t-shirts kunnen maken en herzien, en moet dus een overzichtspagina hebben.
- Bestel pagina om een ontwerp kopen en laten maken

## Progressive Enhancements

### history.Pushstate
 
Gebruik ik om de URL te veranderen naar een deelbare link, zodat je je t-shirt kan delen met anderen die dan op dezelfde pagina uitkomen.

![image](https://user-images.githubusercontent.com/78353674/112846184-0fdc5180-90a6-11eb-8bab-41d7228b0256.png)

### Localstorage

![image](https://user-images.githubusercontent.com/78353674/112964126-52ef0100-9148-11eb-9c33-7fdead1c3813.png)

Heb ik gebruikt, om het formulier op te slaan wanneer je de website ververst. De bolletjes die voorheen waren aangekruist blijven aangekruist als je de pagina vernieuwd.

### T-shirt inkleuren

![image](https://user-images.githubusercontent.com/78353674/112964043-3f439a80-9148-11eb-8205-9ca3d62d82df.png)

Met zowel EJS als Javascript gedaan. Met Javascript wordt het t-shirt vanzelf ingekleurd en hoef je de pagina niet te verversen. Wanneer Javascript uitstaat komt er een knop waarmee je de kleur kan veranderen.

### Tekst toevoegen (vergeten)

Dit was een vereiste die bij de opdracht hoort. In de applicatie heb ik deze nu toegevoegd en werkt geleidelijk met het t-shirt. Dit werkt echter alleen met Javascript. Wanneer Javascript uitstaat dan zie je in de winkelmand pas de tekst en de daadwerkelijke kleur die je erbij hebt gekozen.
