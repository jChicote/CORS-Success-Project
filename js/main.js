
var hostUrl = "http://localhost:80/api/nasa"
var testUrl = "https://ssd-api.jpl.nasa.gov/sbdb_query.api?fields=spkid,full_name,kind,neo,pha,e,a,q,i,om,w,ma,tp,per,n,ad,GM,diameter,pole,rot_per&sb-kind=c&sb-class=HTC";

const output = document.getElementById('responseBody')

// Bind buttons to events
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('sendButton');
    button.addEventListener('click', function() {
        console.log('[LOG] Sending request to SBDB Query API')
        InvokeApi(testUrl)
    })
});

function InvokeApi(apiUri) {
    const serverRequestUrl = `${hostUrl}?apiUrl=${apiUri}`;
    fetch(serverRequestUrl)
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
