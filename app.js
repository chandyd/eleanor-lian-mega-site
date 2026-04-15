// Eleanor Lian Complete Experience - Main JavaScript

// Utility function to encode image paths for URLs
function encodeImagePath(path) {
    // Encode each segment separately to preserve slashes
    return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

// Character Data
const characters = [
    {
        id: 1,
        name: "AILEEN",
        title: "Princess of Nuvolandia",
        image: "images/Sigillum Maximum Personaggi/Aileen, 18 anni.png",
        description: "Reincarnation of Aer, must save her kingdom from petrification. Master of cloud magic and light powers.",
        tags: ["Protagonist", "Nuvolana", "Light Magic", "Princess", "Reincarnation"],
        story: "Sigillum Maximum",
        powers: ["Cloud molding", "Teleportation", "Levitation", "Light magic"],
        relationships: ["Dorcha (love interest)", "Grogher (companion)", "Queen Eloria (mother)"]
    },
    {
        id: 2,
        name: "DORCHA",
        title: "Former Dark Lord",
        image: "images/Sigillum Maximum Personaggi/Dorcha.png",
        description: "Redeemed antagonist turned companion and love interest of Aileen. Master of combat and former dark magic.",
        tags: ["Co-protagonist", "Human", "Redemption", "Love Interest", "Former Villain"],
        story: "Sigillum Maximum",
        powers: ["Dark magic (former)", "Combat skills", "Leadership"],
        relationships: ["Aileen (love interest)", "Grogher (ally)"]
    },
    {
        id: 3,
        name: "GROGHER",
        title: "Cloud Creature",
        image: "images/Sigillum Maximum Personaggi/Grogher su Sidae.jpg",
        description: "Loyal companion who can transform into a dragon. Protector and friend to Aileen throughout her journey.",
        tags: ["Companion", "Creature", "Dragon", "Loyal", "Shape-shifter"],
        story: "Sigillum Maximum",
        powers: ["Shape-shifting", "Flight", "Cloud manipulation"],
        relationships: ["Aileen (companion)", "Dorcha (ally)"]
    },
    {
        id: 4,
        name: "QUEEN ELORIA",
        title: "Queen of Nuvolandia",
        image: "images/Sigillum Maximum Personaggi/Regina Eloria.png",
        description: "Mother of Aileen who sacrifices herself to save her daughter and kingdom. Master of royal cloud magic.",
        tags: ["Queen", "Mother", "Nuvolana", "Sacrifice", "Royalty"],
        story: "Sigillum Maximum",
        powers: ["Royal magic", "Cloud manipulation", "Protective spells"],
        relationships: ["Aileen (daughter)", "King Eadwig (husband)"]
    },
    {
        id: 5,
        name: "KING EADWIG",
        title: "King of Nuvolandia",
        image: "images/Sigillum Maximum Personaggi/Re Eadwig.png",
        description: "Father of Aileen, petrified with the kingdom. Wise ruler and master of ancient cloud magic.",
        tags: ["King", "Father", "Nuvolana", "Petrified", "Royalty"],
        story: "Sigillum Maximum",
        powers: ["Royal magic", "Cloud manipulation"],
        relationships: ["Aileen (daughter)", "Queen Eloria (wife)"]
    },
    {
        id: 6,
        name: "ASHER",
        title: "Mysterious Ally",
        image: "images/Sigillum Maximum Personaggi/Asher.png",
        description: "Enigmatic character with hidden powers and connections to the ancient magic of Nuvolandia.",
        tags: ["Mysterious", "Ally", "Ancient Magic", "Secret"],
        story: "Sigillum Maximum",
        powers: ["Unknown magic", "Stealth", "Wisdom"],
        relationships: ["Aileen (ally)"]
    },
    {
        id: 7,
        name: "THALÌA (18 anni)",
        title: "Young Protagonist",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio/Thalìa 18 anni.jpeg",
        description: "Young woman caught in the mystery of the ice castle and the enigmatic clown.",
        tags: ["Protagonist", "Young Adult", "Mystery"],
        story: "The Clown and the Ice Castle",
        powers: ["Curiosity", "Bravery", "Intuition"],
        relationships: ["George (companion)"]
    },
    {
        id: 8,
        name: "GEORGE (adulto)",
        title: "Companion",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio/George adulto.png",
        description: "Adult companion in the journey through the mysterious ice castle.",
        tags: ["Companion", "Adult", "Support"],
        story: "The Clown and the Ice Castle",
        powers: ["Protection", "Wisdom", "Loyalty"],
        relationships: ["Thalìa (companion)"]
    },
    {
        id: 9,
        name: "MAJORY",
        title: "Mysterious Figure",
        image: "images/Sigillum Maximum Personaggi/Majory.png",
        description: "Enigmatic character with connections to the ancient prophecies of Nuvolandia.",
        tags: ["Mysterious", "Prophet", "Ancient"],
        story: "Sigillum Maximum",
        powers: ["Prophecy", "Ancient knowledge", "Mystic arts"],
        relationships: ["Asher (ally)", "Aileen (guide)"]
    },
    {
        id: 10,
        name: "RAERTHA",
        title: "Majestic Creature",
        image: "images/Sigillum Maximum Personaggi/Raertha.jpg",
        description: "Powerful creature companion with deep connections to the magical world.",
        tags: ["Creature", "Companion", "Magical"],
        story: "Sigillum Maximum",
        powers: ["Strength", "Loyalty", "Magical bond"],
        relationships: ["Aileen (companion)", "Grogher (friend)"]
    },
    {
        id: 11,
        name: "HELBERT",
        title: "Young Companion",
        image: "images/Sigillum Maximum Personaggi/Helbert.png",
        description: "Young character who plays a key role in the unfolding story.",
        tags: ["Young", "Companion", "Innocent"],
        story: "Sigillum Maximum",
        powers: ["Innocence", "Hope", "Curiosity"],
        relationships: ["Aileen (protector)"]
    },
    {
        id: 12,
        name: "THALÌA (8 anni)",
        title: "Child Protagonist",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio/Thalìa 8 anni.jpeg",
        description: "Young version of Thalìa, showing her early connection to the mystery.",
        tags: ["Child", "Protagonist", "Innocent"],
        story: "The Clown and the Ice Castle",
        powers: ["Imagination", "Curiosity", "Bravery"],
        relationships: ["George (friend)"]
    },
    {
        id: 13,
        name: "GEORGE (6 anni)",
        title: "Child Companion",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio/George 6 anni.png",
        description: "Young version of George, companion in early adventures.",
        tags: ["Child", "Companion", "Loyal"],
        story: "The Clown and the Ice Castle",
        powers: ["Loyalty", "Friendship", "Courage"],
        relationships: ["Thalìa (friend)"]
    },
    {
        id: 14,
        name: "BEIN",
        title: "Protagonist of Colors",
        image: "images/Bein/Bein.jpg",
        description: "Main character exploring the magical world of colors and emotions.",
        tags: ["Protagonist", "Color Magic", "Explorer"],
        story: "Bein and the World of Colors",
        powers: ["Color magic", "Emotional resonance", "Exploration"],
        relationships: ["Family (support)", "Friends (companions)"]
    },
    {
        id: 15,
        name: "CARYL",
        title: "Supporting Character",
        image: "images/Bein/Caryl.jpg",
        description: "Important character in Bein's journey through the world of colors.",
        tags: ["Support", "Companion", "Colorful"],
        story: "Bein and the World of Colors",
        powers: ["Support", "Wisdom", "Guidance"],
        relationships: ["Bein (companion)", "Sammy (connection)"]
    },
    {
        id: 16,
        name: "SAMMY",
        title: "Magical Companion",
        image: "images/Bein/Sammy.jpg",
        description: "Magical companion in the world of colors with unique abilities.",
        tags: ["Magical", "Companion", "Colorful"],
        story: "Bein and the World of Colors",
        powers: ["Magic", "Transformation", "Color manipulation"],
        relationships: ["Caryl (connection)", "Bein (companion)"]
    }
];

// Stories Data
const stories = [
    {
        id: 1,
        title: "Sigillum Maximum",
        subtitle: "The Seal of the Seven Secrets",
        genre: "YA Epic Fantasy",
        description: "Aileen, princess of Nuvolandia, discovers she is the reincarnation of Aer and must save her kingdom from petrification. In a journey through magical worlds, she must reconstruct the Sigillum Maximum with the help of Dorcha, Grogher, and other allies.",
        wordCount: 108000,
        chapters: 47,
        characters: 50,
        worlds: 5,
        themes: ["Redemption", "Growth", "Sacrifice", "Love", "Destiny"],
        coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "The Clown & Ice Castle",
        subtitle: "A Dark Fantasy Tale",
        genre: "Dark Fantasy",
        description: "A haunting tale of a mysterious clown and an enchanted ice castle that holds secrets of a forgotten kingdom. As the protagonist delves deeper, they uncover truths about themselves and the nature of reality.",
        wordCount: 85000,
        chapters: 35,
        characters: 25,
        worlds: 3,
        themes: ["Mystery", "Identity", "Memory", "Loss", "Discovery"],
        coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Bein & World of Colors",
        subtitle: "A Magical Adventure",
        genre: "Magical Adventure",
        description: "Bein's journey through a world where colors hold magical powers and every hue tells a different story. A vibrant adventure exploring the relationship between perception, emotion, and reality.",
        wordCount: 92000,
        chapters: 40,
        characters: 30,
        worlds: 4,
        themes: ["Color", "Perception", "Emotion", "Creativity", "Transformation"],
        coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Worlds Data
const worlds = [
    {
        id: 1,
        name: "Nuvolandia",
        description: "The cloud kingdom where Aileen was born. A floating realm of ever-changing clouds, magical architecture, and ancient secrets.",
        magicSystem: "Cloud Magic - Manipulation of clouds, weather, and atmospheric phenomena",
        inhabitants: "Nuvolana (cloud people), magical creatures",
        keyLocations: ["Royal Palace", "Cloud Gardens", "Ancient Library", "Petrified Forest"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "The Ice Castle Realm",
        description: "A frozen kingdom trapped in eternal winter, home to the mysterious ice castle and its enigmatic clown guardian.",
        magicSystem: "Ice Magic - Control over cold, ice, and winter elements",
        inhabitants: "Ice spirits, winter creatures, the Clown",
        keyLocations: ["Ice Castle", "Frozen Lake", "Crystal Caves", "Snow Forest"],
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "World of Colors",
        description: "A vibrant dimension where each color has its own magical properties and emotional resonance.",
        magicSystem: "Color Magic - Powers derived from different colors and their emotional associations",
        inhabitants: "Color beings, chromatic creatures, artists",
        keyLocations: ["Rainbow Valley", "Prism Palace", "Monochromatic Desert", "Chromatic Sea"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Eleanor Lian Complete Experience initialized');
    
    // Initialize navigation
    initNavigation();
    
    // Initialize gallery
    initGallery();
    
    // Initialize character cards
    initCharacterCards();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize animations
    initAnimations();
    
    // Initialize download buttons
    initDownloads();
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Gallery
function initGallery() {
    const gallery = document.querySelector('.gallery');
    
    if (!gallery) return;
    
    // Sample images from the workspace
    const imageFiles = [
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Aileen e i suoi genitori.png"), title: "Aileen e I Suoi Genitori (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Aileen ragazzina, 13 anni.png"), title: "Aileen Ragazzina, 13 Anni (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Aileen su Raertha.jpg"), title: "Aileen su Raertha (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Aileen, 18 anni.png"), title: "Aileen, 18 Anni (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Asher.png"), title: "Asher (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Aura e Amina.png"), title: "Aura e Amina (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Dorcha 1.png"), title: "Dorcha 1 (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Dorcha.png"), title: "Dorcha (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/FHEALL ANZIANA.png"), title: "FHEALL ANZIANA (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Grogher 2.png"), title: "Grogher 2 (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Grogher su Sidae.jpg"), title: "Grogher su Sidae (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Grogher, Dorcha e Aileen alla festa degli gnomi.png"), title: "Grogher, Dorcha e Aileen alla Festa degli Gnomi (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Helbert.png"), title: "Helbert (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Hercules.jpg"), title: "Hercules (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Majory.png"), title: "Majory (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Raertha Hercules e Sidae che dorme.jpg"), title: "Raertha Hercules e Sidae Che Dorme (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Raertha Hercules e Sidae.jpg"), title: "Raertha Hercules e Sidae (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Raertha ed Hercules.jpg"), title: "Raertha Ed Hercules (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Raertha.jpg"), title: "Raertha (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Re Bàistec.png"), title: "Re Bàistec (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Re Eadwig.png"), title: "Re Eadwig (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Regina Eloria.png"), title: "Regina Eloria (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/Sidae.jpg"), title: "Sidae (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/dorcha e aileen a cavallo.png"), title: "Dorcha e Aileen A Cavallo (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/dorcha e aileen a fine storia.png"), title: "Dorcha e Aileen A Fine Storia (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Sigillum Maximum Personaggi/dorcha e aileen nella grotta.png"), title: "Dorcha e Aileen nella Grotta (Sigillum Maximum Character)" },
        { path: encodeImagePath("images/Il Pagliaccio e il Castello di Ghiaccio/George 6 anni.png"), title: "George 6 Anni (The Clown and the Ice Castle)" },
        { path: encodeImagePath("images/Il Pagliaccio e il Castello di Ghiaccio/George adulto.png"), title: "George Adulto (The Clown and the Ice Castle)" },
        { path: encodeImagePath("images/Il Pagliaccio e il Castello di Ghiaccio/Thalìa 18 anni.jpeg"), title: "Thalìa 18 Anni (The Clown and the Ice Castle)" },
        { path: encodeImagePath("images/Il Pagliaccio e il Castello di Ghiaccio/Thalìa 8 anni.jpeg"), title: "Thalìa 8 Anni (The Clown and the Ice Castle)" },
        { path: encodeImagePath("images/Bein/Anton contro Sammy.jpg"), title: "Anton Contro Sammy (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Anton.jpg"), title: "Anton (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Bein abbraccia la mamma e il fratellino.jpg"), title: "Bein Abbraccia la Mamma e il Fratellino (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Bein e famiglia dormono al campeggio.jpg"), title: "Bein e Famiglia Dormono al Campeggio (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Bein e famiglia intorno al fuoco al campeggio.jpg"), title: "Bein e Famiglia Intorno al Fuoco al Campeggio (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Bein solo in casa.jpg"), title: "Bein Solo In Casa (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Bein sotto il tavolo durante il terremoto.jpg"), title: "Bein Sotto il Tavolo Durante il Terremoto (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Bein.jpg"), title: "Bein (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Caryl e Sammy.jpg"), title: "Caryl e Sammy (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Caryl.jpg"), title: "Caryl (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Fearfy.jpg"), title: "Fearfy (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Fìonn.jpg"), title: "Fìonn (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/I chitarristi di Qiotàr.jpg"), title: "I Chitarristi di Qiotàr (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Maith.jpg"), title: "Maith (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Mamma Caryl versione blu.jpg"), title: "Mamma Caryl Versione Blu (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Mamma Caryl.jpg"), title: "Mamma Caryl (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Sammy bacia Caryl al chiar di luna.jpg"), title: "Sammy Bacia Caryl al Chiar di Luna (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Sammy.jpg"), title: "Sammy (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Bein/Wacky.jpg"), title: "Wacky (Bein and the World of Colors)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/1. AILEEN NELLA SUA CASETTA SULL'ALBERO.png"), title: "1. Aileen nella SUA CASETTA SULL'ALBERO (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/10. Aileen corre verso il castello.png"), title: "10. Aileen Corre Verso il Castello (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/2. Dorcha, cavaliere nero.png"), title: "2. Dorcha, Cavaliere Nero (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/3. Lotta tra Eadwig e Dorcha.png"), title: "3. Lotta Tra Eadwig e Dorcha (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/4. Eloria scappa.png"), title: "4. Eloria Scappa (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/5. Aileen ed Eloria si incontrano.png"), title: "5. Aileen Ed Eloria Si Incontrano (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/6.pergamena distrutta.png"), title: "6.pergamena Distrutta (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/7. Eloria impone le mani.png"), title: "7. Eloria Impone le Mani (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/8. Re Eadwg e i suoi soldati morti e tramutati in pietra.png"), title: "8. Re Eadwg e I Suoi Soldati Morti e Tramutati In Pietra (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 1/9. eloria statua.png"), title: "9. Eloria Statua (Sigillum Maximum Part 1)" },
        { path: encodeImagePath("images/Sigillum Maximum 2/1. Aileen corre lungo i corridoi pietrificati del castello.png"), title: "1. Aileen Corre Lungo I Corridoi Pietrificati del Castello (Sigillum Maximum Part 2)" },
        { path: encodeImagePath("images/Sigillum Maximum 2/2. Aileen trova Helbert.png"), title: "2. Aileen Trova Helbert (Sigillum Maximum Part 2)" },
        { path: encodeImagePath("images/Sigillum Maximum 2/3. Aileen culla Helbert.png"), title: "3. Aileen Culla Helbert (Sigillum Maximum Part 2)" },
        { path: encodeImagePath("images/Sigillum Maximum 2/4. Aileen vicino al padre pietrificato cambia.png"), title: "4. Aileen Vicino al Padre Pietrificato Cambia (Sigillum Maximum Part 2)" },
        { path: encodeImagePath("images/Sigillum Maximum 2/5. Dorcha incede per i corridoi del castello degli orchi.jpg"), title: "5. Dorcha Incede per I Corridoi del Castello degli Orchi (Sigillum Maximum Part 2)" },
        { path: encodeImagePath("images/Sigillum Maximum 2/6. Dorcha sollevato dal colletto da Bàistec.jpg"), title: "6. Dorcha Sollevato Dal Colletto da Bàistec (Sigillum Maximum Part 2)" },
        { path: encodeImagePath("images/Sigillum Maximum 28/1. Aileen si risveglia nella camera degli gnomi.png"), title: "1. Aileen Si Risveglia nella Camera degli Gnomi (Sigillum Maximum Part 28)" },
        { path: encodeImagePath("images/Sigillum Maximum 28/2. Aileen indossa il vestito dono degli gnomi.png"), title: "2. Aileen Indossa il Vestito Dono degli Gnomi (Sigillum Maximum Part 28)" },
        { path: encodeImagePath("images/Sigillum Maximum 28/3. Aileen allo specchio non si riconosce.png"), title: "3. Aileen Allo Specchio Non Si Riconosce (Sigillum Maximum Part 28)" },
        { path: encodeImagePath("images/Sigillum Maximum 28/4. Majory davanti al pugnale.png"), title: "4. Majory Davanti al Pugnale (Sigillum Maximum Part 28)" },
        { path: encodeImagePath("images/Sigillum Maximum 28/5. Asher piange Majory.png"), title: "5. Asher Piange Majory (Sigillum Maximum Part 28)" },
        { path: encodeImagePath("images/Sigillum Maximum 29/1. Aileen e Dorcha alla festa degli gnomi.png"), title: "1. Aileen e Dorcha alla Festa degli Gnomi (Sigillum Maximum Part 29)" },
        { path: encodeImagePath("images/Sigillum Maximum 29/2. Grogher e i ragazzi dagli gnomi.png"), title: "2. Grogher e I Ragazzi dagli Gnomi (Sigillum Maximum Part 29)" },
        { path: encodeImagePath("images/Sigillum Maximum Sirene/1. camera sirene aileen.png"), title: "1. Camera Sirene Aileen (Sigillum Maximum - Sirens)" },
        { path: encodeImagePath("images/Sigillum Maximum Sirene/2. Aileen, la prima notte dalle sirene.png"), title: "2. Aileen, la Prima Notte dalle Sirene (Sigillum Maximum - Sirens)" },
        { path: encodeImagePath("images/Sigillum Maximum Sirene/3. Aileen con Aura e Amina.png"), title: "3. Aileen con Aura e Amina (Sigillum Maximum - Sirens)" },
        { path: encodeImagePath("images/Sigillum Maximum Sirene/4. Aileen nell'abito madreperla da sirena.png"), title: "4. Aileen Nell'abito Madreperla da Sirena (Sigillum Maximum - Sirens)" },
        { path: encodeImagePath("images/Sigillum Maximum Sirene/5. Aileen sirena.png"), title: "5. Aileen Sirena (Sigillum Maximum - Sirens)" },
        { path: encodeImagePath("images/Sigillum Maximum Sirene/6. Aileen e Anam.jpg"), title: "6. Aileen e Anam (Sigillum Maximum - Sirens)" },
    ];
    
    // Clear gallery
    gallery.innerHTML = '';
    
    // Add images to gallery
    imageFiles.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <a href="${image.path}" data-lightbox="gallery" data-title="${image.title}">
                <img src="${image.path}" alt="${image.title}" onerror="this.src='https://via.placeholder.com/300x300/1a1a2e/e94560?text=Image+Not+Found'">
                <div class="overlay">
                    <p>${image.title}</p>
                </div>
            </a>
        `;
        
        gallery.appendChild(galleryItem);
    });
    
    // Initialize Lightbox
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2'
        });
    }
}

// Character Cards
function initCharacterCards() {
    const characterGrid = document.querySelector('.character-grid');
    
    if (!characterGrid) return;
    
    // Clear existing cards
    characterGrid.innerHTML = '';
    
    // Add character cards
    characters.forEach((character, index) => {
        const card = document.createElement('div');
        card.className = 'character-card fade-in';
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.innerHTML = `
            <div class="character-image">
                <img src="${encodeImagePath(character.image)}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/300x250/1a1a2e/e94560?text=${character.name}'">
            </div>
            <div class="character-content">
                <h3>${character.name}</h3>
                <p class="text-gold"><i class="fas fa-crown"></i> ${character.title}</p>
                <p>${character.description}</p>
                <div class="character-tags">
                    ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-outline mt-2" onclick="showCharacterDetails(${character.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        `;
        
        characterGrid.appendChild(card);
    });
}

// Character Details Modal
function showCharacterDetails(characterId) {
    const character = characters.find(c => c.id === characterId);
    
    if (!character) return;
    
    const modalHtml = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                <div class="modal-header">
                    <h2>${character.name}</h2>
                    <p class="text-gold">${character.title}</p>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${encodeImagePath(character.image)}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/e94560?text=${character.name}'">
                    </div>
                    <div class="modal-info">
                        <h3>About</h3>
                        <p>${character.description}</p>
                        
                        <h3>Story</h3>
                        <p><strong>${character.story}</strong></p>
                        
                        <h3>Powers & Abilities</h3>
                        <ul>
                            ${character.powers.map(power => `<li>${power}</li>`).join('')}
                        </ul>
                        
                        <h3>Relationships</h3>
                        <ul>
                            ${character.relationships.map(rel => `<li>${rel}</li>`).join('')}
                        </ul>
                        
                        <h3>Tags</h3>
                        <div class="character-tags">
                            ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Create and show modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'characterModal';
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    
    // Add close modal function to window
    window.closeModal = function() {
        const modal = document.getElementById('characterModal');
        if (modal) {
            modal.remove();
        }
    };
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('characterModal');
    if (modal) {
        modal.remove();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Eleanor Lian Complete Experience initialized');
    
    // Initialize navigation
    initNavigation();
    
    // Initialize gallery
    initGallery();
    
    // Initialize character cards
    initCharacterCards();
    
    // Initialize story sections
    initStorySections();
    
    // Initialize world explorer
    initWorldExplorer();
});
