// Parallax Effect

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

// Scroll Smooth 

$('nav li a').on('click', function(e){
    if(this.hash!==' '){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

$('.main-page a').on('click', function(e){
  if(this.hash!==' '){
      const hash = this.hash;

      $('html, body').animate(
       {
           scrollTop: $(hash).offset().top
       },
       800
      );
  }
});