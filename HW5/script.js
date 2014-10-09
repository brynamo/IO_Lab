/**
 * Created by brynamo on 10/8/14.
 */
var greatest_mag = 0;

function getDATA() {
    $.getJSON(
        "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/all_hour.geojson",
        function(data) {
            createTable(data);
            setMarkers(data);
        }
    );
}

function maptiles() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYnJ5bmFtbyIsImEiOiJ1WFItWko0In0.Kq7kw9DPaa5lIwt13F8rKQ';
    var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/brynamo.jjji47f3/{z}/{x}/{y}.png', {
        attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>',
        minZoom: 3
    });
    return mapboxTiles;
}

var markers = new L.FeatureGroup();

function setMarkers(data) {
    for (i = 0; i < data.features.length; i++) {
        var time = new Date(data.features[i].properties.time).toLocaleTimeString();
        var lon = data.features[i].geometry.coordinates[1];
        var lat = data.features[i].geometry.coordinates[0];
        var mag = data.features[i].properties.mag;
        console.log(mag);
        var marker = L.marker([lon, lat]);
        marker.bindPopup("<strong>Magnitude</strong>: "+mag+"<br/>"+"<strong>Time:</strong> "+time);
        markers.addLayer(marker);
        map.addLayer(markers);

        if (mag > greatest_mag) {
            greatest_mag = mag;
            console.log(greatest_mag);
            map.panTo(new L.LatLng(data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]));
        }

    }
}

function removeAllMarkers(){
    map.removeLayer(markers);
    $("#dataTable").empty();
}

function createTable(data) {
    for (i = 0; i < data.features.length; i++) {
        var location = data.features[i].properties.place;
        $("#dataTable").append("<tr><td>&bull; "+location+"</a></td></tr>");
    }
}


$(document).ready(function() {
    var mapboxTiles = maptiles();
    map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([33.505, -16.51], 5);

    $("#newData").click(function() {
            removeAllMarkers();
            getDATA();
        }
    );

    $("#test").click(function() {

    })
});
