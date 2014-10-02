/**
 * Created by brynamo on 10/1/14.
 */
function populateHTML() {
    var jsonResponse = JSON.parse(this.responseText);
    for (i = 0; i < jsonResponse.features.length; i++) {

        var time = new Date(jsonResponse.features[i].properties.time);
        console.log(time);

        $("#IDs").append("<td class='ids'>" + jsonResponse.features[i].properties.ids + "</td>");
        $("#Alerts").append("<td class='alerts'>" + jsonResponse.features[i].properties.alert + "</td>");
        $("#Magn").append("<td class='magnitutes'>" + jsonResponse.features[i].properties.mag + "</td>");
        $("#Places").append("<td class='places'>" + jsonResponse.features[i].properties.place + "</td>");
        $("#GPS").append("<td class='gps-coord'><p>Longitude:" + jsonResponse.features[i].geometry.coordinates[0] + "</p><p>Latitude:" + jsonResponse.features[i].geometry.coordinates[1] + "</p></td>");
        $("#Time").append("<td class='time'>" + time + "</td>");
    }
    console.log(jsonResponse.features.length);
    console.log(jsonResponse);
}

function getDATA() {
    var usgsReq = new XMLHttpRequest();
    usgsReq.onload = populateHTML;
    usgsReq.open("get", "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/all_hour.geojson", true);
    //var jsonResponse = JSON.parse(this.responseText);
    usgsReq.send();
}

$(document).ready(function() {
    getDATA();
    $("#NewDATA").click(function() {
           location.reload();
        });
    });

