// test.js - Tests de personnalité pour Eloria

// Données pour le Test 1 - This or That
const test1Data = {
    title: "This or That",
    questions: [
        {
            id: 1,
            text: "Ton ambiance préférée",
            options: [
                {
                    type: "THIS",
                    image: "test1clair.png",
                    description: "Intérieur épuré, clair",
                    tag: "minimalisme"
                },
                {
                    type: "THAT",
                    image: "test1.jpg",
                    description: "Intérieur chaleureux et coloré",
                    tag: "audace"
                }
            ]
        },
        {
            id: 2,
            text: "Ton accessoire préféré",
            options: [
                {
                    type: "THIS",
                    image: "test2.png",
                    description: "Sac à main en cuir simple",
                    tag: "élégance"
                },
                {
                    type: "THAT",
                    image: "test2b.png",
                    description: "Accessoire original, motifs colorés",
                    tag: "créativité"
                }
            ]
        },
        {
            id: 3,
            text: "Ton style vestimentaire",
            options: [
                {
                    type: "THIS",
                    image: "test3.jpg",
                    description: "Tenue casual et classique",
                    tag: "confort"
                },
                {
                    type: "THAT",
                    image: "test3b.jpg",
                    description: "Look fashion et tendance",
                    tag: "audace"
                }
            ]
        },
        {
            id: 4,
            text: "Ta couleur dominante",
            options: [
                {
                    type: "THIS",
                    image: "test4.jpg",
                    description: "Tons neutres",
                    tag: "minimalisme"
                },
                {
                    type: "THAT",
                    image: "test4b.jpg",
                    description: "Couleurs vives",
                    tag: "créativité"
                }
            ]
        },
        {
            id: 5,
            text: "Ta source d'inspiration",
            options: [
                {
                    type: "THIS",
                    image: "test5.jpeg",
                    description: "Nature et sérénité",
                    tag: "douceur"
                },
                {
                    type: "THAT",
                    image: "test5b.jpg",
                    description: "Ville et dynamisme",
                    tag: "audace"
                }
            ]
        }
    ],
    results: {
        "audace": {
            title: "L'Audacieuse Moderne",
            description: "Tu es une personne audacieuse et dynamique qui aime sortir des sentiers battus. Ton énergie est communicative et tu inspires ton entourage par ton courage et ton originalité. Tu n'as pas peur d'exprimer ta personnalité à travers tes choix, que ce soit dans ta décoration, ta mode ou tes activités."
        },
        "minimalisme": {
            title: "La Minimaliste Épurée",
            description: "Tu privilégies la simplicité, l'ordre et l'harmonie. Ton univers est épuré et réfléchi, chaque élément a sa place et sa raison d'être. Tu trouves la beauté dans la sobriété et tu cultives un espace de vie qui respire la sérénité et la clarté d'esprit."
        },
        "créativité": {
            title: "La Créative Colorée",
            description: "Ton imagination est sans limites et tu vois le monde à travers un prisme coloré. Tu exprimes ta personnalité unique à travers des choix audacieux et créatifs. Tu inspires les autres par ton originalité et ta capacité à transformer l'ordinaire en extraordinaire."
        },
        "élégance": {
            title: "L'Élégante Raffinée",
            description: "Tu as un goût sûr pour les choses belles et intemporelles. Ton style est sophistiqué sans être prétentieux, et tu valorises la qualité sur la quantité. Tu inspires par ta grâce naturelle et ton attention aux détails qui font toute la différence."
        },
        "confort": {
            title: "La Confortable Authentique",
            description: "Tu privilégies l'authenticité et le bien-être avant tout. Ton style reflète ta personnalité vraie et décontractée. Tu créés des espaces où il fait bon vivre et tu inspires par ton approche naturelle et sans prétention de la vie."
        },
        "douceur": {
            title: "La Douce Rêveuse",
            description: "Tu es sensible et connectée à la nature. Tu trouves l'inspiration dans la beauté simple des choses et tu cultives un environnement apaisant et harmonieux. Ta douceur naturelle inspire la sérénité autour de toi."
        },
        "mixte": {
            title: "Le Profil Équilibré",
            description: "Tu es un mélange harmonieux de différentes influences ! Tu sais équilibrer audace et minimalisme, créativité et élégance. Cette polyvalence fait de toi une personne adaptable et nuancée, capable d'apprécier différentes facettes de la vie."
        }
    }
};

