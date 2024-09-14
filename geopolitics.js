(function(){
    var countries = ["United States", "China", "Germany", "France", "India", "Brazil", "Australia", "Canada", "United Kingdom", "Japan", "South Korea", "Mexico", "Turkey", "Saudi Arabia", "Nigeria", "Italy", "Spain", "Norway", "Sweden", "Netherlands", "Switzerland", "Egypt", "Indonesia", "Vietnam", "Thailand", "Malaysia", "Kenya", "Chile", "Poland", "Greece", "Finland", "Denmark", "Ireland", "New Zealand", "Singapore"];

    var topics = ["economic growth", "diplomatic relations", "trade agreements", "environmental policies", "military cooperation", "climate change initiatives", "energy policies", "human rights advocacy", "foreign aid programs", "election systems", "infrastructure development", "technology innovation", "space exploration", "immigration policies", "agricultural technology", "currency policies", "sanctions", "cybersecurity measures", "counter-terrorism efforts", "peacekeeping missions", "regional partnerships", "nuclear energy programs", "natural resource management", "public health strategies", "cultural exchange programs", "education systems", "transportation networks", "legal reforms", "tourism promotion", "financial markets", "renewable energy", "artificial intelligence research", "healthcare advancements", "marine conservation", "sustainable agriculture", "digital transformation", "space exploration partnerships"];

    var templates = [
        "Latest developments in {C}'s {T}",
        "How {C} is advancing in {T}",
        "{C}'s approach to {T}",
        "Impact of {T} on {C}'s economy",
        "Analysis of {C}'s {T}",
        "{C} and {C2} collaboration on {T}",
        "The future of {T} in {C}",
        "Overview of {T} initiatives in {C}",
        "Challenges in {C}'s {T}",
        "Role of {C} in global {T}",
        "Success stories in {C}'s {T}",
        "Comparing {T} strategies of {C} and {C2}",
        "Innovations in {T} from {C}",
        "Historical perspective on {T} in {C}",
        "Government policies on {T} in {C}",
        "Educational reforms in {C} related to {T}",
        "Cultural impacts of {T} in {C}",
        "Technological advancements in {C}'s {T}",
        "{C}'s contribution to international {T}",
        "Exploring {C}'s {T} milestones"
    ];

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    var template = getRandomElement(templates);
    var country = getRandomElement(countries);
    var country2 = getRandomElement(countries);

    // Ensure that the two countries are not the same
    while (country2 === country) {
        country2 = getRandomElement(countries);
    }

    var topic = getRandomElement(topics);

    // Optional: Filter out unlikely country-topic combinations
    var invalidCombinations = [
        // Add any country-topic pairs that should be avoided
        {country: "Switzerland", topic: "space exploration"},
        {country: "Kenya", topic: "nuclear energy programs"}
    ];

    function isValidCombination(country, topic) {
        for (var i = 0; i < invalidCombinations.length; i++) {
            if (invalidCombinations[i].country === country && invalidCombinations[i].topic === topic) {
                return false;
            }
        }
        return true;
    }

    // Regenerate topic if the combination is invalid
    var attempts = 0;
    while (!isValidCombination(country, topic) && attempts < 10) {
        topic = getRandomElement(topics);
        attempts++;
    }

    // Generate the query
    var query = template.replace(/{C2}/g, country2).replace(/{C}/g, country).replace(/{T}/g, topic);

    // Open the search in a new tab
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
})();
