const apiURL = `https://jsonplaceholder.typicode.com/users`;

const fecthAPI = async () => {
    // fetch(apiURL)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));

    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
};

fecthAPI();
