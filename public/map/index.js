// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: { lat: 35.419213, lng: 139.5977589 },
      mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
        { lat: 35.419213, lng: 139.5977589 },
        { lat: 35.419628, lng: 139.598197 },
        { lat: 35.4191981, lng: 139.5984126 },
        { lat: 35.4194622, lng: 139.5986164 },
        { lat: 35.4190029, lng: 139.5998846 },
        { lat: 35.4183205, lng: 139.6002201 },
        { lat: 35.4184467, lng: 139.6008824 },
        { lat: 35.4194375, lng: 139.6001506 },
        { lat: 35.4195942, lng: 139.5993785 },
        { lat: 35.4208771, lng: 139.59972 },
        { lat: 35.4209209, lng: 139.59912 },
        { lat: 35.4201854, lng: 139.5989909 },
        { lat: 35.4202544, lng: 139.5980647 },
        { lat: 35.420836, lng: 139.5979097 },
        { lat: 35.4207548, lng: 139.5977917 },
    ];
    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 0,
      fillColor: "#FF0000",
      fillOpacity: 0.40,
    });
  
    bermudaTriangle.setMap(map);
  }
  
  window.initMap = initMap;