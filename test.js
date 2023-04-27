// write unit tests for all the methods in script.js

test('convertToEpoch', function() {
    var datetime = '2015-01-01 00:00:00';
    var epoch = convertToEpoch(datetime);
    equal(epoch, 1420070400);
}   

test('convertToGeo', function() {
    var epoch = 1420070400;
    var geo = convertToGeo(epoch);
    deepEqual(geo, [0, 90]);
}   

test('createMarker', function() {
    var lat = 0;
    var long = 90;
    var marker = createMarker(lat, long);
    ok(marker);
}   

test('addPopup', function() {
    var lat = 0;
    var long = 90;
    var marker = createMarker(lat, long);
    var datetime = '2015-01-01 00:00:00';
    addPopup(marker, datetime);
    ok(marker._popup);
}   

test('addMarkerToMap', function() {
    var lat = 0;
    var long = 90;
    var marker = createMarker(lat, long);
    addMarkerToMap(marker);
    ok(map.hasLayer(marker));
}   

test('addMarkerToArray', function() {
    var lat = 0;
    var long = 90;
    var marker = createMarker(lat, long);
    addMarkerToArray(marker);
    equal(markers.length, 1);
}

test('addMarkerToGroup', function() {
    var lat = 0;
    var long = 90;
    var marker = createMarker(lat, long);
    addMarkerToGroup(marker);
    ok(markerGroup.hasLayer(marker));
}

test('addMarkerToClusterGroup', function() {
    var lat = 0;
    var long = 90;
    var marker = createMarker(lat, long);
    addMarkerToClusterGroup(marker);
    ok(markerClusterGroup.hasLayer(marker));
}

test('createMarkerWithPopup', function() {
    var lat = 0;
    var long = 90;
    var datetime = '2015-01-01 00:00:00';
    var marker = createMarkerWithPopup(lat, long, datetime);
    ok(marker);
    ok(marker._popup);
    ok(map.hasLayer(marker));
}   

// Path: test.html
// Compare this snippet from index.html:
// <div id="map"></div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/0.4.0/leaflet.markercluster.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js"></script>
// <script src="script.js"></script>
//  
// to this snippet from test.html:
// <div id="qunit"></div>
// <div id="qunit-fixture"></div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/qunit/1.18.0/qunit.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.14.1/sinon.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/sinon-qunit/1.0.0/sinon-qunit.js"></script>
// <script src="test.js"></script>
//
// write unit tests for all the methods in script.js
//  
// Path: test.js
// Compare this snippet from script.js:
// // write a method that will convert a datetime stamp input into epoch output
// function convertToEpoch(datetime) {
//     var epoch = new Date(datetime).getTime() / 1000;
//     return epoch;
// }
//  
// // method that converts epoch output to latitude and longitude coordinates based on
// // a mathematical formula that converts the datetimes between 1990 and 2000 years
// // to latitude and longitude coordinates
// function convertToGeo(epoch) {
//     var lat = Math.sin(epoch) * 90;
//     var long = Math.cos(epoch) * 90;
//     return [lat, long];
// }
//
// to this snippet from test.js:
// test('convertToEpoch', function() {
//     var datetime = '2015-01-01 00:00:00';
//     var epoch = convertToEpoch(datetime);
//     equal(epoch, 1420070400);
// }
//
// test('convertToGeo', function() {
//     var epoch = 1420070400;
//     var geo = convertToGeo(epoch);
//     deepEqual(geo, [0, 90]);
// }
//
// Path: test.html
// Compare this snippet from index.html:
// <div id="map"></div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/0.4.0/leaflet.markercluster.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js"></script>
// <script src="script.js"></script>
//
// to this snippet from test.html:
// <div id="qunit"></div>
// <div id="qunit-fixture"></div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/qunit/1.18.0/qunit.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.14.1/sinon.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/sinon-qunit/1.0.0/sinon-qunit.js"></script>
// <script src="test.js"></script>
//
