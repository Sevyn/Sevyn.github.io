/**	
	* SinglePro HTML 1.0	
	* Template Scripts
	* Created by WpFreeware Team

	Custom JS
	
	1. Superslides Slider
	2. Fixed Top Menubar
	3. Featured Slider
	4. Skill Circle
	5. Wow animation
	6. Project Counter
	7. TEAM SLIDER
	8. BLOG SLIDER
	9. TESTIMONIAL SLIDER
	10. CLIENTS SLIDER
	11. Google Map
	12. SCROLL TOP BUTTON
	13. PRELOADER 
	14. MENU SCROLL 
	15. MOBILE MENU CLOSE 	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Superslides Slider
	/* ----------------------------------------------------------- */
	jQuery('#slides').superslides({
      animation: 'fade',
      play: '4000'
    });

	/* ----------------------------------------------------------- */
	/*  3. Featured Slider
	/* ----------------------------------------------------------- */
	

    $('.featured_slider').slick({
      dots: true,
      infinite: true,      
      speed: 800,
      arrows:false,      
      slidesToShow: 1,
      slide: 'div',
      autoplay: true,
      fade: true,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    });


	/* ----------------------------------------------------------- */
	/*  4. Skill Circle
	/* ----------------------------------------------------------- */

setTimeout(function() {
	
		$('#myStat').circliful({
        animation: false,
        percent: 95,
				foregroundColor: "#e84700"
    });
    
	$('#myStat2').circliful({
        animation: false,
        percent: 95,
				foregroundColor: "#e84700"
    });
    
	$('#myStat3').circliful({
        animation: false,
        percent: 80,
				foregroundColor: "#e84700"
    });
    
	$('#myStat4').circliful({
        animation: false,
        percent: 60,
				foregroundColor: "#e84700"
    });
	
}, 0);

		
		
		
		
	/* ----------------------------------------------------------- */
	/*  6. Project Counter
	/* ----------------------------------------------------------- */

	(function ($) {

		$(".single_team h5 a").click(function(event) {
			
			event.preventDefault();
			
			var $i = $(this);
			
			$i.closest(".single_team").children(".team_img").children("a").trigger("click");
			
		});

	
	})(jQuery);
	

	/* ----------------------------------------------------------- */
	/*  7. TEAM SLIDER
	/* ----------------------------------------------------------- */

		$('.team_slider').slick({
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});


	/* ----------------------------------------------------------- */
	/*  8. BLOG SLIDER
	/* ----------------------------------------------------------- */


    $('.blog_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});


	/* ----------------------------------------------------------- */
	/*  9. TESTIMONIAL SLIDER
	/* ----------------------------------------------------------- */

	$('.testimonial_slider').slick({
      dots: true,
      infinite: true,      
      speed: 800,
      arrows:false,      
      slidesToShow: 1,
      slide: 'li',
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      cssEase: 'linear'
    });


    /* ----------------------------------------------------------- */
	/*  10. CLIENTS SLIDER
	/* ----------------------------------------------------------- */

    $('.clients_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});


    /* ----------------------------------------------------------- */
	/*  11. Google Map
	/* ----------------------------------------------------------- */

	  var zoom= $('#map_canvas').gmap('option', 'zoom');
      
      $('#map_canvas').gmap().bind('init', function(ev, map) {
        $('#map_canvas').gmap('addMarker', {'position': '57.7973433,12.0502107', 'bounds': true});
        $('#map_canvas').gmap('option', 'zoom', 13);
      });


	/* ----------------------------------------------------------- */
	/*  12. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });

	/* ----------------------------------------------------------- */
	/*  14. MENU SCROLL 
	/* ----------------------------------------------------------- */

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $("#top-menu"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find("a").not(".file-link"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
	})


	/* ----------------------------------------------------------- */
	/*  15. MOBILE MENU ACTIVE CLOSE 
	/* ----------------------------------------------------------- */ 

	$('.navbar-nav').on('click', 'li a', function() {
	  $('.navbar-collapse').collapse('hide');
	});

	
});