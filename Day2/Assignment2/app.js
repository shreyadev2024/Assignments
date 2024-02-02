// Import required modules
const express = require('express');
const fs = require("fs");


// Create an Express application
const app = express();
const port = 6500; // Set the port number

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/readJSONData', (req, res) => {
    fs.readFile("./data/samplejsondata.json", (err, result) => { 
        if (err) {
            console.log(`Failed to read file, ${err}`);
            throw err;
        }
        else {
            console.log(`Json data read succefully , ${result}`);
            const parsedJson = JSON.parse(result);
            res.send(JSON.stringify(parsedJson, null, 2));

        }

    })
   
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
