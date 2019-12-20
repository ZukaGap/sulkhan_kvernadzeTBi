//Google maps API initialisation
var element = document.getElementById("map");

var map = new google.maps.Map(element, {
    center: new google.maps.LatLng(41.7169375,44.7215625),
    zoom: 15,
    mapTypeId: "OSM",
    mapTypeControl: false,
    streetViewControl: false,
});

/*
var icon = {
    url: "./SVG/marker2.svg", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
};
*/

var marker = new google.maps.Marker({
    position: {lat:41.7169375,lng:44.7215625},
    map: map,
//    icon:icon,
    animation: google.maps.Animation.DROP,
    draggable: true
});

//Define OSM map type pointing at the OpenStreetMap tile server
map.mapTypes.set("OSM", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
    return "https://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "OpenStreetMap",
    maxZoom: 18
}));