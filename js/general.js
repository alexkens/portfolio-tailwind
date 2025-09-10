
function darkmode() {

    const body = document.body;
    const darkmodeButton = document.getElementById("darkmodeButton");

    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        darkmodeButton.innerHTML = "Darkmode";

    } else {
        body.classList.add("dark");
        darkmodeButton.innerHTML = "Lightmode";
    }
}

async function changeLanguage() {

    const languageMenuItem = document.getElementById("languageLink");
    if(languageMenuItem.innerHTML === "DE") {
        const data = await fetchlanguageData('de');
        updateContent(data);
        languageMenuItem.innerHTML = "EN";
    } else {
        const data = await fetchlanguageData('en');
        updateContent(data);
        languageMenuItem.innerHTML = "DE";
    }
}

async function fetchlanguageData(lang) {
    const response = await fetch(`${lang}.json`);
    return response.json();
}

function updateContent(data) {    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = data[key];
    });
}