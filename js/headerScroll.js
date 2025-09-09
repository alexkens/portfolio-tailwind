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

    if(windowY > header.scrollHeight) {
        header.classList.remove('relative');
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
        header.classList.add('relative');
    }

    if(windowY > lastScroll) {
        header.classList.remove('fixed');
        header.classList.add('relative');
    }

    lastScroll = windowY;
};

const header = document.querySelector('#header');
window.addEventListener('scroll', throttle(validateHeader, 100));

let lastScroll = 0;
