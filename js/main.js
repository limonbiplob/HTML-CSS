jQuery(document).ready(function($){

    // this code is for body height 100%
    $(window).bind('resizeEnd', function() {
        $(".right-side, .content-list").height( $(window).height() );
    });
    $(window).resize( function() {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 300);
    } ).trigger("resize");

    // this code is for counter
        $('.counter').counterUp({
        delay: 10,
        time: 10000
    });

    /*slick*/

// Can also be used with $(document).ready()
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
      });
    });


 // this code is for tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    var $windowWidth = $(window).width();

    if( $windowWidth >= 767 ){
        // page translation
        var menu = $('#nav'),
            sinPage = $('.single-content'),
            fromBottom = ' pageFromBottom ',
            toTop = ' pageToTop ',
            curr = ' current ',
            prev = ' prev ',
            next = ' next ',
            current = 0;


        menu.on('click', 'li a', function(e){

            e.preventDefault();
            var currentPage = $(this).attr('href');
            var curMenu = menu.find(this).parent('li');
            console.log(curMenu);
            $('#nav li').removeClass('active');
            $(this).parent('li').addClass('active');
            var target = $( currentPage );
            sinPage.removeClass( fromBottom + toTop + curr + prev );
            target.addClass( fromBottom + curr ).prev( sinPage ).addClass( toTop + prev );

        });






    }


     // hide social icon for tablet
    $(".share_icon i").click(function(){
        $(".social-icon").addClass("f_social_icon");
    });
    $(".hide-icon").click(function(){
          $(".social-icon").removeClass("f_social_icon");
    });

//    smooth scrolling	in menu
//
$('li.smooth_menu a').bind('click', function(event){
		   var $anchor= $(this);
		   var headerH='0';
		   $('html, body').stop().animate({
			   scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			   }, 1200, 'easeInOutExpo');
			   event.preventDefault();
		   });




    // scroll to top
    $(".scroll").click(function(){
        $("html,body").animate({scrollTop:0},2000);
    });


});


// this code is for isotope
    $(window).load(function(){


        // this code is for isotope
        var $portfolio = $('.gallery_items');

        $portfolio.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            filter: '*',
        });

        $('.filter-menu li').click(function(){
            $('.filter-menu li').removeClass('current_menu_item');
            $(this).addClass('current_menu_item');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector,
            });
        });


    // makes sure the whole site is loaded
    $('#preloader').fadeOut(); // will first fade out the loading animation
    $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $("body").removeClass("preloader_active");

    });

//$(window).load(function() {
//
//})
