// Eleanor Lian Complete Experience - Main JavaScript

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
        { path: 'images/Sigillum Maximum Personaggi/Aileen, 18 anni.png', title: 'Aileen - Princess of Nuvolandia' },
        { path: 'images/Sigillum Maximum Personaggi/Dorcha.png', title: 'Dorcha - Former Dark Lord' },
        { path: 'images/Sigillum Maximum Personaggi/Grogher su Sidae.jpg', title: 'Grogher on Sidae' },
        { path: 'images/Sigillum Maximum Personaggi/Regina Eloria.png', title: 'Queen Eloria' },
        { path: 'images/Sigillum Maximum Personaggi/Re Eadwig.png', title: 'King Eadwig' },
        { path: 'images/Sigillum Maximum Personaggi/Asher.png', title: 'Asher' },
        { path: 'images/Sigillum Maximum Personaggi/Majory.png', title: 'Majory' },
        { path: 'images/Sigillum Maximum Personaggi/Raertha.jpg', title: 'Raertha' },
        { path: 'images/Sigillum Maximum Personaggi/FHEALL ANZIANA.png', title: 'Fheall Anziana' },
        { path: 'images/Sigillum Maximum Personaggi/dorcha e aileen nella grotta.png', title: 'Dorcha and Aileen in Cave' },
        { path: 'images/Sigillum Maximum Personaggi/Helbert.png', title: 'Helbert' },
        { path: 'images/Sigillum Maximum Personaggi/Grogher, Dorcha e Aileen alla festa degli gnomi.png', title: 'Party with Gnomes' },
        { path: 'images/Il Pagliaccio e il Castello di Ghiaccio/Thalìa 18 anni.jpeg', title: 'Thalìa (18 years)' },
        { path: 'images/Il Pagliaccio e il Castello di Ghiaccio/Thalìa 8 anni.jpeg', title: 'Thalìa (8 years)' },
        { path: 'images/Il Pagliaccio e il Castello di Ghiaccio/George adulto.png', title: 'George (adult)' },
        { path: 'images/Il Pagliaccio e il Castello di Ghiaccio/George 6 anni.png', title: 'George (6 years)' }
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
                <img src="${character.image}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/300x250/1a1a2e/e94560?text=${character.name}'">
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
                        <img src="${character.image}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/e94560?text=${character.name}'">
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
