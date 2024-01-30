const debounce = (cb, delay) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            return cb(...args);
        }, delay);
    };
};

const delay = debounce(setState());
