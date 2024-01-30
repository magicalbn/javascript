// const fs = require("fs");

// class ReadFile {
//   #fileData;
//   constructor(path) {
//     this.path = path;
//   }

//   read() {
//     const rawData = fs.readFileSync(this.path, { encoding: "utf-8" });
//     this.#fileData = JSON.parse(rawData);
//   }

//   get getData() {
//     return this.#fileData;
//   }

//   readSpecific = (name) => {
//     let value = [];
//     Object.keys(this.#fileData).map((each) => {
//       if (this.#fileData[each].name == name) value.push(this.#fileData[each]);
//     });
//     return value;
//   };
// }

// fs.readFile("path", "utf-8", (err, data) => {});

// fs.stat("path", (err, stat) => {});

// fs.mkdir("path", { recursive: true }, (err) => {});

// fs.writeFile("parh", "data", (err) => {});

// module.exports = ReadFile;

const fs = require("fs");

class ReadFile {
    #filesdata;
    constructor(path) {
        this.path = path;
    }

    readData() {
        const data = fs.readFileSync(this.path, "utf-8");
        if (data) {
            this.#filesdata = JSON.parse(data);
        }
    }

    get fileData() {
        return this.#filesdata;
    }
}

module.exports = ReadFile;
