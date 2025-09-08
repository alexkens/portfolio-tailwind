const throttle = (func, time = 100) => {
    let lastTime = 0;
    return () => {
        const now = new Date();
        if(now - lastTime >= time) {
            func();
            time = now;
        }
    };
};

const validateHeader = () => {
    const windowY = window.scrollY;
    const windowH = window.innerHeight;

    if(windowY > windowH) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    if(windowY < lastScroll) {
        header.classList.add();
    } else {
        header.classList.remove();
    }

    lastScroll = windowY;
};

window.addEventListener('scroll', throttle(validateHeader, 100));
const header = document.querySelector('#header');
let lastScroll = 0;