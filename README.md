# 🛒 Smart Shopping List

Eine intelligente, browserbasierte Einkaufsliste mit integriertem Barcode-Scanner. Die App erkennt Produkte über die OpenFoodFacts-API, sortiert sie automatisch in Kategorien und hält die Liste durch intelligentes "Auto-Move-to-Bottom" übersichtlich.

## ✨ Features

*   **Barcode-Scanner:** Nutzt die Smartphone-Kamera zum direkten Scannen von Produkten.
*   **Automatische Kategorisierung:** Erkennt Produktgruppen (z.B. "Getränke", "Milchprodukte") automatisch.
*   **Intelligente Sortierung:** 
    *   Abgehakte Artikel rutschen innerhalb ihrer Kategorie nach unten.
    *   Vollständig erledigte Kategorien rutschen ans Ende der Liste.
    *   Visuelle Trennung zwischen offenen und erledigten Einkäufen.
*   **Produktdetails:** Zeigt Inhaltsstoffe und Marken direkt per Klick an.
*   **Offline-Ready:** Speichert deine Liste lokal im Browser (`LocalStorage`).
*   **Share-Funktion:** Kopiert die gesamte Liste (inkl. Status) formatiert in die Zwischenablage.

## 🚀 Installation

Da die App rein auf HTML, CSS und JavaScript basiert, ist keine Installation notwendig:

1.  Klone das Repository:
    ```bash
    git clone [https://github.com/Dtrieb/Einkaufsliste-mit-Barcode-Scanner.git](https://github.com/Dtrieb/Einkaufsliste-mit-Barcode-Scanner.git)
    ```
2.  Stelle sicher, dass die folgenden Dateien im selben Ordner liegen:
    *   `index.html` (Die Hauptanwendung)
    *   `categories.js` (Deine Logik zur Kategorisierung)
    *   `beep.ogg` (Optionaler Sound für den Scanner)
    *   `barcode.webp` (Icon für die Barcode-Anzeige)

3.  Öffne die `index.html` in einem modernen Browser. 
    *Hinweis: Für den Kamerazugriff (Scanner) muss die Seite über `https` oder `localhost` aufgerufen werden.*

## 🛠️ Technologien

*   [HTML5-QRCode](https://github.com/mebjas/html5-qrcode) - Leistungsstarke Library für den Barcode-Scanner.
*   [OpenFoodFacts API](https://world.openfoodfacts.org/data) - Datenbank für Produktinformationen.
*   **Vanilla JS & CSS3** - Schlank und schnell ohne schwere Frameworks.

## 📱 Bedienung

1.  **Hinzufügen:** Scanne ein Produkt oder füge es (je nach Ausbaustufe) manuell hinzu.
2.  **Mengen:** Nutze die `+` und `-` Buttons, um die Anzahl anzupassen.
3.  **Details:** Klicke auf den Produktnamen, um Inhaltsstoffe und den Barcode zu sehen.
4.  **Erledigen:** Klicke auf das Quadrat/Haken-Symbol. Der Artikel rutscht automatisch nach unten.
5.  **Teilen:** Nutze den "📋 Kopieren"-Button, um die Liste sortiert an Freunde oder Familie zu senden.

---
Erstellt von Dtrieb + Gemini (2026)
