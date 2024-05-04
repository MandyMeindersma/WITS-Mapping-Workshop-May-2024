// const map = new maplibregl.Map({
//     container: "map",
//     style: "https://demotiles.maplibre.org/style.json",
//     center:[-75.14671922,39.94877326],
//     zoom: 12
// })

const map = new maplibregl.Map({
  container: "map", // container id
  style:
    "https://api.jawg.io/styles/jawg-sunny.json?access-token=f6poGAp1T61DhCzmnI7eedJGHaoWPQ6vDtp7lTY3o8wNucLc2hsjB7J4NdaRxons", // style URL
  center: [-75.14671922, 39.94877326], // starting position [lng, lat]
  zoom: 10, // starting zoom
});

map.once("load", () => {
    map.addSource("police", {
        type: "geojson",
        data: "https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Boundaries_District/FeatureServer/0/query?f=geojson&where=1=1"
    });
    map.addLayer({
        id: "police-districts-polygon",
        type: "fill",
        source: "police",
        paint: {
          "fill-color": "hsl(200, 80%, 50%)",
          "fill-opacity": 0.5,
          "fill-outline-color": "red",
        },
      });
})