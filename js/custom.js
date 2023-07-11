/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

    jQuery(window).load( function (){
        $("#preloader").fadeOut("slow");
    });




    $(document).ready(function(){

/**===================================
 * Menu Item Highlighting
 * ===================================
 * */

    jQuery('#nav').singlePageNav({
        offset: jQuery('#nav').outerHeight(),
        filter: ':not(.external)',
        speed: 1200,
        currentClass: 'current',
        easing: 'easeInOutExpo',
        updateHash: true,
        beforeStart: function () {
            console.log('begin scrolling');
        },
        onComplete: function () {
            console.log('done scrolling');
        }
    });


    $(window).scroll(function(){
        if($(window).scrollTop() > 400 ){
            $("#navigation").css("background-color","#0EB493")
        }else {
            $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
        }
    });




    /**
 * ===============================================
 * Fix Slider Height
 * =============================================== 
 * */ 

    var slideHeight = $(window).height();

    $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);

    $(window).resize(function () {
        'use strict',
        $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
    });



/**
 * ===============================================
 * Project Filtering
 * =============================================== 
 * */ 


    $(".project-wrapper").mixItUp();

    $(".fancybox").fancybox({
        padding: 0,


        openEffect: 'elastic',
        openSpeed: 650,


        closeEffect: 'elastic',
        closeSpeed: 550,

        closeClick: true,
    });



/**
 * ===============================================
 * Parallax
 * =============================================== 
 * */ 

    $('#facts').parallax("50%", 0.3);


/**
 * ===============================================
 * Some Fun Facts
 * =============================================== 
 * */ 

    "use strict";
    $(".number-counters").appear( function(){
        $(".number-counters [data-to").each(function(){
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });




/**
 * ===============================================
 * Back to Top
 * =============================================== 
 * */ 

    $(window).scroll(function(){
        if( $(window).scrollTop() > 400){
            $("#back-top").fadeIn(200)
        } else{
            $("#back-top").fadeOut(200)
        }
    });

    $("#back-top").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });



});




/**
 * ===============================================
 * Start Google Map
 * =============================================== 
 * */ 

function initialize(){
    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTyeControlOptions: {
            mapTypeIds: [ gooogle.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var market = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });
}

google.maps.event.addDomListener(window, "load", initialize);

// end google Map //



