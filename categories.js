// categories.js - Zentrale Steuerung der Produkt-Einsortierung
const catMap = {
    // Getränke
    'en:beverages': 'Getränke', 
    'en:sodas': 'Getränke', 
    'en:juices': 'Getränke', 
    'en:waters': 'Getränke',
    'en:teas': 'Getränke',
    'en:coffees': 'Getränke',
    'en:alcoholic-beverages': 'Getränke',

    // Milchprodukte & Ersatz
    'en:dairy': 'Milchprodukte', 
    'en:dairy-substitutes': 'Milchprodukte/Ersatz', 
    'en:cheeses': 'Milchprodukte/Käse',
    'en:yogurts': 'Milchprodukte',
    'en:plant-milks': 'Milchprodukte/Ersatz',

    // Obst, Gemüse & Pflanzenbasiertes
    'en:fruits': 'Obst & Gemüse', 
    'en:vegetables': 'Obst & Gemüse',
    'en:plant-based-foods': 'Obst & Gemüse',
    'en:fruits-based-foods': 'Obst & Gemüse',
    'en:legumes': 'Obst & Gemüse',

    // Vorratsschrank & Basisprodukte
    'en:pantry': 'Vorratsschrank', 
    'en:cereals-and-potatoes': 'Vorratsschrank',
    'en:pasta': 'Vorratsschrank',
    'en:sauces': 'Vorratsschrank',
    'en:condiments': 'Vorratsschrank',
    'en:canned-foods': 'Vorratsschrank',
    'en:oils': 'Vorratsschrank',

    // Aufstriche
    'en:spreads': 'Aufstriche', 
    'en:hazelnut-spreads': 'Aufstriche', 
    'en:chocolate-spreads': 'Aufstriche',
    'en:sweet-spreads': 'Aufstriche',
    'en:salted-spreads': 'Aufstriche',

    // Snacks & Süßes
    'en:snacks': 'Snacks & Süßes', 
    'en:confectioneries': 'Snacks & Süßes', 
    'en:chocolate': 'Snacks & Süßes',
    'en:sweet-snacks': 'Snacks & Süßes',
    'en:salty-snacks': 'Snacks & Süßes',
    'en:biscuits-and-cakes': 'Snacks & Süßes',
    'en:desserts': 'Snacks & Süßes',

    // Frühstück
    'en:breakfast-cereals': 'Frühstück', 
    'en:breakfasts': 'Frühstück',

    // Fleisch, Fisch & Wurst
    'en:meats': 'Fleisch & Wurst', 
    'en:prepared-meats': 'Fleisch & Wurst',
    'en:fish-and-seafood': 'Fleisch & Wurst',
    'en:seafood': 'Fleisch & Wurst',
    'en:eggs': 'Fleisch & Wurst',

    // Fertiggerichte & Tiefkühl
    'en:frozen-foods': 'Tiefkühl',
    'en:meals': 'Fertiggerichte',
    'en:pizzas': 'Fertiggerichte',

    // Haushalt, Drogerie & Technik
    'en:batteries': 'Haushalt & Technik', 
    'en:cleaning-products': 'Haushalt', 
    'en:hygiene': 'Drogerie',
    'en:cosmetics': 'Drogerie',
    'en:health-supplements': 'Drogerie'
};

function determineCategory(tags, productName) {
    let category = "Sonstiges";
    const nameLower = (productName || "").toLowerCase();
    if (tags && tags.length > 0) {
        for (let tag of tags) {
            if (catMap[tag]) { category = catMap[tag]; break; }
        }
    }
    if (category === "Sonstiges") {
        if (nameLower.includes("batterie") || nameLower.includes("energy")) category = "Haushalt & Technik";
        else if (!tags || tags.length === 0) category = "Haushalt";
    }
    return category;
}