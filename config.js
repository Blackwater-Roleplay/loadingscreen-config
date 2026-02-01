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
    date: "01.02.2026",
    preview: "XML Export, Updates für Handy Apps und Tattoos",
    changes: [
     "NULLchat: Die Übersicht der beigetretenen Chatrooms ist nun scrollbar - Zuvor waren nur drei Chatrooms sichtbar",
      "Weazel News: Neue Rubrik „Werbung“ wurde hinzugefügt",
      "Die Rubriken Stellenanzeigen, Werbung und Verkaufsanzeigen werden nicht mehr auf der Startseite angezeigt, sondern ausschließlich in ihren jeweiligen Bereichen",
      "58 neue Männer-Tattoos & 57 neue Frauen-Tattoos",
      "Die Tattoos sind nun funktionsfähig, für alle Tattoostudios verfügbar und in den Listen der Studios eingepflegt",
      "Sum Ting Wong hat sich in Little Seoul niedergelassen und verkauft diverse Putzutensilien, inklusive Putzhandschuhe",
      "Das Charakteraussehen kann nun im XML-Format exportiert werden - Das ermöglicht den Import des Charakters (so wie er auf dem Server existiert) z. B. in Menyoo",
      "Befehl: menyooexport über die Ingame-F8-Konsole"
    ],
  },
      {
      version: "Patchnotes",
      date: "28.01.2026",
      preview: "Freizeitupdate",
      changes: [
        "Fischerei wurde auf das offene Meer ausgeweitet (Hochsee-Ausrüstung erforderlich). Neue, seltene Meeresbewohner wurden hinzugefügt. Bergung verlorener Fracht an den Küsten ist nun möglich",
        "Öffentliche Grillanlagen können von den Bürgerinnen und Bürger saniert und nutzbar gemacht werden. Grills können genutzt werden",
        "Angeschwemmte Fracht und versiegelte Güter können nun geborgen werden. Seltene Meeresfunde können geschätzt und verkauft werden",
        "Im späteren Verlauf des Abends öffnet die Bowlinghalle 'Pipeline Inn', nähe des Westhighways, ihre Pforten",
        "In der Stadt hat ein Musiklabel seine Pforten geöffnet. Dort können nun unter anderem Instrumente erworben werden"        
      ],
    },
    {
      version: "Patchnotes",
      date: "28.01.2026",
      preview: "Tattoostudio Update und Kleidung",
      changes: [
        "Tattoo-Maschinen sind jetzt als Item verfügbar (mit verschiedenen Animationen/Positionen für realistischeres Tätowieren)",
        "Tattooliegen & -stühle haben nun feste Sitz-/Liegepositionen über das Interaktionsmenü, inkl. Bauch- und Rückenlage",
        "Männer: 63 Hüte, 90 Oberteile, 7 Hosen, 4 Ketten, 19 Taschen und Rucksäcke, 5 Kopfhörer",
        "Frauen: 15 Hüte, 96 Oberteile, 11 Hosen, 41 Ketten, 40 Taschen und Rucksäcke, 12 Ohrringe, 1 Paar Schuhe"
      ],
    },
]














