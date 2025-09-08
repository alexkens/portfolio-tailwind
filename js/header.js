const toggle1 = document.querySelector("#navbar1-toggle");
const links1 = document.querySelectorAll("#navbar1 a");

links1.forEach(link => {
    link.addEventListener("click", () => {
        toggle1.checked = false;
    });
});

const toggle2 = document.querySelector("#navbar2-toggle");
const links2 = document.querySelectorAll("#navbar2 a");

links2.forEach(link => {
    link.addEventListener("click", () => {
        toggle2.checked = false;
    });
});