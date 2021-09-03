const fs = require('fs');
const axios = require('axios');

function cat(path, output) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}`)
            console.log(err)
        } else {
            if (output) {
                writeToFile(output, data)
            } else {
                console.log(data);
            }
        };
    });
};

async function webCat(url, output) {
    try {
        let resp = await axios(url);
        if (output) {
            writeToFile(output, resp.data)
        } else {
            console.log(resp.data);
        }
    } catch (err) {
        console.log(`Error fetching ${url}`);
        console.log(`Request failed with status code ${err.response.status}`);
    }
}

function writeToFile(output, data) {
    fs.writeFile(output, data, 'utf8', err => {
        if (err) {
            console.log(`Error writing ${output}:`)
            console.log(err)
        }
    })
}

let pathOrUrl = process.argv[2];
let outputFilePath = false;
if (pathOrUrl === "--out") {
    try {
        pathOrUrl = process.argv[4]
        outputFilePath = process.argv[3]
    } catch (err) {
        console.log('Incorrect syntax of arguments. Please see http://curric.rithmschool.com/springboard/exercises/node-files/#step-3 for syntax.')
    }
}

let test = pathOrUrl.slice(0,4);
if (test === "http") {
    webCat(pathOrUrl, outputFilePath);
} else {
    cat(pathOrUrl, outputFilePath);
}