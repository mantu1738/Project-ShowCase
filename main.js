$(window).scroll(function() {
    parallax();
});

function parallax() {
    var windowScroll = $(window).scrollTop();
    // console.log(windowScroll);

    $('.parallax-effect').css('background-position',
     'center ' +(windowScroll  * 0.75)+'px');

     $('.parallax-box').css('top', 
     -5+(windowScroll * 0.008)+'em');
}