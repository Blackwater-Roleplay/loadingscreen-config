const tips = [
  {
    text: "Alt+F4 - Save dein Gear",
    sarkasmus: false,
  },
  {
    text: "Gelber Schnee schmeckt nach Zitrone und ist eine Delikatesse der Natur.",
    sarkasmus: false,
  },
  {
    text: '"Nein, "In meinen Augen sah das nicht so aus" - ist kein RP. Ignorier einfach wenn etwas nicht so ist wie es sein sollte.',
    sarkasmus: false,
  },
  {
    text: "In einer Großstadt ist jeder Bürger ein möglicher Zeuge. Handle entsprechend.",
    sarkasmus: false,
  },
  {
    text: "Emotes sind deine Körpersprache. Nutze sie.",
    sarkasmus: false,
  },
  {
    text: "Dein Charakter hat keine Superkräfte. Auch nicht, wenn du es dir wünschst.",
    sarkasmus: false,
  },
  {
    text: "Kämpfe nicht nur, weil du kannst. Kämpfe, weil es Sinn macht.",
    sarkasmus: false,
  },
  {
    text: "Heilung kostet Zeit – nicht nur Materialien.",
    sarkasmus: false,
  },
  {
    text: "Natürlich kannst du einfach in die Bank laufen und nach Geld fragen. Was soll schon schiefgehen?",
    sarkasmus: false,
  },
  {
    text: "Wer mitten auf der Straße verschwindet, hinterlässt Spuren.",
    sarkasmus: false,
  },
  {
    text: "Die Straße ist kein Bett. Denk daran, bevor du verschwindest.",
    sarkasmus: false,
  },
  {
    text: "Supermarkt? Nur für Notfälle. Echter Geschmack kommt aus der Küche der Stadt.",
    sarkasmus: false,
  },
  {
    text: "Mit Geld allein überlebst du nicht. Beziehungen, Entscheidungen und List sind wichtiger.",
    sarkasmus: false,
  },
  {
    text: "Gratis Geld vom Staat? Das Grundeinkommen ist für jeden da!",
    sarkasmus: false,
  },
  {
    text: "Geld wächst auf Bäumen? Nur in deinen Träumen. Spreche mit Menschen statt nur mit NPCs.",
    sarkasmus: false,
  },
  { 
    text: "Vergiss nicht: Verletzungen beeinflussen deine Geschichte.",
    sarkasmus: false,
  },
  { 
    text: "Rucksack zu voll? Zeit deinen Müll zu recyclen.",
    sarkasmus: false,
  },
  { 
    text: "Anschnallen ist kein Vorschlag, sondern Überlebenskunst.",
    sarkasmus: false,
  },
  { 
    text: "Schnall dich an. Dein Charakter will noch Geschichten erleben.",
    sarkasmus: false,
  },
  { 
    text: "Wer bei Schnee in Shorts läuft, zahlt mit Erkältung – oder Peinlichkeit.",
    sarkasmus: false,
  },
  { 
    text: "Wenn sie zahlenmäßig überlegen sind, wirst du kreativ oder tot.",
    sarkasmus: false,
  },
  { 
    text: "Fliehen ist keine Schande – es ist Überleben.",
    sarkasmus: false,
  },
  { 
    text: "Auch die Unterwelt hat Regeln... brich sie und du zahlst den Preis.",
    sarkasmus: false,
  },
  { 
    text: "Überlebe Kämpfe, indem du weißt, wann du rennst.",
    sarkasmus: false,
  },
  { 
    text: "Eine Maske rettet dich vor den Augen der Polizei – zumindest für einen Moment.",
    sarkasmus: false,
  },
  { 
    text: "Mach Pakete.",
    sarkasmus: false,
  },
  { 
    text: "Eine Untersuchung ergab, dass in 9/10 \"Fährt noch\"-Fällen, das Auto nicht mehr fahrtüchtig war.",
    sarkasmus: false,
  },
  { 
    text: "Wenn es kalt ist, zieh deinem Charakter etwas Warmes an. Männergrippe ist kein Spaß.",
    sarkasmus: false,
  },
  {
    text: "RP beginnt nicht mit der Waffe, sondern mit dem ersten Satz.",
    sarkasmus: false,
  },
  {
    text: "Dein Charakter weiß nicht alles – auch wenn du es weißt.",
    sarkasmus: false,
  },
  {
    text: "Wer rennt, verliert. Wer schreit, erst recht.",
    sarkasmus: false,
  },
  {
    text: "Nicht jede Beleidigung ist ein RP-Grund, aber jede Aktion eine RP-Folge.",
    sarkasmus: false,
  },
  {
    text: "RP heißt reagieren, nicht dominieren.",
    sarkasmus: false,
  },
  {
    text: "Manchmal ist Weglaufen klüger als Heldenmut.",
    sarkasmus: false,
  },
  {
    text: "Das Visum hat eine kürzere Laufdauer als der Ausweis – prüf es regelmäßig.",
    sarkasmus: false,
  },
  {
    text: "Für die Verlängerung deines Ausweises steht dir das DoI gerne zur Verfügung.",
    sarkasmus: false,
  },
  {
    text: "Halte die sozialen Netzwerke im Blick - vielleicht hat ja dein Lieblingsrestaurant geöffnet.",
    sarkasmus: false,
  },
  {
    text: "Ja, man kann hier angeln. Nein, das ist kein Bug.",
    sarkasmus: false,
  },
  {
    text: "Jobangebote warten überall – sie laufen dir nur nicht hinterher.",
    sarkasmus: false,
  },
  {
    text: "Nicht jede Maske passt überall – Stil ist Standortabhängig.",
    sarkasmus: false,
  },
  {
    text: "Hüte, Masken und Outfits unterscheiden sich je nach Ort – Überraschung inklusive.",
    sarkasmus: false,
  },
]

