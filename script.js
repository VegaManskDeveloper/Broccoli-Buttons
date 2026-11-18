const UI_LABELS = {
    en: {
        skip: 'Skip to content',
        home: 'Home',
        mystery: 'EventWhisperer',
        contact: 'Contact',
        privacy: 'Privacy Statement',
        privacy_page: 'Full Privacy Page',
        back: 'Back to Broccoli Buttons'
    },
    es: {
        skip: 'Ir al contenido',
        home: 'Inicio',
        mystery: 'EventWhisperer',
        contact: 'Contacto',
        privacy: 'Declaración de Privacidad',
        privacy_page: 'Página de Privacidad Completa',
        back: 'Volver a Broccoli Buttons'
    },
    zh: {
        skip: '跳至正文',
        home: '主页',
        mystery: 'EventWhisperer',
        contact: '联系我们',
        privacy: '隐私声明',
        privacy_page: '完整隐私页面',
        back: '返回 Broccoli Buttons'
    },
    no: {
        skip: 'Hopp til innhold',
        home: 'Hjem',
        mystery: 'EventWhisperer',
        contact: 'Kontakt',
        privacy: 'Personvernerklæring',
        privacy_page: 'Fullstendig personvernside',
        back: 'Tilbake til Broccoli Buttons'
    },
    nl: {
        skip: 'Ga naar hoofdinhoud',
        home: 'Home',
        mystery: 'EventWhisperer',
        contact: 'Contact',
        privacy: 'Privacyverklaring',
        privacy_page: 'Volledige privacypagina',
        back: 'Terug naar Broccoli Buttons'
    },
    de: {
        skip: 'Zum Inhalt springen',
        home: 'Start',
        mystery: 'EventWhisperer',
        contact: 'Kontakt',
        privacy: 'Datenschutzerklärung',
        privacy_page: 'Vollständige Datenschutzseite',
        back: 'Zurück zu Broccoli Buttons'
    },
    fr: {
        skip: 'Aller au contenu',
        home: 'Accueil',
        mystery: 'EventWhisperer',
        contact: 'Contact',
        privacy: 'Politique de confidentialité',
        privacy_page: 'Page complète de confidentialité',
        back: 'Retour à Broccoli Buttons'
    }
};

let currentLang = 'en';

function resolveInitialLanguage() {
    const saved = localStorage.getItem('selectedLang');
    if (saved && UI_LABELS[saved]) {
        return saved;
    }
    const navLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
    return UI_LABELS[navLang] ? navLang : 'en';
}

function applyLocalizedUiLabels(lang) {
    const dict = UI_LABELS[lang] || UI_LABELS.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

function updateContentLanguage(lang) {
    const effLang = UI_LABELS[lang] ? lang : 'en';
    currentLang = effLang;
    applyLocalizedUiLabels(effLang);

    const contentElements = document.querySelectorAll('.intro-content, .privacy-content');
    contentElements.forEach(element => {
        const match = element.getAttribute('data-lang') === effLang;
        element.hidden = !match;
        element.style.display = match ? 'block' : 'none';
    });

    const optionsList = document.querySelectorAll('.option[data-lang]');
    const selectedButton = document.getElementById('selectedLanguage');
    optionsList.forEach(opt => {
        const isSel = opt.getAttribute('data-lang') === effLang;
        opt.setAttribute('aria-selected', isSel ? 'true' : 'false');
        if (isSel && selectedButton) {
            selectedButton.innerHTML = opt.innerHTML;
        }
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    if (sections.length === 0) {
        updateContentLanguage(currentLang);
        return;
    }
    sections.forEach(section => {
        section.hidden = true;
        section.style.display = 'none';
    });
    const target = document.getElementById(sectionId) || document.getElementById('home');
    if (target) {
        target.hidden = false;
        target.style.display = 'block';
    }
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
        const linkSec = (link.getAttribute('href') || '').substring(1);
        if (target && linkSec === target.id) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
    updateContentLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    currentLang = resolveInitialLanguage();

    const selectedButton = document.getElementById('selectedLanguage');
    const optionsContainer = document.querySelector('.options-container');
    const optionsList = Array.from(document.querySelectorAll('.option[data-lang]'));

    const closeMenu = (restoreFocus = false) => {
        if (!optionsContainer || !selectedButton) return;
        optionsContainer.classList.remove('show');
        selectedButton.setAttribute('aria-expanded', 'false');
        if (restoreFocus) {
            selectedButton.focus();
        }
    };

    const openMenu = () => {
        if (!optionsContainer || !selectedButton) return;
        optionsContainer.classList.add('show');
        selectedButton.setAttribute('aria-expanded', 'true');
    };

    if (selectedButton && optionsContainer) {
        selectedButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if (optionsContainer.classList.contains('show')) {
                closeMenu(false);
            } else {
                openMenu();
            }
        });

        selectedButton.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openMenu();
                const firstActive = optionsList.find(o => o.getAttribute('data-lang') === currentLang) || optionsList[0];
                if (firstActive) firstActive.focus();
            } else if (event.key === 'Escape') {
                closeMenu(true);
            }
        });
    }

    optionsList.forEach((option, idx) => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            const lang = option.getAttribute('data-lang');
            localStorage.setItem('selectedLang', lang);
            updateContentLanguage(lang);
            closeMenu(true);
        });

        option.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeMenu(true);
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                optionsList[(idx + 1) % optionsList.length].focus();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                optionsList[(idx - 1 + optionsList.length) % optionsList.length].focus();
            }
        });
    });

    document.addEventListener('click', () => {
        closeMenu(false);
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href') || '';
            if (href === '#main-stage') {
                const stage = document.getElementById('main-stage');
                if (stage) {
                    event.preventDefault();
                    stage.focus();
                }
                return;
            }
            if (href.length > 1) {
                const secId = href.substring(1);
                if (document.getElementById(secId)) {
                    event.preventDefault();
                    showSection(secId);
                    if (window.location.hash !== href) {
                        history.pushState(null, '', href);
                    }
                }
            }
        });
    });

    window.addEventListener('hashchange', () => {
        const h = window.location.hash ? window.location.hash.substring(1) : '';
        if (h && document.getElementById(h)) {
            showSection(h);
        }
    });

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        document.addEventListener('mousemove', (event) => {
            const background = document.querySelector('.moving-background');
            if (background) {
                background.style.backgroundPositionX = `${event.clientX / 20}px`;
                background.style.backgroundPositionY = `${event.clientY / 20}px`;
            }
        });
    }

    if (window.location.hash && window.location.hash.length > 1) {
        showSection(window.location.hash.substring(1));
    } else if (document.getElementById('home')) {
        showSection('home');
    } else {
        updateContentLanguage(currentLang);
    }
});
