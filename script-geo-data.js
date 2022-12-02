
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getGeoData(){
    const response = await fetch(api_url)
    const parsedData = await response.json()
    const { latitude, longitude } = parsedData
    
    const lat = document.getElementById('lat')
    const lon = document.getElementById('lon')

    lat.innerText =latitude
    lon.innerText = longitude

    return { latitude, longitude }
}

// getGeoData().then(data => console.log(data.latitude,data.longitude)) //showing the data
// getGeoData()

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

//THIS WILL BE CONTINUED at the index.html file
