function initMap() {
  let mapElement = document.getElementById('map');
  if (mapElement) {
    let myLatlng = new google.maps.LatLng(51.490494, 31.306026);
    let maptooltipbold = 'Преображенская ул.12';
    let maptooltip = 'Loyalty';
    let mapOptions = {
      zoom: 16,
      scrollwheel: false,
      clickable: false,
      draggable: !("ontouchend" in document),
      center: myLatlng,
      mapTypeId: 'roadmap',
    };
    let map = new google.maps.Map(mapElement, mapOptions);
    let image = './img/marker/marker.png';
    let content = document.createElement('div');
    content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";
    let infowindow = new google.maps.InfoWindow({
      content: content
    });
    let marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      draggable: false,
      icon: image,
      animation: google.maps.Animation.BOUNCE
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }
}
$('.click-menu-element').click(function(e){
  let scroll = e.target.getAttribute('href');
  $('html, body').animate({scrollTop:$(scroll).position().top}, 2000);
});