// Données pour le Test 2 - Quel type de fille es-tu ?
const test2Data = {
    title: "Quel type de fille es-tu ?",
    questions: [
        {
            id: 1,
            text: "Ton activité parfaite un dimanche ?",
            options: [
                {
                    text: "Rester chez moi avec un bon livre ou une série douce",
                    profile: "Rêveuse",
                    icon: "book"
                },
                {
                    text: "Travailler sur mes projets et objectifs perso",
                    profile: "Boss Girl",
                    icon: "briefcase"
                },
                {
                    text: "Créer, dessiner, ou sortir improviser quelque chose de fun",
                    profile: "Créative",
                    icon: "palette"
                }
            ]
        },
        {
            id: 2,
            text: "Ton outfit préféré ?",
            options: [
                {
                    text: "Robe fluide et couleurs pastel",
                    profile: "Rêveuse",
                    icon: "heart"
                },
                {
                    text: "Tailleur chic ou ensemble monochrome",
                    profile: "Boss Girl",
                    icon: "user-tie"
                },
                {
                    text: "Vêtements originaux, imprimés, accessoires qui brillent",
                    profile: "Créative",
                    icon: "star"
                }
            ]
        },
        {
            id: 3,
            text: "Ta playlist ?",
            options: [
                {
                    text: "Lo-fi, musique calme, love songs",
                    profile: "Rêveuse",
                    icon: "music"
                },
                {
                    text: "Motivation, Beyoncé, rap ambitieux",
                    profile: "Boss Girl",
                    icon: "bullhorn"
                },
                {
                    text: "Électro, pop alternative, K-pop",
                    profile: "Créative",
                    icon: "bolt"
                }
            ]
        },
        {
            id: 4,
            text: "Ton feed Instagram idéal ?",
            options: [
                {
                    text: "Esthétique douce, ambiance vintage ou cottagecore",
                    profile: "Rêveuse",
                    icon: "camera"
                },
                {
                    text: "Minimaliste, clean, branding maîtrisé",
                    profile: "Boss Girl",
                    icon: "chart-line"
                },
                {
                    text: "Coloré, spontané, artistique",
                    profile: "Créative",
                    icon: "paint-brush"
                }
            ]
        },
        {
            id: 5,
            text: "Ta force principale ?",
            options: [
                {
                    text: "L'empathie et l'écoute",
                    profile: "Rêveuse",
                    icon: "hands-helping"
                },
                {
                    text: "L'organisation et la détermination",
                    profile: "Boss Girl",
                    icon: "tasks"
                },
                {
                    text: "L'originalité et l'adaptabilité",
                    profile: "Créative",
                    icon: "lightbulb"
                }
            ]
        }
    ],
    results: {
        "Rêveuse": {
            title: "La Douce Rêveuse",
            description: "Tu es calme, intuitive et sensible. Ton univers est rempli de poésie, de douceur et de petits plaisirs simples. Tu trouves la beauté dans les détails et tu inspires par ta gentillesse naturelle et ton imagination fertile. Les autres se sentent en confiance avec toi car tu sais écouter et comprendre les émotions.",
            colorClass: "profil-reveuse"
        },
        "Boss Girl": {
            title: "La Boss Girl",
            description: "Ambitieuse et focus, tu avances avec clarté dans tes projets. Tu inspires par ta force et ton style affirmé. Ton organisation et ta détermination te permettent d'atteindre tes objectifs avec efficacité. Les autres admirent ton leadership naturel et ta capacité à transformer les idées en réalité.",
            colorClass: "profil-boss"
        },
        "Créative": {
            title: "La Créative Épicée",
            description: "Originale et pleine d'idées, tu oses l'inattendu. Ton énergie dynamise ton entourage. Tu vois le monde différemment et tu transformes chaque situation en opportunité créative. Ton esprit innovant et ton audace inspirent ceux qui t'entourent à sortir de leur zone de confort.",
            colorClass: "profil-creative"
        },
        "mixte": {
            title: "Le Profil Équilibré",
            description: "Tu es un mélange unique de différentes personnalités ! Tu combines la sensibilité de la Rêveuse, la détermination de la Boss Girl et la créativité de la Créative. Cette polyvalence fait de toi une personne adaptable et complète, capable de comprendre et de naviguer dans différentes situations avec aisance.",
            colorClass: "profil-mixte"
        }
    }
};

