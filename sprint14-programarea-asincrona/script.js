// Variabilă globală pentru stocarea datelor JSON
let dataGlobal = null;
let acitveTechnlogySelection = 1;

window.addEventListener('DOMContentLoaded', async () => {
    console.log("Pagina s-a încărcat, începem fetch-ul...");

    await incarcaDatele();
    initializeazaEvenimente();
});


// ====================== FETCH DATE ======================

async function incarcaDatele() {
    try {
        const response = await fetch('./data/data.json');
        dataGlobal = await response.json();
        console.log("Datele au fost încărcate:", dataGlobal);
        pregatesteAfisare();
    } catch (error) {
        console.error("Eroare la încărcarea datelor:", error);
    }
}


// ====================== INITIALIZARE ======================

function pregatesteAfisare() {
    // Adăugăm zonele dinamice în DOM
    const displayDiv = document.createElement('div');
    displayDiv.id = "data-display";
    Object.assign(displayDiv.style, {
        background: '#111',
        color: '#0f0',
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        overflowX: 'auto',
        maxHeight: '400px',
        textAlign: 'left'
    });
    document.body.appendChild(displayDiv);

    const imageElement = document.createElement('img');
    imageElement.id = "data-image";
    Object.assign(imageElement.style, {
        display: "none",
        width: "300px",
        marginTop: "2rem"
    });
    document.body.appendChild(imageElement);
}


function initializeazaEvenimente() {
    const buttons = document.querySelectorAll('.nav-button');
    const contentSpace = document.querySelector('.content-space');
    const exploreButton = document.querySelector('.button-explore');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.innerText.trim().split(" ")[1].toLowerCase();
            console.log("Ai apăsat pe:", section);
            gestioneazaSectiune(section, contentSpace, exploreButton);
        });
    });
}


// ====================== CONTROL NAVIGARE ======================

function gestioneazaSectiune(section, contentSpace, exploreButton) {
    const displayDiv = document.getElementById('data-display');
    const imageElement = document.getElementById('data-image');

    switch (section) {
        case "home":
            afiseazaHome(contentSpace, exploreButton, displayDiv, imageElement);
            break;

        case "destination":
            afiseazaDestination(contentSpace, exploreButton, displayDiv, imageElement);
            break;

        case "crew":
            afiseazaCrew(contentSpace, exploreButton, displayDiv, imageElement);
            break;

        case "technology":
            afiseazaTechnology(contentSpace, exploreButton, displayDiv, imageElement);
            break;

        default:
            console.warn("Secțiune necunoscută:", section);
    }
}


// ====================== FUNCȚII SEPARATE ======================

// HOME
function afiseazaHome(contentSpace, exploreButton, displayDiv, imageElement) {
    contentSpace.style.display = "block";
    exploreButton.style.display = "inline-block";
    displayDiv.innerHTML = "";
    imageElement.style.display = "none";
}


// DESTINATION
function afiseazaDestination(contentSpace, exploreButton, displayDiv, imageElement) {
    ascundeHome(contentSpace, exploreButton);

    const data = dataGlobal?.destinations;
    if (!data) return afiseazaEroare(displayDiv, imageElement);

    const destinatie = data[0]; // poți schimba indexul mai târziu

    imageElement.src = destinatie.images.png;
    imageElement.alt = destinatie.name;
    imageElement.style.display = "block";

    displayDiv.textContent = JSON.stringify(destinatie, null, 2);
}


// CREW
function afiseazaCrew(contentSpace, exploreButton, displayDiv, imageElement) {
    ascundeHome(contentSpace, exploreButton);

    const data = dataGlobal?.crew;
    if (!data) return afiseazaEroare(displayDiv, imageElement);

    const crewMember = data[0];

    imageElement.src = crewMember.images.png;
    imageElement.alt = crewMember.name;
    imageElement.style.display = "block";

    displayDiv.textContent = JSON.stringify(crewMember, null, 2);
}


// TECHNOLOGY
function afiseazaTechnology(contentSpace, exploreButton, displayDiv, imageElement) {
    ascundeHome(contentSpace, exploreButton);

    const data = dataGlobal?.technology;
    if (!data) return afiseazaEroare(displayDiv, imageElement);

    const techItem = data[0];

    imageElement.src = techItem.images.landscape;
    imageElement.alt = techItem.name;
    imageElement.style.display = "block";

    displayDiv.textContent = JSON.stringify(techItem, null, 2);






}


// ====================== UTILITY FUNCTIONS ======================

function ascundeHome(contentSpace, exploreButton) {
    contentSpace.style.display = "none";
    exploreButton.style.display = "none";
}

function afiseazaEroare(displayDiv, imageElement) {
    displayDiv.textContent = "❌ Datele pentru această secțiune nu sunt disponibile.";
    imageElement.style.display = "none";
}
