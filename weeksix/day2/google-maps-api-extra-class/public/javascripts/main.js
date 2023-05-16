let map;
window.addEventListener('load', () => {
  const lisbonCapital = {
    lat: 38.7086544778327,
    lng: -9.13275942234931
  };
 
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: lisbonCapital
  });
});

function getRestaurants() {
  axios
    .get('/restaurants/api')
    .then(response => {
      placeRestaurants(response.data.restaurants);
    })
    .catch(error => {
      console.log(error);
    });
};

function addInfoWindow(marker, message) {
  console.log('here')
  let infoWindow = new google.maps.InfoWindow({
      content: '<h1>' + message.name + '</h1>' +
      '<h3> Description: '+ message.description+'</h3>'
  });

  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open(map, marker);
  });
}

function placeRestaurants(restaurants) {
  for (let restaurant of restaurants) {
    const center = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: restaurant.name
    });
    addInfoWindow(pin, restaurant);
    markers.push(pin);
  }
}
 
getRestaurants();