// Données pour le Test 3 - Péchés Capitaux
const test3Data = {
    title: "Quel est votre péché capital dominant ?",
    questions: [
        {
            id: 1,
            text: "Votre plus grande frustration vient souvent du fait que :",
            options: [
                {
                    text: "Les autres ne reconnaissent pas vos mérites ou vos talents.",
                    value: 1
                },
                {
                    text: "Vous n'avez jamais assez de sécurité, de ressources ou de confort matériel.",
                    value: 2
                },
                {
                    text: "Quelqu'un d'autre possède ou réussit quelque chose que vous voulez.",
                    value: 3
                },
                {
                    text: "Vous êtes confronté à l'injustice, à la bêtise ou à la lenteur des autres.",
                    value: 4
                },
                {
                    text: "Vous vous ennuyez, manquez d'excitation ou de connexion intense.",
                    value: 5
                },
                {
                    text: "Vous devez vous priver d'un plaisir immédiat (nourriture, boisson, détente).",
                    value: 6
                },
                {
                    text: "Vous devez faire un effort qui vous semble inutile ou fastidieux.",
                    value: 7
                }
            ]
        },
        {
            id: 2,
            text: "Face à un objectif désiré, vous êtes prêt à :",
            options: [
                {
                    text: "Tout faire pour être le meilleur, quitte à écraser gentiment la concurrence.",
                    value: 1
                },
                {
                    text: "Économiser, accumuler, ou planifier long terme pour l'acquérir.",
                    value: 2
                },
                {
                    text: "Observer et comparer votre situation à celle des autres pour vous motiver.",
                    value: 3
                },
                {
                    text: "Franchir les obstacles avec une énergie déterminée, voire agressive.",
                    value: 4
                },
                {
                    text: "Suivre votre désir du moment, quitte à changer de cap si l'aventure appelle.",
                    value: 5
                },
                {
                    text: "Vous récompenser d'abord, justifiant que 'la vie est courte'.",
                    value: 6
                },
                {
                    text: "Remettre à plus tard, en espérant que les choses se fassent d'elles-mêmes.",
                    value: 7
                }
            ]
        },
        {
            id: 3,
            text: "Dans vos relations, ce qui vous blesse le plus est :",
            options: [
                {
                    text: "Être ignoré, sous-estimé ou non admiré.",
                    value: 1
                },
                {
                    text: "Qu'on profite de vous, de votre temps ou de vos ressources.",
                    value: 2
                },
                {
                    text: "De voir un proche donner plus à quelqu'un d'autre qu'à vous.",
                    value: 3
                },
                {
                    text: "Une trahison ou une parole irrespectueuse.",
                    value: 4
                },
                {
                    text: "La monotonie, l'absence de passion ou de nouveauté.",
                    value: 5
                },
                {
                    text: "Le sentiment de manque ou de restriction dans le plaisir partagé.",
                    value: 6
                },
                {
                    text: "Les demandes trop exigeantes ou émotionnellement drainantes.",
                    value: 7
                }
            ]
        },
        {
            id: 4,
            text: "Votre péché mignon (au sens propre ou figuré) est :",
            options: [
                {
                    text: "Vous mettre en valeur, même discrètement.",
                    value: 1
                },
                {
                    text: "Collectionner, économiser ou investir.",
                    value: 2
                },
                {
                    text: "Scruter les réussites des autres sur les réseaux sociaux.",
                    value: 3
                },
                {
                    text: "Argumenter avec véhémence pour avoir le dernier mot.",
                    value: 4
                },
                {
                    text: "Flirter, séduire, ou chercher l'intensité émotionnelle.",
                    value: 5
                },
                {
                    text: "Vous offrir des excès gourmands ou des plaisirs sensoriels.",
                    value: 6
                },
                {
                    text: "Dormir, procrastiner, ou éviter les obligations sociales.",
                    value: 7
                }
            ]
        },
        {
            id: 5,
            text: "En cas de stress, vous avez tendance à :",
            options: [
                {
                    text: "Vous isoler pour préserver votre image de force.",
                    value: 1
                },
                {
                    text: "Vous inquiéter pour l'avenir et vérifier vos possessions/économies.",
                    value: 2
                },
                {
                    text: "Vous focaliser sur ce que les autres ont et que vous n'avez pas.",
                    value: 3
                },
                {
                    text: "Exploser de colère ou ruminer en silence.",
                    value: 4
                },
                {
                    text: "Vous distraire par une recherche de sensations fortes ou de connexions.",
                    value: 5
                },
                {
                    text: "Vous consoler avec de la nourriture, des achats ou du divertissement.",
                    value: 6
                },
                {
                    text: "Abandonner la tâche stressante et vous échapper dans l'inaction.",
                    value: 7
                }
            ]
        }
    ],
    results: {
        "5-10": {
            title: "L'ORGUEIL 👑",
            description: "Votre moteur est la reconnaissance et le respect. Vous valorisez votre image, votre autonomie et votre supériorité. Votre écueil est le mépris, mais votre force est une confiance qui peut inspirer.",
            range: "5-10 points"
        },
        "11-15": {
            title: "L'AVARICE 💰",
            description: "Vous cherchez la sécurité par l'accumulation (biens, argent, connaissances). Votre peur est le manque, mais votre vertu cachée est la prévoyance et la capacité à gérer les ressources.",
            range: "11-15 points"
        },
        "16-20": {
            title: "L'ENVIE 👁️",
            description: "Vous êtes sensible aux inégalités et vous vous comparez souvent. Cela peut générer de l'amertume, mais aussi une puissante motivation pour vous dépasser et évoluer.",
            range: "16-20 points"
        },
        "21-25": {
            title: "LA COLÈRE 🔥",
            description: "Votre sens aigu de la justice et votre passion peuvent virer à l'impatience et à la rancune. Ce feu intérieur, bien canalisé, est aussi celui du courage et de l'action juste.",
            range: "21-25 points"
        },
        "26-30": {
            title: "LA LUXURE 💋",
            description: "Vous cherchez l'intensité, le plaisir des sens et la connexion passionnée. Vous craignez l'ennui. Cette soif de vie peut rendre chaque expérience riche et mémorable.",
            range: "26-30 points"
        },
        "31-35": {
            title: "LA GOURMANDISE ou LA PARESSE 🍰😴",
            description: "Vous aimez les plaisirs de la vie et avez du mal à vous modérer (Gourmandise), ou vous fuyez l'effort inutile (Paresse). Votre défi est la mesure, mais votre qualité est de savoir profiter de l'instant ou de préserver votre énergie.",
            range: "31-35 points"
        }
    },
    note: "Ce test est un outil d'introspection ludique. Chaque 'péché' recèle une énergie qui, conscientisée, peut devenir une force. La complexité humaine dépasse toujours les catégories."
};
// ==============================================
// PARTIE LOGIQUE - GESTION DES 3 TESTS (CORRIGÉ)
// ==============================================