// Background images array
const backgroundImages = [
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild1.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild2.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild3.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild4.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild5.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild6.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild7.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild8.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild9.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild10.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild11.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild12.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild13.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild14.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild15.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild16.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild17.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild18.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild19.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild20.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild21.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild22.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild23.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild24.png",
  "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild25.png"
]


// Patch notes array with last 3 entries
const patchNotes = [
  {
    version: "Patchnotes",
    date: "13.03.2026",
    preview: "Neue Crime-Route, dynamischer Ressourcenhandel, Änderungen bei Händlern und Updates am Tablet",
    changes: [
      "App-Icons für Auktionshaus, Flappy Bird und Codenames wurden aktualisiert",
      "Bodo betreibt nun einen dynamischen Ressource -An- & Verkauf",
      "Das Schiff mit den Importwaren hat seinen Standort geändert",
      "Oma Hilde kauft und verkauft nun Obst und Gemüse (ebenfalls dynamisch)",
      "Ein privater Ressourcenhandel hat eröffnet",
      "Die BeanMachine wird demnächst ihre Pforten öffnen",
      "Harald ist an einen neuen Standort umgezogen",
      "Eine neue Route für MCs & Rocker wurde eingeführt",
      "Samen und Säure werden nicht mehr direkt über das Kartell verteilt",
      "Stattdessen gibt es nun mehrere Handlanger in der Stadt, die überzeugt werden müssen, mit euch zusammenzuarbeiten",
      "Gelingt es euch, sie auf eure Seite zu ziehen, versorgen sie euch täglich mit Samen",
      "Jede Route hat eigene Dealer, diese arbeiten nicht mit jeder Art von Gruppierung zusammen",
      "Dealer können außerdem von anderen Gruppen abgeworben werden – Loyalität ist also nicht garantiert"
    ],
  },

  {
    version: "Patchnotes",
    date: "12.03.2026",
    preview: "Serverumzug, neue tägliche Rennen, Dating-App auf dem Tablet und Vorbereitungen für Housing & Auktionshaus",
    changes: [
      "Der Server wurde erfolgreich umgezogen",
      "2 tägliche Rennen eingeführt",
      "Die täglichen Rennen besitzen einen zusätzlichen Preispool, der zusammen mit den Buy-Ins unter der Top 3 aufgeteilt wird",
      "Weitere Crime-Entwicklungen wurden im Hintergrund vorbereitet",
      "Vorbereitungen für eine Auktions-App getroffen",
      "Die Dating-App „Needy“ ist nun auf dem Tablet verfügbar",
      "Die Allgemeine Zulassungsstelle ist zur Kennzeichen-Zulassungsstelle umgezogen",
      "Der Schirmhändler ist nach Sandy Shores umgezogen",
      "Sum Ting Wong ist nun beim Baumarkt zu finden",
      "Die Map wurde aufgeräumt und verschiedene Blips entfernt, um die Übersicht zu verbessern",
      "Ein Tutorial-Guide wurde eingerichtet, der häufige Fragen zur Spielmechanik erklärt",
      "Das Tutorial wird laufend erweitert, um neuen Spielern den Einstieg zu erleichtern",
      "Das Tutorial ist im TAB-Menü ausstellbar",
      "Weitere Vorbereitungen fürs Housing wurden getroffen",
      "In den nächsten Tagen werden weitere Häuser mietbar sein",
      "Verbandskästen sind nun herstellbar",
      "Einige Fabriken haben neue Rezepte erhalten",
      "Der Lebensmittelmarkt hat zusätzliche Waren erhalten"
    ],
  },

  {
    version: "Patchnotes",
    date: "11.03.2026",
    preview: "Autoradio-Feature, Anpassungen am Shopraub-System und mehrere Housing-Bugfixes",
    changes: [
      "Bestimmte Lautsprecheritems können nun im Fahrzeug als Autoradio verwendet werden",
      "Die abgespielte Musik ist ausschließlich für Fahrzeuginsassen hörbar",
      "Das Autoradio kann nur vom Fahrer- oder Beifahrersitz gesteuert werden",
      "Anforderungen zum Starten eines Shopraubs wurden angepasst",
      "Fehler behoben, bei dem Spieler, die nicht Besitzer eines Hauses sind, im falschen Interior gespawnt sind",
      "Fehler behoben, bei dem Spieler beim Einloggen in Wohnungen sterben oder aus dem Interior fallen konnten"
    ],
  }
]





















