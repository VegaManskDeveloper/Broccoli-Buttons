document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage; // Haal de browsertaal op
    const lang = userLang.split('-')[0]; // Neem de eerste twee letters van de taalcode (bv. 'en', 'es', etc.)
    
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
});
