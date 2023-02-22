// Loader

function showContent() {
  document.querySelector(".loader-container").classList.add("hidden");
}

setTimeout(showContent, 400);

// Thème clair/sombre

window.onload = () => {
  let themeLink = document.getElementById("theme-link");

  if (localStorage.theme != null) {
    themeLink.href = `css/style_${localStorage.theme}.css`;
  } else {
    themeLink.href = `css/style_clair.css`;
    localStorage.theme = "clair";
  }
};

document.getElementById("theme").addEventListener("click", function () {
  if (localStorage.theme == "clair") {
    localStorage.theme = "sombre";
    location.reload();
  } else {
    localStorage.theme = "clair";
    location.reload();
  }
  themeLink.href = `css/style_${localStorage.theme}.css`;
});

// Menu déroulant
const menu = document.querySelector("#menu-icon");
const hidenav = document.querySelector(".nav-invisible");

menu.addEventListener("click", () => {
  hidenav.classList.toggle("nav-invisible");
});

// Pop-up
function popupRedirect() {
  window.open("devis.html", "_blank", "width=600,height=500");
}

// Constantes

// Partie Header
const logo = document.querySelector("#logo");

// Partie Presentations
const imgFond = document.querySelector("#imgFond");
const nomEntreprise = document.querySelector("#nomEntreprise");
const descriptionEntreprise = document.querySelector("#descriptionEntreprise");

// Partie Prestations
const nomPrestation1 = document.querySelector("#nomPrestation1");
const nomPrestation2 = document.querySelector("#nomPrestation2");
const nomPrestation3 = document.querySelector("#nomPrestation3");
const nomPrestation4 = document.querySelector("#nomPrestation4");
const nomPrestation5 = document.querySelector("#nomPrestation5");
const descriptionPrestation1 = document.querySelector(
  "#descriptionPrestation1"
);
const descriptionPrestation2 = document.querySelector(
  "#descriptionPrestation2"
);
const descriptionPrestation3 = document.querySelector(
  "#descriptionPrestation3"
);
const descriptionPrestation4 = document.querySelector(
  "#descriptionPrestation4"
);
const descriptionPrestation5 = document.querySelector(
  "#descriptionPrestation5"
);

// Partie Contact
const lundi = document.querySelector("#lundi");
const mardi = document.querySelector("#mardi");
const mercredi = document.querySelector("#mercredi");
const jeudi = document.querySelector("#jeudi");
const vendredi = document.querySelector("#vendredi");
const samedi = document.querySelector("#samedi");
const adresse = document.querySelector("#adresse");
const mail = document.querySelector("#mail");

//
//
//

// Intégration

// Logo entreprise
logo.innerHTML = `<a href="index.html"><img src="img/logo.jpg" alt="Logo de l'entreprise"></a>
`;

// Nom, Descriptions et Image de fond
imgFond.innerHTML = `<img src="img/backgroundsection.webp" alt="Image d'outils de travail">`;
nomEntreprise.innerText = "Nom de l'entreprise";
descriptionEntreprise.innerText = "Descriptions de l'entreprise";

// Prestation 1
nomPrestation1.innerText = "Prestations à intégrer 1";
descriptionPrestation1.innerText = "Descriptions à intégrer ";

// Prestation 2
nomPrestation2.innerText = "Prestations à intégrer 2";
descriptionPrestation2.innerText = "Descriptions à intégrer";

// Prestation 3
nomPrestation3.innerText = "Prestations à intégrer 3";
descriptionPrestation3.innerText = "Descriptions à intégrer";

// Prestation 4
nomPrestation4.innerText = "Prestations à intégrer 4";
descriptionPrestation4.innerText = "Descriptions à intégrer";

// Prestation 5
nomPrestation5.innerText = "Prestations à intégrer 5";
descriptionPrestation5.innerText = "Descriptions à intégrer";

// Mail
mail.innerText = "Contact@syelec.com";

// Adresse
adresse.innerText = "1 Rue de Paris 75000 Paris";

// Horaires d'ouvertures
lundi.innerText = "Lundi : 8h - 18h";
mardi.innerText = "Mardi : 8h - 18h";
mercredi.innerText = "Mercredi : 8h - 18h";
jeudi.innerText = "Jeudi : 8h - 18h";
vendredi.innerText = "Vendredi : 8h - 18h";
samedi.innerText = "Samedi : 8h - 13h";
