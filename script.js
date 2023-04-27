// write a method that will convert a datetime stamp input into epoch output
function convertToEpoch(datetime) {
    var epoch = new Date(datetime).getTime() / 1000;
    return epoch;
}

// method that converts epoch output to latitude and longitude coordinates based on 
// a mathematical formula that converts the datetimes between 1990 and 2000 years 
// into a smiley face over North America
function convertToGeo(epoch) {
    var lat = Math.sin(epoch) * 90;
    var long = Math.cos(epoch) * 90;
    return [lat, long];
}

// method that takes lat and long coordinates and creates a marker on the map
function createMarker(lat, long) {
    var marker = L.marker([lat, long]).addTo(map);
    return marker;
}

// method that takes a marker and adds a popup to it
function addPopup(marker, datetime) {        
    marker.bindPopup(datetime).openPopup();
}       

// method that takes a marker and adds it to the map    
function addMarkerToMap(marker) {     
    marker.addTo(map);
}   

// method that takes a marker and adds it to the marker array
function addMarkerToArray(marker) {
    markers.push(marker);
}       

// method that takes a marker and adds it to the marker group
function addMarkerToGroup(marker) {
    markerGroup.addLayer(marker);
}       

// method that takes a marker and adds it to the marker cluster group
function addMarkerToClusterGroup(marker) {
    markerClusterGroup.addLayer(marker);
}  

// use all the above methods to create a fancy method that does all of the above
// in one line  
function createMarkerWithPopup(lat, long, datetime) {
    var marker = L.marker([lat, long]).addTo(map);
    marker.bindPopup(datetime).openPopup();
    return marker;
}

