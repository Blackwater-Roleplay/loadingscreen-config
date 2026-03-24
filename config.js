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
    date: "24.03.2026",
    preview: "Neue Crime-Route, Wirtschaftsanpassungen, Crafting-Updates und Fahrzeugänderungen",
    changes: [
      "Neue Drogenroute eingeführt, die von allen Bürgern genutzt werden kann",
      "Dealer-System überarbeitet (Fraktionsdealer nur mit Qualifizierung, Abnehmer frei ansprechbar)",
      "Nahkampfwaffen angepasst",
      "Bodo’s Import verkauft nur noch an Auto- und Motorradhandel",
      "Recycling Ronny verkauft keine Plastiktüten und Verpackungsbänder mehr",
      "Medikamente sind nun stackbar, Stackgröße von Grillitems erhöht",
      "Lifeinvader- und Racing-Tablet haben neue Icons erhalten",
      "Chemielabor und Waffenteilefabrik haben neue Rezepte erhalten",
      "PD-Ausrüstungssystem fertiggestellt",
      "Bootswerkstatt bei der Bootsfabrik hinzugefügt (für alle Werkstätten nutzbar)",
      "Buffalo ST PI Handling angepasst"
    ]
  },
  {
    version: "Patchnotes",
    date: "22.03.2026",
    preview: "Große Housing-Erweiterung, Systemverbesserungen, Respawn-Update und Transportänderungen",
    changes: [
      "Über 230 neue mietbare Häuser außerhalb der Stadt und im Luxussegment hinzugefügt",
      "Fehler beim Betreten/Spawnen in Wohnungen (Tod, Fallen, Verletzungen) behoben",
      "Mietpreis-Anzeige korrigiert",
      "Neue Badezimmer-Möbel und dekorative Wasserwand hinzugefügt",
      "Durchsuchungssystem angepasst, Trainingswaffen und Forensiklager für PD eingeführt",
      "Neues Respawn-System mit eigenem Screen eingeführt (kein Finishen mehr möglich)",
      "S-Bahnen und Züge fahren wieder, Haltestellen auf der Karte markiert",
      "Sozialwohnungen näher an Infrastruktur verlegt und im Tutorial hervorgehoben"
    ]
  },
  {
    version: "Patchnotes",
    date: "19.03.2026",
    preview: "Neue Häuser in Sandy Shores und Grapeseed sowie Anpassung der Rocker-Route",
    changes: [
      "83 neue Häuser in Sandy Shores und Grapeseed hinzugefügt",
      "28 Villen sind nun mietbar",
      "Rocker-Route im Crime-System angepasst"
    ]
  }
]



















