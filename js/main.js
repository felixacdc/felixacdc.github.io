$(document).on('ready', function() {
    
    // Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');
			}
		})
	};
    
    //ocultar menu en celulares al hacer clic en la opcion
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    /* ==============================================
        Accion o efecto de scroll en boton de home
    =============================================== */

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
    });
                
    $("#element").introLoader({
        animation: {
            name: 'simpleLoader',
            options: {
                exitFx:'slideRight',
                ease: "easeInOutCirc",
                style: 'ocean',
                delayBefore: 1000, //delay time in milliseconds
                exitTime: 500,
                onAfter: function() {
                    $('#homeloader01').addClass('rotateInDownLeft');
                    $('#homeloader02').addClass('rotateInDownRight');
                    $('#homeloader03').addClass('zoomInRight');
                    $('#homeloader04').addClass('fadeInLeft');
                    $('.homeloader').fadeIn();
                    $('.homeloader').css('display','block');
                }                           
            }
        },    

        spinJs: {
            lines: 13, // The number of lines to draw
            length: 20, // The length of each line
            width: 10, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            color: '#fff', // #rgb or #rrggbb or array of colors
        }
    });

});