const fs = require('fs');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}`)
            console.log(err)
        } else {
            console.log(data);
        };
    });
};

async function webCat(url) {
    try {
        let resp = await axios(url);
        console.log(resp.data);
    } catch (err) {
        console.log(`Error fetching ${url}`);
        console.log(`Request failed with status code ${err.response.status}`);
    }
}

let pathOrUrl = process.argv[2];
let test = pathOrUrl.slice(0,4);

if (test === "http") {
    webCat(pathOrUrl)
} else {
    cat(pathOrUrl);
}