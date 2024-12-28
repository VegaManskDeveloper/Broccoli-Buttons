document.addEventListener('DOMContentLoaded', () => {
  // Controleer de huidige hash bij het laden van de pagina
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1); // Verwijdert de # uit de hash
        showSection(sectionId);
    } else {
        // Toon standaard de home sectie
        showSection('home');
    }


    const selectedOption = document.getElementById('selectedLanguage');
    const optionsContainer = document.querySelector('.options-container');
    const optionsList = document.querySelectorAll('.option');

    // Navigatie links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Klik op de geselecteerde optie opent/sluit de optiescontainer
    selectedOption.addEventListener('click', (event) => {
        event.stopPropagation(); // Voorkom dat het klikken op de container sluit
        optionsContainer.classList.toggle('show'); // Toon/verberg de opties
    });

    // Klikken op een optie in de container selecteert de taal
    optionsList.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation(); // Voorkom dat de container sluit
            const lang = option.getAttribute('data-lang');
            updateContentLanguage(lang);
            selectedOption.innerHTML = option.innerHTML; // Update de geselecteerde optie met de vlag en taal
            optionsContainer.classList.remove('show'); // Sluit de dropdown
            localStorage.setItem('selectedLang', lang); // Sla de geselecteerde taal op
        });
    });

    // Klik ergens anders op de pagina sluit de dropdown
    document.addEventListener('click', () => {
        optionsContainer.classList.remove('show');
    });

    // Navigatie functionaliteit voor het tonen van secties
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Voorkom standaardgedrag
            const sectionId = link.getAttribute('href').substring(1); // Haal de id van de sectie op (zonder '#')
            showSection(sectionId);
        });
    });

    // Standaard taal instellen
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
        updateContentLanguage(savedLang);
        const initialOption = document.querySelector(`.option[data-lang="${savedLang}"]`);
        if (initialOption) {
            selectedOption.innerHTML = initialOption.innerHTML;
        }
    } else {
        // Detecteer de browsertaal als er geen opgeslagen taal is
        const userLang = navigator.language || navigator.userLanguage; // Haal de taal van de browser op
        const langCode = userLang.split('-')[0]; // Gebruik alleen de eerste twee letters (bv. 'en', 'es')

        // Controleer of de gedetecteerde taal beschikbaar is in de opties
        const initialOption = document.querySelector(`.option[data-lang="${langCode}"]`) || document.querySelector(`.option[data-lang="en"]`); // Valt terug op Engels als de taal niet wordt gevonden
        const langToUse = initialOption ? initialOption.getAttribute('data-lang') : 'en';

        updateContentLanguage(langToUse);
        selectedOption.innerHTML = initialOption.innerHTML; // Update de geselecteerde optie met de vlag en taal
    }

    // Functie om de bewegende achtergrondpositie te behouden
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const background = document.querySelector('.moving-background');
    
        // Verplaats de achtergrond subtiel op basis van muisbeweging
        background.style.backgroundPositionX = `${clientX / 20}px`;
        background.style.backgroundPositionY = `${clientY / 20}px`;
    });
});

// Functie om secties weer te geven/verbergen
function showSection(sectionId) {
    // Verberg alle secties
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Toon de gekozen sectie
    document.getElementById(sectionId).style.display = 'block';

    // Update de inhoudstaal bij het wisselen van secties
    const currentLang = localStorage.getItem('selectedLang') || 'en';
    updateContentLanguage(currentLang);
}

function updateContentLanguage(lang) {
    const contentElements = document.querySelectorAll('.intro-content, .privacy-content');
    contentElements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}
