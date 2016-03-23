
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
});
