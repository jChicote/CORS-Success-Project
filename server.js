// const express = require('express');
// const cors = require('cors');
// const request = require('request'); // Import the 'request' module for making HTTP requests
import express from "express";
import cors from "cors";
const fetch = (await import('node-fetch')).default;
const app = express();

app.use(cors())

// Define a route that will handle requests to the external API
// app.get('/api/nasa', (req, res) => {
//
//     const { apiUrl } = req.query;
//     console.log(apiUrl);
//
//     // Forward the request to the external API
//     request(apiUrl, { json: true }, (err, response, body) => {
//         if (err) {
//             return res.status(500).json({ error: 'Error fetching data from API' });
//         }
//         res.json(body); // Send the API response to the client
//     });
// });

app.get('/api/nasa', async (req, res) => {

    const { apiUrl } = req.query;
    console.log(apiUrl);

    try {
        // Fetch data
        const response = await fetch(apiUrl);
        if (!response.ok) {
            return res.status(500).json({ error: 'Error fetching data from API' });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching data from API' });
    }
});


app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
