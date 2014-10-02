/**
 * Created by brynamo on 10/1/14.
 */
function populateHTML() {
    var jsonResponse = JSON.parse(this.responseText);
    for (i = 0; i < jsonResponse.features.length; i++) {

        var time = new Date(jsonResponse.features[i].properties.time);
        var update = new Date(jsonResponse.features[i].properties.updated);

        $("#IDs").append("<td class='ids'>" + jsonResponse.features[i].properties.ids + "</td>");
        $("#Alerts").append("<td class='alerts'>" + jsonResponse.features[i].properties.alert + "</td>");
        $("#Magn").append("<td class='magnitutes'>" + jsonResponse.features[i].properties.mag + "</td>");
        $("#Places").append("<td class='places'>" + jsonResponse.features[i].properties.place + "</td>");
        $("#GPS").append("<td class='gps-coord'><p>Longitude:" + jsonResponse.features[i].geometry.coordinates[0] + "</p><p>Latitude:" + jsonResponse.features[i].geometry.coordinates[1] + "</p></td>");
        $("#Time").append("<td class='time'>" + time + "</td>");
        $("#Update").append("<td class='update'>" + update + "</td>");
        $("#Timezone").append("<td class='timezone'>" + jsonResponse.features[i].properties.tz + "</td>");
        $("#URL").append("<td class='url'>" + jsonResponse.features[i].properties.url + "</td>");
        $("#Detail").append("<td class='detail'>" + jsonResponse.features[i].properties.detail + "</td>");
        $("#Felt").append("<td class='felt'>" + jsonResponse.features[i].properties.felt + "</td>");
        $("#Max").append("<td class='max'>" + jsonResponse.features[i].properties.cdi + "</td>");
        $("#InstMax").append("<td class='instmax'>" + jsonResponse.features[i].properties.mmi + "</td>");
        $("#Status").append("<td class='status'>" + jsonResponse.features[i].properties.status + "</td>");
        $("#Tsunami").append("<td class='tsunami'>" + jsonResponse.features[i].properties.tsunami + "</td>");
        $("#Sig").append("<td class='sig'>" + jsonResponse.features[i].properties.sig + "</td>");
        $("#Net").append("<td class='net'>" + jsonResponse.features[i].properties.net + "</td>");
        $("#Code").append("<td class='code'>" + jsonResponse.features[i].properties.code + "</td>");
        $("#Sources").append("<td class='Sources'>" + jsonResponse.features[i].properties.sources + "</td>");
        $("#Types").append("<td class='types'>" + jsonResponse.features[i].properties.types + "</td>");
        $("#Nst").append("<td class='nst'>" + jsonResponse.features[i].properties.nst + "</td>");
        $("#Dmin").append("<td class='dmin'>" + jsonResponse.features[i].properties.dmin + "</td>");
        $("#Rms").append("<td class='rms'>" + jsonResponse.features[i].properties.rms + "</td>");
        $("#Gap").append("<td class='gap'>" + jsonResponse.features[i].properties.gap + "</td>");
        $("#MagType").append("<td class='magtype'>" + jsonResponse.features[i].properties.magtype + "</td>");
        $("#Type").append("<td class='type'>" + jsonResponse.features[i].properties.type + "</td>");
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

