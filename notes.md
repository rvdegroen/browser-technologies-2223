## Support detection

- soms weet je niet of een browser een feature gebruikt, hoe doe je dat, dat ga je nu leren

in css: @supports 

1. kijk of supports wordt gesupport

```
@supports (display:grid) {
    div {
        display:grid
    }
}

// of

@supports (margin: -10em) {
    div {
        background:red;
    }
}

// als het werkt, dan wordt de background red

```

als ie het doet, dan wordt het uitgevoerd

2. kijken of grid wordt gesupport

```
@supports not (display:grid) {
    div {
        float:left;
    }
}

```

In javascript; object detection

```
//oeroude voorbeeld in netscape 3?

var di = document.images;
if (di) {
    di[0].onmouseover = functon() {
        this.src="mouseover.gif";
    }
}

```

principe bestaat nog steeds met modern voorbeeld:

```
if (window.localStorage {
    localSorage.setItem(etc);
}

if (localStorage) {
    localStorage.setItem(etc);
})

// kan handig zijn voor de eindopdracht als je cookies gebruikt, want die gaan we ook uitzetten. 

``` 

## Webviews

- webview is een extra browser op je mobiele telefoon die gemaakt is voor apps en niet door de gebruiker. 
 vb: als je op een link klikt, dan opent deze in de webview van facebook. - mensen die niet zo nauw hebben met privacy, want erft permissions van de app.

WEBVIEW HERKENNEN: verson/4.0 of w.v. in de browser

## BROWSERS EINDOPDRACHT

- moet werken in chrome, safari, firefox
- werken op mobiel samsung internet
- testen op screenread of op je mobiel of je laptop (open source heb je ook)
- testen op 1 van de volgende browsers:
    - lynx : text online / command line
    - princeXML : princexml.com > convert html to pdf, bedoeld om boeken te maken in html en css, makkelijk om te testen, want dat zegt ie gwn (miss deze wel, pagina nummers)
    - Flow : alleen mac en linux > op linux
    - kaiOs : op docent's kleine telefoontje (geen smartphone)
    - UC : browser van tencent (onderdeel van alibaba), chromium based browser maar wijkt het meest ervan af > veel gebruikt in china wss

het moet ZO GOED MOGELIJK werken (hoeft niet helemaal). 

css day: of 8 en 9?? 10e juni zuiderkerk pp.koch@gmail.com met een motivatie waarom je wilt komen
