// categories.js - Zentrale Steuerung der Produkt-Einsortierung
const catMap = {
    'en:beverages': 'Getränke', 'en:sodas': 'Getränke', 'en:juices': 'Getränke', 'en:waters': 'Getränke',
    'en:dairy': 'Milchprodukte', 'en:dairy-substitutes': 'Milchprodukte/Ersatz', 'en:cheeses': 'Milchprodukte/Käse',
    'en:fruits': 'Obst & Gemüse', 'en:vegetables': 'Obst & Gemüse',
    'en:pantry': 'Vorratsschrank', 'en:spreads': 'Aufstriche', 'en:hazelnut-spreads': 'Aufstriche', 'en:chocolate-spreads': 'Aufstriche',
    'en:snacks': 'Snacks & Süßes', 'en:confectioneries': 'Snacks & Süßes', 'en:chocolate': 'Snacks & Süßes',
    'en:breakfast-cereals': 'Frühstück', 'en:meats': 'Fleisch & Wurst', 'en:frozen-foods': 'Tiefkühl',
    'en:batteries': 'Haushalt & Technik', 'en:cleaning-products': 'Haushalt', 'en:hygiene': 'Drogerie'
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