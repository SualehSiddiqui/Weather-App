// navigator.geolocation.getCurrentPosition((location) => {
//     console.log(location)
// })
// bba17a072d2127459491390ad0f73f88
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=25.0001716&lon=67.0583856&appid=50bf2c0c611fd572a45bb2a668f207f7`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej)
    })