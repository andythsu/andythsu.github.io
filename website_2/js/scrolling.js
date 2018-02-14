$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hide_me').each( function(i){

      /* if top of object is greater than half of the current window */
      var top_of_object = $(this).position().top;
      var half_of_window = $(window).scrollTop() + $(window).height() / 2;

      /* If the object is completely visible in the window, fade it it */

      if( half_of_window > top_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });
  });
});
