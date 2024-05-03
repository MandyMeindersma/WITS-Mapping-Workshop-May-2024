const map = L.map("map").setView([39.94877326, -75.14671922], 17); //[latitude, longitude], zoom
const scienceHistory = [39.94877326, -75.14671922];
const libertyBell = [39.9494193, -75.150276];
const museum = [39.948133015981, -75.147212965017];
const bankBuilding = [39.949242989509, -75.148241005441];
const hotel = [39.947329987747, -75.154099033752];
const bishopWH = [39.94723472638, -75.146897969554];
const indVisCenter = [39.95122, -75.1499];

L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png").addTo(map);


// for(i = 0; i < 500; i++){
//     const marker = L.marker([i, -74.008086423393]).addTo(map)
// }

const marker = L.marker(scienceHistory).addTo(map)
const marker2 = L.marker(libertyBell).addTo(map)
const line = L.polyline([museum, bankBuilding]).addTo(map)
const line2 = L.polyline([libertyBell,bishopWH]).addTo(map);

const circle = L.circle(libertyBell, {radius:400}).addTo(map);
const polygon = L.polygon([scienceHistory, libertyBell, museum]).addTo(map);


// another library
// https://tile.opentopomap.org/{z}/{x}/{y}.png




marker2.bindPopup("<span style='font-size:90px;'>Liberty Bell!</span>")


const arcgisKey =
  "AAPK585d954ab7a44b2f98e8a4406019115bD-VrVSpxg15QCIhyJl-bZSceC_H-KCvbR5VkCvkDaFrkS6mCjdmbG96ZYAK2NVlq";

const searchBar = L.esri.Geocoding.geosearch(
    {
        useMapBounds: false,
        providers: [
            L.esri.Geocoding.arcgisOnlineProvider({apikey: arcgisKey}),
        ],
    },
).addTo(map);



//show search result
searchBar.on("results", (data) => {
    const markerrrrrr = L.marker(data.results[0].latlng);
    markerrrrrr.addTo(map);
    markerrrrrr.bindPopup(`${data.results[0].latlng}`);
  });
  