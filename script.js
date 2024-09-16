document.addEventListener('DOMContentLoaded', () => {
    const selectedOption = document.getElementById('selectedLanguage');
    const optionsContainer = document.querySelector('.options-container');
    const optionsList = document.querySelectorAll('.option');

    selectedOption.addEventListener('click', () => {
        optionsContainer.classList.toggle('show');
    });

    optionsList.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateContentLanguage(lang);
            selectedOption.innerHTML = option.innerHTML; // Update de geselecteerde optie met de vlag en taal
            optionsContainer.classList.remove('show'); // Sluit de dropdown
            localStorage.setItem('selectedLang', lang); // Sla de geselecteerde taal op
        });
    });

    // Standaard taal instellen
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    updateContentLanguage(savedLang);
    const initialOption = document.querySelector(`.option[data-lang="${savedLang}"]`);
    if (initialOption) {
        selectedOption.innerHTML = initialOption.innerHTML;
    }
});

function updateContentLanguage(lang) {
    const contentElements = document.querySelectorAll('.intro-content');
    contentElements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}