// Variables d'état globales
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let test1Scores = {};
let test2Scores = {};
let test3Scores = {}; // Changé : maintenant un objet pour compter les occurrences

// Icônes pour le test 2
const icons = {
    book: '<i class="fas fa-book"></i>',
    briefcase: '<i class="fas fa-briefcase"></i>',
    palette: '<i class="fas fa-palette"></i>',
    heart: '<i class="fas fa-heart"></i>',
    'user-tie': '<i class="fas fa-user-tie"></i>',
    star: '<i class="fas fa-star"></i>',
    music: '<i class="fas fa-music"></i>',
    bullhorn: '<i class="fas fa-bullhorn"></i>',
    bolt: '<i class="fas fa-bolt"></i>',
    camera: '<i class="fas fa-camera"></i>',
    'chart-line': '<i class="fas fa-chart-line"></i>',
    'paint-brush': '<i class="fas fa-paint-brush"></i>',
    'hands-helping': '<i class="fas fa-hands-helping"></i>',
    tasks: '<i class="fas fa-tasks"></i>',
    lightbulb: '<i class="fas fa-lightbulb"></i>'
};

// Initialisation quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

// ==============================================
// GESTION DES ÉVÉNEMENTS
// ==============================================

function initializeEventListeners() {
    // Boutons de sélection des tests
    document.getElementById('test1Btn').addEventListener('click', () => startTest(1));
    document.getElementById('test2Btn').addEventListener('click', () => startTest(2));
    document.getElementById('test3Btn').addEventListener('click', () => startTest(3));
    
    // Boutons retour
    document.querySelectorAll('.back-to-menu').forEach(btn => {
        btn.addEventListener('click', backToMenu);
    });
    
    // Boutons suivant
    document.getElementById('test1NextBtn').addEventListener('click', () => nextQuestion(1));
    document.getElementById('test2NextBtn').addEventListener('click', () => nextQuestion(2));
    document.getElementById('test3NextBtn').addEventListener('click', () => nextQuestion(3));
}

