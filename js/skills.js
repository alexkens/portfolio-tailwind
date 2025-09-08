const skills = document.querySelectorAll(".skill-container div");

for(let index; index < skills/length;index++) {
    console.log(index);

    let randomN = Math.floor(Math.random() * 30) + 10;
    const fontSize = `text-[${randomN}px]`

    skills[index].classList.add(fontSize);
    skills[index].classList.add("inline-block");
    skills[index].classList.add("whitespace-nowrap");
}