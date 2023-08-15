// // This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: { lat: 35.41934524435214, lng: 139.59822422578932 },
      mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
        new google.maps.LatLng(35.419213, 139.5977589),
        new google.maps.LatLng(35.419213, 139.5977589),
        new google.maps.LatLng(35.419213, 139.5977589),
        new google.maps.LatLng(35.419628, 139.598197),
        new google.maps.LatLng(35.4191981, 139.5984126),
        new google.maps.LatLng(35.4194622, 139.5986164),
        new google.maps.LatLng(35.4190029, 139.5998846),
        new google.maps.LatLng(35.4183205, 139.6002201),
        new google.maps.LatLng(35.4184467, 139.6008824),
        new google.maps.LatLng(35.4194375, 139.6001506),
        new google.maps.LatLng(35.4195942, 139.5993785),
        new google.maps.LatLng(35.4208771, 139.59972),
        new google.maps.LatLng(35.4209209, 139.59912),
        new google.maps.LatLng(35.4201854, 139.5989909),
        new google.maps.LatLng(35.4202544, 139.5980647),
        new google.maps.LatLng(35.420836, 139.5979097),
        new google.maps.LatLng(35.4207548, 139.5977917)
    ];
    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 0,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
  
    bermudaTriangle.setMap(map);
}
window.initMap = initMap;

// const singida = [
//   new google.maps.LatLng(-6.926427, 33.464355),
//   new google.maps.LatLng(-7.057282, 33.662109),
//   new google.maps.LatLng(-7.122696, 33.750000),
//   new google.maps.LatLng(-7.209900, 33.771973),
//   new google.maps.LatLng(-7.471411, 33.750000),
//   new google.maps.LatLng(-7.536764, 33.793945),
//   new google.maps.LatLng(-7.536764, 33.969727)];
  
  
//   const Tabora = [
//   new google.maps.LatLng(-4.127285, 31.684570),
//   new google.maps.LatLng(-4.236856, 31.684570),
//   new google.maps.LatLng(-4.258768, 31.508789),
//   new google.maps.LatLng(-4.236856, 31.486816),
//   new google.maps.LatLng(-4.302591, 31.464844),
//   new google.maps.LatLng(-4.477856, 31.420898),
//   new google.maps.LatLng(-4.631179, 31.464844)];
  
//   const polygon1 = new google.maps.Polygon({
//       path: singida,
//       geodesic: false,
//       strokeColor: '#FF0000',
//       strokeOpacity: 1.0,
//       strokeWeight: 1,
//       map: map
//   });
  
//   const polygon2 = new google.maps.Polygon({
//       path: Tabora,
//       geodesic: false,
//       strokeColor: '#FF0000',
//       strokeOpacity: 1.0,
//       strokeWeight: 1,
//       map: map
//   });