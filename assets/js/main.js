$(document).ready(function () {
    $('.slider').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
    })
    $('.gallery').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        items: 3,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    $('.customer').owlCarousel({
        loop: true,
        dots: true,
        margin: 50,
        items: 2,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    AOS.init();
    $("#menu .icon-menu").click(function () {
        $(this).toggleClass("active");
        if($('#openmenu').hasClass('active'))
        {
            $('#openmenu').removeClass('active');
        }
        else
        {
            $('#openmenu').addClass('active');
        }
    });
    $("#openmenu .open a.head").click(function () {
        $(this).parent().toggleClass("active");
    });
    $('#header-rg .search').click(function(e){
        $('#searchmenu').toggleClass("active");
    })
    $('.danh_muc_dv a').click(function(e){
        $('.open_tab_dichvu').toggleClass("active");
    })
    $('a.nav-link').click(function(e){
        $('.open_tab_dichvu').toggleClass("active");
    })
	if($('.datetimepicker').length) {
		$('.datetimepicker').datetimepicker({
			dayOfWeekStart : 1,
			lang:'en',
			disabledDates:['1986/01/22','1986/01/23','1986/01/19'],
			startDate:	'2015/01/05'
		});
	}
});
(function () {
    // Google Map
    let map;
    document.addEventListener("DOMContentLoaded", () => {
        let s = document.createElement("script");
        document.head.appendChild(s);
        s.addEventListener("load", () => {
            var myposition = { lat: 10.788339, lng: 106.702597 };
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
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        });
        s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWaD7ncidnSTPFdFssKuSK7uSJQrPPINo';
    });
}());