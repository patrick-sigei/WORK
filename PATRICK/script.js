// Create a map instance
var map = L.map('map').setView([-1.102554,37.013193], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Create a marker with a custom popup
var marker = L.marker([-1.102554,37.013193]).addTo(map);
marker.bindPopup('<b>Hello!</b><br>Simple popup.').openPopup();
