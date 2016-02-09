$(document).on('ready', function() {
                
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
                    $('.homeloader').fadeIn();
                    //$('.homeloader').css('display','block');
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