// ==============================================
// FONCTIONS PRINCIPALES
// ==============================================

// Démarrer un test
function startTest(testNumber) {
    currentTest = testNumber;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Réinitialiser les scores selon le test
    if (testNumber === 1) {
        test1Scores = {};
        document.getElementById('testsMenu').classList.add('hidden');
        document.getElementById('test1Container').classList.add('active');
        loadQuestion(1);
    } else if (testNumber === 2) {
        test2Scores = { "Rêveuse": 0, "Boss Girl": 0, "Créative": 0 };
        document.getElementById('testsMenu').classList.add('hidden');
        document.getElementById('test2Container').classList.add('active');
        loadQuestion(2);
    } else if (testNumber === 3) {
        test3Scores = {}; // Réinitialiser l'objet
        document.getElementById('testsMenu').classList.add('hidden');
        document.getElementById('test3Container').classList.add('active');
        loadQuestion(3);
    }
}

// Retour au menu principal
function backToMenu() {
    // Cacher tous les conteneurs de test
    document.querySelectorAll('.test-container').forEach(container => {
        container.classList.remove('active');
    });
    
    // Afficher le menu
    document.getElementById('testsMenu').classList.remove('hidden');
}

// Charger une question
function loadQuestion(testNumber) {
    const testData = getTestData(testNumber);
    const question = testData.questions[currentQuestionIndex];
    
    // Mettre à jour le compteur et la barre de progression
    const progress = ((currentQuestionIndex + 1) / testData.questions.length) * 100;
    
    // Gestion selon le test
    if (testNumber === 1) {
        // Test 1 - This or That
        document.getElementById('test1Question').textContent = question.text;
        document.getElementById('test1Counter').textContent = `Question ${currentQuestionIndex + 1} sur ${testData.questions.length}`;
        document.getElementById('test1Progress').style.width = `${progress}%`;
        
        // Générer les options
        const optionsContainer = document.getElementById('test1Options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'image-option';
            optionDiv.innerHTML = `
                <div class="option-label">${option.type}</div>
                <img src="${option.image}" alt="${option.description}" class="option-image">
                <div class="option-description">${option.description}</div>
            `;
            
            optionDiv.addEventListener('click', () => selectOption(testNumber, index));
            optionsContainer.appendChild(optionDiv);
        });
        
        // Désactiver le bouton suivant
        document.getElementById('test1NextBtn').disabled = true;
        
    } else if (testNumber === 2) {
        // Test 2 - Type de fille
        document.getElementById('test2Question').textContent = question.text;
        document.getElementById('test2Counter').textContent = `Question ${currentQuestionIndex + 1} sur ${testData.questions.length}`;
        document.getElementById('test2Progress').style.width = `${progress}%`;
        
        // Générer les options
        const optionsContainer = document.getElementById('test2Options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'text-option';
            optionDiv.innerHTML = `
                <div class="option-icon">${icons[option.icon] || ''}</div>
                <div class="option-text">${option.text}</div>
            `;
            
            optionDiv.addEventListener('click', () => selectOption(testNumber, index));
            optionsContainer.appendChild(optionDiv);
        });
        
        // Désactiver le bouton suivant
        document.getElementById('test2NextBtn').disabled = true;
        
    } else if (testNumber === 3) {
        // Test 3 - Péchés Capitaux
        document.getElementById('test3Question').textContent = question.text;
        document.getElementById('test3Counter').textContent = `Question ${currentQuestionIndex + 1} sur ${testData.questions.length}`;
        document.getElementById('test3Progress').style.width = `${progress}%`;
        
        // Générer les options
        const optionsContainer = document.getElementById('test3Options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'text-option';
            optionDiv.innerHTML = `
                <div class="option-text">${option.text}</div>
                <div style="color: var(--dore-elegant); font-weight: 600; font-size: 14px;">(valeur : ${option.value})</div>
            `;
            
            optionDiv.addEventListener('click', () => selectOption(testNumber, index, option.value));
            optionsContainer.appendChild(optionDiv);
        });
        
        // Désactiver le bouton suivant
        document.getElementById('test3NextBtn').disabled = true;
    }
}

