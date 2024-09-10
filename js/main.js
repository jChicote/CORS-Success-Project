
/*
    Next challenge for tomorrow:
    - modify the client side to send parameters
    - modify the server side to accept parameters and forward the request
    - port over the work into an S3 instance and attempt to run

 */

var apiUrl = "http://localhost:80/api/nasa"

const output = document.getElementById('responseBody')

// Bind buttons to events
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('sendButton');
    button.addEventListener('click', function() {
        console.log('[LOG] Sending request to SBDB Query API')
        InvokeApi(apiUrl)
    })
});

function InvokeApi(url) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            var result = JSON.stringify(data, null, 2); // Display the result in the <pre> element
            console.log(data)
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            result.textContent = 'Failed to fetch data from API';
        });
}
