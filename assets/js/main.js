$( document ).ready(function() {
    $('.slider').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay:  true,
    })
    $('.gallery').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        items: 3,
        autoplay:  true,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
    $('.customer').owlCarousel({
        loop: true,
        dots: true,
        margin: 50,
        items: 2,
        autoplay:  true,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })
   
});
(function () {
     // Google Map
	let map;
	document.addEventListener("DOMContentLoaded",() => {
		let s = document.createElement("script");
		document.head.appendChild(s);
		s.addEventListener("load",() => {
      var myposition = {lat: 10.788339,  lng: 106.702597};
			map = new google.maps.Map(document.getElementById('map'), {
			center: myposition,
			zoom: 20,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			});
      var contentString = '<div class="content_map"><h3>18Bis/12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. HCM</h3><a href="#">Get Direction</a></div>';
       var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: myposition,
        map: map,
        title: 'TheoDore'
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
		});
		s.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCQQ_JBNIzJv_au-RLszU12TYMmNN36LZM';
	});
}());