// Sélectionner une option
function selectOption(testNumber, optionIndex, optionValue = null) {
    const testData = getTestData(testNumber);
    const question = testData.questions[currentQuestionIndex];
    
    // Enregistrer la réponse
    if (testNumber === 3) {
        userAnswers[currentQuestionIndex] = { optionIndex, value: optionValue };
    } else {
        userAnswers[currentQuestionIndex] = optionIndex;
    }
    
    // Mettre à jour l'affichage selon le test
    if (testNumber === 1) {
        // Test 1 - This or That
        const options = document.querySelectorAll('#test1Options .image-option');
        options.forEach((option, index) => {
            const img = option.querySelector('.option-image');
            if (index === optionIndex) {
                option.classList.add('selected');
                img.classList.add('selected');
            } else {
                option.classList.remove('selected');
                img.classList.remove('selected');
            }
        });
        
        // Activer le bouton suivant
        document.getElementById('test1NextBtn').disabled = false;
        
    } else if (testNumber === 2) {
        // Test 2 - Type de fille
        const options = document.querySelectorAll('#test2Options .text-option');
        options.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
        
        // Activer le bouton suivant
        document.getElementById('test2NextBtn').disabled = false;
        
    } else if (testNumber === 3) {
        // Test 3 - Péchés Capitaux
        const options = document.querySelectorAll('#test3Options .text-option');
        options.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
        
        // Activer le bouton suivant
        document.getElementById('test3NextBtn').disabled = false;
    }
}

// Passer à la question suivante
function nextQuestion(testNumber) {
    const testData = getTestData(testNumber);
    
    // Enregistrer le score selon le test
    if (testNumber === 1) {
        // Test 1 - This or That
        const question = testData.questions[currentQuestionIndex];
        const selectedOptionIndex = userAnswers[currentQuestionIndex];
        const selectedOption = question.options[selectedOptionIndex];
        
        // Compter les tags
        const tag = selectedOption.tag;
        test1Scores[tag] = (test1Scores[tag] || 0) + 1;
        
    } else if (testNumber === 2) {
        // Test 2 - Type de fille
        const question = testData.questions[currentQuestionIndex];
        const selectedOptionIndex = userAnswers[currentQuestionIndex];
        const selectedOption = question.options[selectedOptionIndex];
        
        // Compter les profils
        const profile = selectedOption.profile;
        test2Scores[profile] = (test2Scores[profile] || 0) + 1;
        
    } else if (testNumber === 3) {
        // Test 3 - Péchés Capitaux
        const selectedAnswer = userAnswers[currentQuestionIndex];
        
        if (selectedAnswer && selectedAnswer.value !== undefined) {
            const sinValue = selectedAnswer.value;
            
            // CORRECTION : Compter les occurrences de chaque valeur (1-7)
            test3Scores[sinValue] = (test3Scores[sinValue] || 0) + 1;
        }
    }
    
    // Vérifier si c'est la dernière question
    if (currentQuestionIndex < testData.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(testNumber);
    } else {
        // Afficher les résultats
        showResults(testNumber);
    }
}

