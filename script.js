document.addEventListener('DOMContentLoaded', () => {
    // Haal de opgeslagen taal op uit localStorage, of gebruik de browsertaal als standaard
    const savedLang = localStorage.getItem('selectedLang');
    const userLang = savedLang || (navigator.language || navigator.userLanguage).split('-')[0];
    
    // Selecteer het dropdown-menu en stel de waarde in op de gedetecteerde of opgeslagen taal
    const languageSelector = document.getElementById('language');
    languageSelector.value = userLang;
    updateContentLanguage(userLang);
    
    // Verander de inhoud wanneer de gebruiker een nieuwe taal selecteert
    languageSelector.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        localStorage.setItem('selectedLang', selectedLang); // Sla de geselecteerde taal op
        updateContentLanguage(selectedLang);
    });
});

function updateContentLanguage(lang) {
    // Zoek naar de juiste content en toon deze
    const contentElements = document.querySelectorAll('.intro-content');
    let found = false;

    contentElements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
            found = true;
        } else {
            element.style.display = 'none';
        }
    });

    // Als de taal niet wordt gevonden, standaard naar Engels
    if (!found) {
        document.querySelector('[data-lang="en"]').style.display = 'block';
    }
}
