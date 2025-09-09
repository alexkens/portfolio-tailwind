
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