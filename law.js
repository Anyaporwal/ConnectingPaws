document.addEventListener('DOMContentLoaded', function() {
    const laws = [
        {
            id: 1,
            title: "Prevention of Cruelty to Animals Act (1960)",
            category: "cruelty",
            description: "The primary law against animal cruelty in India. It defines what constitutes cruelty and establishes the Animal Welfare Board of India.",
            provisions: [
                "Prohibits beating, overworking, mutilating, or confining animals in cruel ways",
                "Regulates animal experimentation through CPCSEA",
                "Bans phooka (a cruel method to extract milk) and tail docking"
            ],
            penalty: "First offense: Fine up to ₹50. Repeat offense: Fine up to ₹100 and/or 3 months imprisonment",
            year: 1960
        },
        {
            id: 2,
            title: "Wildlife Protection Act (1972)",
            category: "wildlife",
            description: "Comprehensive legislation protecting wild animals, birds, and plants with different levels of protection based on species.",
            provisions: [
                "Classifies species into 6 Schedules (Schedule I has highest protection)",
                "Prohibits hunting of protected species",
                "Regulates trade in wildlife products",
                "Establishes protected areas like National Parks and Sanctuaries"
            ],
            penalty: "Hunting Schedule I animals: 3-7 years imprisonment + ₹10 lakh fine. Illegal trade: Up to ₹25 lakh fine + 7 years jail",
            year: 1972
        },
        {
            id: 3,
            title: "Animal Birth Control Rules (2001)",
            category: "pets",
            description: "Rules for humane management of street dogs through sterilization and vaccination instead of culling.",
            provisions: [
                "Mandates sterilization and vaccination of stray dogs",
                "Prohibits relocation of dogs unless medically necessary",
                "Municipalities must implement ABC programs"
            ],
            penalty: "Violations can be challenged in court under PCA Act",
            year: 2001
        },
        {
            id: 4,
            title: "Slaughter House Rules (2001)",
            category: "livestock",
            description: "Regulations for humane slaughter of animals for food purposes.",
            provisions: [
                "Requires stunning before slaughter (except for religious sacrifices)",
                "Bans street slaughter - must be done in licensed slaughterhouses",
                "Specifies humane handling and transport requirements"
            ],
            penalty: "Violations punishable under PCA Act",
            year: 2001
        },
        {
            id: 5,
            title: "Pet Shop Rules (2018)",
            category: "pets",
            description: "Regulations to ensure proper care of animals in pet shops.",
            provisions: [
                "Mandates proper housing, food, water and veterinary care",
                "Requires registration of all pet shops",
                "Prohibits sale of sick or unweaned animals"
            ],
            penalty: "Non-compliance can lead to cancellation of registration and fines",
            year: 2018
        },
        {
            id: 6,
            title: "Indian Penal Code Sections 428 & 429",
            category: "cruelty",
            description: "Provisions in the criminal code that punish malicious acts against animals.",
            provisions: [
                "Section 428: Mischief by killing or maiming animals (value ₹10+) - 2 years jail or fine or both",
                "Section 429: Mischief by killing or maiming cattle, etc. (value ₹50+) - 5 years jail or fine or both"
            ],
            penalty: "Up to 5 years imprisonment depending on the offense",
            year: 1860
        }
    ];
    const lawsContainer = document.getElementById('lawsContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    displayLaws(laws);
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter laws
            const filter = button.dataset.filter;
            if (filter === 'all') {
                displayLaws(laws);
            } else {
                const filteredLaws = laws.filter(law => law.category === filter);
                displayLaws(filteredLaws);
            }
        });
    });

    // Function to display laws
    function displayLaws(lawsToDisplay) {
        lawsContainer.innerHTML = '';
        
        if (lawsToDisplay.length === 0) {
            lawsContainer.innerHTML = '<p class="no-laws">No laws found in this category.</p>';
            return;
        }
        
        lawsToDisplay.forEach(law => {
            const lawCard = document.createElement('div');
            lawCard.className = 'law-card';
            
            // Create provisions list
            let provisionsList = '';
            law.provisions.forEach(provision => {
                provisionsList += `<li>${provision}</li>`;
            });
            
            lawCard.innerHTML = `
                <div class="law-card-header">
                    <h3>${law.title}</h3>
                </div>
                <div class="law-card-body">
                    <p>${law.description}</p>
                    <h4>Key Provisions:</h4>
                    <ul>${provisionsList}</ul>
                    <div class="penalty">
                        <strong>Penalties:</strong> ${law.penalty}
                    </div>
                    <p class="year">Year enacted: ${law.year}</p>
                </div>
            `;
            
            lawsContainer.appendChild(lawCard);
        });
    }
});