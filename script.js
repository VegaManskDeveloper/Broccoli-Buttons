document.addEventListener('DOMContentLoaded', () => {
    const selectedOption = document.getElementById('selectedLanguage');
    const optionsContainer = document.querySelector('.options-container');
    const optionsList = document.querySelectorAll('.option');

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
});

function updateContentLanguage(lang) {
    const contentElements = document.querySelectorAll('.intro-content');
    contentElements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}
