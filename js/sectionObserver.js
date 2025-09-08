const observerOptions = {
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.01,
};

// github, skill, experience
const observer = new IntersectionObserver(intersectHandler, observerOptions);

function intersectHandler(entries, observer, animation="animate-deblur1") {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add(animation);
            observer.unobserve(entry.target);
        }
    })
}

let h2 = document.querySelectorAll("section h2");
let divs = document.querySelectorAll(".github-card");
let skillItems = document.querySelectorAll(".skill-container");
let experienceH3 = document.querySelectorAll("#experience h3");
let experienceDiv = document.querySelectorAll("#experience div");

h2.forEach(e => {
    observer.observe(e);
});

divs.forEach(e => {
    observer.observe(e);
})

skillItems.forEach(e => {
    observer.observe(e);
})

experienceH3.forEach(e => {
    observer.observe(e);
})

experienceDiv.forEach(e => {
    observer.observe(e);
})


// profile
function handleIntersect(entries, observer, animation) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animation);
      observer.unobserve(entry.target);
    }
  });
}

function createObserver(intersectHandler, animation) {
  return new IntersectionObserver((entries, observer) => {
    intersectHandler(entries, observer, animation);
  }, observerOptions);
}

// left
let profileLeft = document.querySelectorAll("#profile div #left");
const observerL = createObserver(handleIntersect, "animate-comeFromLeft");
profileLeft.forEach(div => {
  observerL.observe(div);
});

// right
let profileRight = document.querySelectorAll('#profile div #right');
const observerR = createObserver(handleIntersect, "animate-comeFromRight");
profileRight.forEach(div => {
  observerR.observe(div);
})