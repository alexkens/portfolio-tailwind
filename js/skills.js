const skills = document.querySelectorAll(".skill-container div");

for(let index in skills) {

    let randomN = Math.floor(Math.random() * 30) + 10;
    let fontSize = `text-[${randomN}px]`
    
    skills[index].classList.add(fontSize);
    skills[index].classList.add("inline-block");
    skills[index].classList.add("whitespace-nowrap");
}