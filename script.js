// script.js

// Tekstinhoud in beide talen
const translations = {
  no: {
    title: "Broccoli Buttons",
    introText: "Er du klar til å trykke på knappen og avdekke mysteriet?",
    ctaButton: "Utforsk Broccoli",
    projectsTitle: "Våre Prosjekter",
    project1: "Prosjekt X",
    project2: "Skjulte Skatter",
    project3: "Den Ukjente Reisen",
    aboutTitle: "Om Oss",
    aboutText: "Vi er Broccoli Buttons, et team av drømmere, tenkere og oppdagere, på jakt etter det ukjente.",
    contactTitle: "Kontakt",
    contactText: "Vil du vite mer om Broccoli Buttons? Ta kontakt... hvis du tør.",
    contactButton: "Kontakt oss",
  },
  nl: {
    title: "Broccoli Knoppen",
    introText: "Ben je klaar om op de knop te drukken en het mysterie te onthullen?",
    ctaButton: "Ontdek Broccoli",
    projectsTitle: "Onze Projecten",
    project1: "Project X",
    project2: "Verborgen Schatten",
    project3: "De Onbekende Reis",
    aboutTitle: "Over Ons",
    aboutText: "Wij zijn Broccoli Knoppen, een team van dromers, denkers en ontdekkers, op zoek naar het onbekende.",
    contactTitle: "Contact",
    contactText: "Wil je meer weten over Broccoli Knoppen? Neem contact op... als je durft.",
    contactButton: "Contacteer ons",
  },
};

// Functie om de taal te wisselen
function switchLanguage(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("intro-text").innerText = translations[lang].introText;
  document.getElementById("cta-button").innerText = translations[lang].ctaButton;
  document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
  document.getElementById("project1").innerText = translations[lang].project1;
  document.getElementById("project2").innerText = translations[lang].project2;
  document.getElementById("project3").innerText = translations[lang].project3;
  document.getElementById("about-title").innerText = translations[lang].aboutTitle;
  document.getElementById("about-text").innerText = translations[lang].aboutText;
  document.getElementById("contact-title").innerText = translations[lang].contactTitle;
  document.getElementById("contact-text").innerText = translations[lang].contactText;
  document.getElementById("contact-button").innerText = translations[lang].contactButton;
}
