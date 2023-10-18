var latitude = 51.544064, longitude = -1.7727488
mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

var map = new mapboxgl.Map({
    container:"map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [latitude, longitude],
    zoom: 16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "bottom-right"
)

const popup1 = new mapboxgl.Popup()
    .setLngLat([latitude, longitude])
    .setHTML('<img id="tower" class="image-marker" src="./tower.png"/>')
    .addTo(map);

const popup2 = new mapboxgl.Popup()
    .setLngLat([latitude+0.001, longitude-0.002])
    .setHTML('<img id="bridge" class="image-marker" src="./bridge.png"/>')
    .addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)