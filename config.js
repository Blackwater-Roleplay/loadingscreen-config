const tips = [
  {
    text: "Alt+F4 - Save dein Gear",
    sarkasmus: true,
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
    sarkasmus: true,
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
  }
]

// Background images array
const backgroundImages = ["https://images.blackwater-roleplay.de/ingame/loading_screen/Bild3.png", "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild4.png", "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild1.png", "https://images.blackwater-roleplay.de/ingame/loading_screen/Bild2.png"]

// Patch notes array with last 3 entries
const patchNotes = [
  {
    version: "Patchnotes",
    date: "15.01.2025",
    preview: "Tuning, Crouchen optimiert, QoL/Perfomance-Changes, Bugfixes",
    changes: [
      "Crouch-System wurde komplett überarbeitet - reagiert direkt beim Loslassen der STRG-Taste",
      "Über Numpad kann das Mikrofon nun direkt gemutet werden",
      "Die Generierung von Kfz-Kennzeicehn wurde verbessert (Ziffer '0' wird zur besseren Lesbarkeit ausgeschlossen)",
      "Neuer Button in den Settings, um lokale Grafikfehler (wie verschwindende Straßen) sofort zu beheben (mit Cooldown)",
      "Mitteilungen bleiben nun 6 Sekunden statt bisher 3 (bessere Lesbarkeit)",
      "Die Suche in Listen (Inventar, Lager etc.) arbeitet nun effizienter",
      "",
      "Tuning steht in den Startlöchern",
      "Tuningvorschau für Werkstätten mit Preisberechnung und Bestellung der gewählten Teile",
      "Lackierfunktion mit freien Möglichkeiten der Farbwahl durch RGB Codes",
      "",
      "Fehler im Anrufverlauf korrigiert (ausgehende Anrufe wurden teils falsch angezeigt)",
      "Probleme mit Lock-Timeouts beim Charakter-Spawn behoben",
      "Automatische Löschung von alten Map-Entities und Offline-Charakteren",
      "Fehler behoben, bei dem Tasten beim Gedrückthalten mehrfach ausgelöst haben"
    ],
  },
  {
    version: "Patchnotes",
    date: "03.01.2026",
    preview: "Boxhandschuhe optimiert, Speisekarten für Unternehmen und diverse Bugfixes...",
    changes: [
      "Speisekarten-Item für Unternehmen",
      "Speisekarte am Ausschank für Unternehmen",
      "Schlagschaden stark verringert",
      "Boxhandschuhe überarbeitet (Es muss nur der Schlagende Handschuhe tragen)",
      "Boxhandschuhe machen ab einem gewissen HP-Wert keinen Schaden mehr",
      "Problem bei Schaden mit Schusswaffen beim Tragen von Boxhandschuhen behoben",
      "Fehler bei LKW-Crafting-Rezepten behoben, bei denen die Anzahl der Sitze/Scheiben nicht korrekt war",
    ],
  },
  {
    version: "Patchnotes",
    date: "31.12.2025",
    preview: "Neues Krankenhaus & Stadtpark, LKW's, Boxhandschuhe, Piercings und Schmuck",
    changes: [
      "Der Ponsonbys Designerladen hat neuen Schmuck, Kleidung & Accessoires bekommen",
      "Die Tattoostudios können nun Piercinge stechen",
      "Das Fitnessstudio in Sandy verkauft nun Boxhandschuhe (viel Spaß damit ♥)",
      "Neben PDM befindet sich nun ein neuer Stadtpark",
      "Das Krankenhaus ist umgezogen (altes Krankenhaus wurde entfernt)",
      "Es wurden weitere Unternehmen zugelassen",
      "Die LKW-Fabrik hat ihren Betrieb aufgenommen",
    ],
  },

]
