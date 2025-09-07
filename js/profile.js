let options = {
  root: null, // html element with a higher specificity than using "html"
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.01,
};

let profileLeft = document.querySelectorAll("#profile div #left");
let profileRight = document.querySelectorAll('#profile div #right');

// left
const observerLeft = new IntersectionObserver(handleIntersectLeft, options);
profileLeft.forEach(div => {
  observerLeft.observe(div);
});

function handleIntersectLeft(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-comeFromLeft");
      observer.unobserve(entry.target);
    }
  });
}

// right
const observerRight = new IntersectionObserver(handleIntersectRight, options);
profileRight.forEach(div => {
  observerRight.observe(div);
});

function handleIntersectRight(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-comeFromRight");
      observer.unobserve(entry.target);
    }
  });
}