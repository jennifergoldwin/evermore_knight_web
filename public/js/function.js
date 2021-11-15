// var $carousel1 = $('.carousel-hero').flickity();
// var $carousel2 = $('.carousel-hero-2').flickity();

// // $('.button-group').on( 'click', '.button', function() {
// //   var index = $(this).index();
// //   $carousel.flickity( 'select', index, false, true );
// // });

// $carousel1.flickity('next',function(){
//     var index = $(this).index();
//     $carousel.flickity( 'select', index, false, true );
// });
var $carousel2 = $('.carousel-hero-2');
var $carousel1 = $('.carousel-hero').flickity({
    on: {
      ready: function() {
        console.log('Flickity is ready');
      },
      change: function( index ) {
        console.log( 'Slide changed to' + index );
        $carousel2.flickity('select',index,false,true);
      }
    }
  });