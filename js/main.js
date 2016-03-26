
$( ".facebook" ).mouseover(function() {
  $(".st0").css("stroke", "#0f3e9f");
});
$( ".facebook" ).mouseleave(function() {
  $(".st0").css("stroke", "#777");
});

$( ".twitter" ).mouseover(function() {
  $(".st2").css("stroke", "#4c86fe");
});
$( ".twitter" ).mouseleave(function() {
  $(".st2").css("stroke", "#777");
});


$( ".make-order" ).click(function() {
  $("#pt").css("width", "calc(100% - 40px )");
  $('.cd-intro').toggleClass('fadeOut');
  $('#first-order-portfolio').toggleClass('fadeOut');

  setTimeout(function() {
     $(".second-step").toggleClass("hidden").fadeIn(500);
   }, 1100);

   setTimeout(function() {
      $(".second-step").toggleClass("fadeIn");
    }, 1400);

});

$( ".go-back" ).click(function() {

  setTimeout(function() {
     $("#pt").css("width", "50%");
   }, 400);


  setTimeout(function() {
     $('.cd-intro').toggleClass('fadeOut');
     $('.cd-intro').toggleClass('fadeIn');

   }, 1500);

   setTimeout(function() {
     $('.order-and-portfolio.second').toggleClass('fadeIn');
     $('.order-and-portfolio.second').toggleClass('fadeOut');

     $('#first-order-portfolio').toggleClass('fadeOut');
     $('#first-order-portfolio').toggleClass('fadeIn');

    }, 100);

  // $('#first-order-portfolio').addClass('fadeOut');

  setTimeout(function() {
    $('.second-step.heading').toggleClass('fadeOut');
  }, 100);


  // setTimeout(function() {
  //    $(".second-step").removeClass("hidden").fadeIn(500);
  //  }, 1100);

});
