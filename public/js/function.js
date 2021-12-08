var $carousel2 = $('.carousel');
var $carousel1 = $('.carousel-hero').flickity({
  on: {
    ready: function() {
      console.log('Flickity is ready');
    },
    change: function( index ) {
      console.log( 'Slide changed to' + index );
      $carousel2.flickity('select',index,false,true);
      // $('.hero-card').css('background-image','url(/public/assets/img/hero-card-2.png)');
      // $('').css({'background-image':'url(images/example.jpg)'});
    }
  }
});
var $carousel = $('.carousel-hero');
$('.carousel').flickity({
  on: {
    change: function (index){
      $carousel.flickity('select',index,false,true);
    } 
  }

});