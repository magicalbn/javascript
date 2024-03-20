const readFile = (file, cb) => {
    if (!file) {
        // cb(new Error("invalid file"))
        setImmediate(cb, new Error("invalid file"));
    }

    setTimeout(() => {
        cb("file read");
    }, 0);
};

readFile("", console.log);
console.log("hello");