// Afficher les résultats
function showResults(testNumber) {
    if (testNumber === 1) {
        // Test 1 - This or That
        let maxScore = 0;
        let winningTags = [];
        
        for (const [tag, score] of Object.entries(test1Scores)) {
            if (score > maxScore) {
                maxScore = score;
                winningTags = [tag];
            } else if (score === maxScore) {
                winningTags.push(tag);
            }
        }
        
        const resultKey = winningTags.length > 1 ? 'mixte' : winningTags[0];
        const result = test1Data.results[resultKey];
        
        let resultHTML = '';
        if (winningTags.length > 1) {
            resultHTML = `
                <h2 class="result-title">${result.title}</h2>
                <div class="result-description">
                    <p>${result.description}</p>
                    <div class="result-tags">
                        Tes tags dominants : ${winningTags.join(', ')}
                    </div>
                </div>
            `;
        } else {
            resultHTML = `
                <h2 class="result-title">${result.title}</h2>
                <div class="result-description">
                    <p>${result.description}</p>
                </div>
            `;
        }
        
        resultHTML += `
            <div class="result-actions">
                <button class="restart-btn" onclick="restartTest(1)">Refaire le test</button>
                <a href="#" class="back-menu-link" onclick="backToMenu()">Retour au menu des tests</a>
            </div>
        `;
        
        document.getElementById('test1Container').classList.remove('active');
        document.getElementById('test1ResultContent').innerHTML = resultHTML;
        document.getElementById('test1Results').classList.add('active');
        
    } else if (testNumber === 2) {
        // Test 2 - Type de fille
        let maxScore = 0;
        let winningProfiles = [];
        
        for (const [profile, score] of Object.entries(test2Scores)) {
            if (score > maxScore) {
                maxScore = score;
                winningProfiles = [profile];
            } else if (score === maxScore) {
                winningProfiles.push(profile);
            }
        }
        
        const resultKey = winningProfiles.length > 1 ? 'mixte' : winningProfiles[0];
        const result = test2Data.results[resultKey];
        
        let resultHTML = '';
        if (winningProfiles.length > 1) {
            resultHTML = `
                <div class="${result.colorClass}">
                    <h2 class="result-title">${result.title}</h2>
                    <div class="result-description">
                        <p>${result.description}</p>
                        <div class="result-tags">
                            Tes profils dominants : ${winningProfiles.join(', ')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultHTML = `
                <div class="${result.colorClass}">
                    <h2 class="result-title">${result.title}</h2>
                    <div class="result-description">
                        <p>${result.description}</p>
                    </div>
                </div>
            `;
        }
        
        resultHTML += `
            <div class="result-actions">
                <button class="restart-btn" onclick="restartTest(2)">Refaire le test</button>
                <a href="#" class="back-menu-link" onclick="backToMenu()">Retour au menu des tests</a>
            </div>
        `;
        
        document.getElementById('test2Container').classList.remove('active');
        document.getElementById('test2ResultContent').innerHTML = resultHTML;
        document.getElementById('test2Results').classList.add('active');
        
    } else if (testNumber === 3) {
        // Test 3 - Péchés Capitaux (MÉTHODE CORRIGÉE)
        
        // 1. Trouver le péché dominant (celui avec le plus d'occurrences)
        let maxCount = 0;
        let dominantSinValue = 1;
        
        for (let sinValue = 1; sinValue <= 7; sinValue++) {
            const count = test3Scores[sinValue] || 0;
            if (count > maxCount) {
                maxCount = count;
                dominantSinValue = sinValue;
            }
        }
        
        // 2. Gérer les égalités
        const equalSins = [];
        for (let sinValue = 1; sinValue <= 7; sinValue++) {
            if ((test3Scores[sinValue] || 0) === maxCount) {
                equalSins.push(sinValue);
            }
        }
        
        // 3. Mapper les valeurs aux résultats
        const sinToResultMap = {
            1: "5-10",    // Orgueil
            2: "11-15",   // Avarice
            3: "16-20",   // Envie
            4: "21-25",   // Colère
            5: "26-30",   // Luxure
            6: "31-35",   // Gourmandise
            7: "31-35"    // Paresse
        };
        
        // 4. Obtenir la clé de résultat
        let resultKey;
        if (equalSins.length > 1) {
            resultKey = sinToResultMap[equalSins[0]];
        } else {
            resultKey = sinToResultMap[dominantSinValue];
        }
        
        // 5. Récupérer le résultat
        const result = test3Data.results[resultKey];
        const note = test3Data.note;
        
        // 6. Calculer le score total (pour information)
        let totalScore = 0;
        for (let sinValue = 1; sinValue <= 7; sinValue++) {
            const count = test3Scores[sinValue] || 0;
            totalScore += sinValue * count;
        }
        
        // 7. Noms des péchés
        const sinNames = {
            1: "Orgueil",
            2: "Avarice", 
            3: "Envie",
            4: "Colère",
            5: "Luxure",
            6: "Gourmandise",
            7: "Paresse"
        };
        
        // 8. Liste des péchés choisis
        const chosenSins = [];
        for (let sinValue = 1; sinValue <= 7; sinValue++) {
            const count = test3Scores[sinValue] || 0;
            if (count > 0) {
                chosenSins.push(`${sinNames[sinValue]} (×${count})`);
            }
        }
        
        // 9. Préparer le contenu HTML
        let resultHTML = '';
        
        if (equalSins.length > 1) {
            const equalSinNames = equalSins.map(v => sinNames[v]).join(' / ');
            resultHTML = `
                <h2 class="result-title">Profil Équilibré ⚖️</h2>
                <div class="result-description">
                    <p><strong>Score total :</strong> ${totalScore} points</p>
                    <p>Vous avez plusieurs péchés dominants : <strong>${equalSinNames}</strong></p>
                    <p>${result.description}</p>
                    <div class="result-tags">
                        <strong>Vos choix :</strong> ${chosenSins.join(', ')}
                    </div>
                </div>
            `;
        } else {
            resultHTML = `
                <h2 class="result-title">${result.title}</h2>
                <div class="result-description">
                    <p><strong>Score total :</strong> ${totalScore} points</p>
                    <p><strong>Votre péché dominant :</strong> ${sinNames[dominantSinValue]}</p>
                    <p>${result.description}</p>
                    <div class="result-tags">
                        <strong>Vos choix :</strong> ${chosenSins.join(', ')}
                    </div>
                </div>
            `;
        }
        
        resultHTML += `
            <div class="result-tags" style="margin-top: 20px; font-style: italic;">
                ${note}
            </div>
            <div class="result-actions">
                <button class="restart-btn" onclick="restartTest(3)">Refaire le test</button>
                <a href="#" class="back-menu-link" onclick="backToMenu()">Retour au menu des tests</a>
            </div>
        `;
        
        // 10. Afficher les résultats
        document.getElementById('test3Container').classList.remove('active');
        document.getElementById('test3ResultContent').innerHTML = resultHTML;
        document.getElementById('test3Results').classList.add('active');
    }
}

// Redémarrer un test
function restartTest(testNumber) {
    if (testNumber === 1) {
        document.getElementById('test1Results').classList.remove('active');
    } else if (testNumber === 2) {
        document.getElementById('test2Results').classList.remove('active');
    } else if (testNumber === 3) {
        document.getElementById('test3Results').classList.remove('active');
    }
    
    startTest(testNumber);
}

// Fonction utilitaire pour obtenir les données du test
function getTestData(testNumber) {
    if (testNumber === 1) {
        return test1Data;
    } else if (testNumber === 2) {
        return test2Data;
    } else if (testNumber === 3) {
        return test3Data;
    }
    return null;
}