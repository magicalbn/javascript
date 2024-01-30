// const axios  = require("axios")

// class ApiCalls {

//     constructor(link){
//         this.link = link
//         this.apiData
//     }

//     runAPI = async () =>{
//         const {data} = await axios.get(this.link)
//         this.apiData = data
//     }

//     get getData () {
//         return this.apiData
//     }
// }

// module.exports = ApiCalls

class APICall {
    #data;
    constructor(url) {
        this.URL = url;
    }

    async fetchData() {
        const resposne = await fetch(this.URL);
        const result = await resposne.json();
        this.#data = result;
    }

    getAPIdata() {
        return this.#data;
    }
}

module.exports = APICall;
