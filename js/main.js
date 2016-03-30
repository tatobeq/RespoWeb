// Smoth Scroll
$('.scrollmenu').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  || location.hostname == this.hostname) {

  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {

       $('html,body').animate({
           scrollTop: target.offset().top
      }, 1200);
      return false;

  }
}
});

$(function() {
	$.scrollify({
    section : "section",
		sectionName : "section-name",
		easing: "easeOutExpo",
		scrollSpeed: 900,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});
});
