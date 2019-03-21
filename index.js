'use strict';

$( document ).ready(function() {
  
    $(window).on('load', function () {
    var $preloader = $('#preloader'),
        $svg_anm   = $preloader.find('.seq-preloade');
    $svg_anm.fadeOut();
    // $header = $('header').fadeOut('hide')
    $preloader.delay(2000).fadeOut('slow');
});
// $(window).on('load', function () {
//     $preloader = $('#preloader'),
//       $loader = $preloader.find('.prePreloader');
//     $loader.fadeOut();
//     $preloader.delay(350).fadeOut('slow');
//   });
$('.nav-link').click(function(e){
    e.preventDefault();
    let menuScroll = e.target.id;
    let thisBlock = '.'+ menuScroll;
    $('html, body').animate({
        scrollTop: $(thisBlock).offset().top
    },700)
})
  $('#home-link').click(function(e){
     $('html, body').animate({scrollTop: 0}, 500);
        e.preventDefault();
  })
  $('#home').click(function(e){
    $('html, body').animate({scrollTop: 0}, 500);
       e.preventDefault();
 }) 
});
