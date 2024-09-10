const express = require('express');
const cors = require('cors');
const request = require('request'); // Import the 'request' module for making HTTP requests
const app = express();

app.use(cors())

// Define a route that will handle requests to the external API
app.get('/api/nasa', (req, res) => {
    const apiUrl = 'https://ssd-api.jpl.nasa.gov/sbdb_query.api?fields=spkid,full_name,kind,neo,pha,e,a,q,i,om,w,ma,tp,per,n,ad,GM,diameter,pole,rot_per&sb-kind=c&sb-class=HTC';

    // Forward the request to the external API
    request(apiUrl, { json: true }, (err, response, body) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching data from API' });
        }
        res.json(body); // Send the API response to the client
    });
});

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
