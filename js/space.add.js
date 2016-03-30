//// 0. Describe this demo
window.demoDescription = "A very simple demo of Pt's main concepts: extending Pt classes, drawing with Form, and animating in Space.";


//// 1. Define Space and Form
var colors = {
  a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#ffe359",
  b1: "#96bfed", b2: "#ebedf8", b3: "#EBEDF8", b4: "#59D2B0",
  c1: "#111", c2: "#567", c3: "#abc", c4: "rgba(255,255,255,.9)"
};

var space = new CanvasSpace("demo", colors.b2 ).display();

var form = new Form( space );
form.stroke( false );


//// 2. Create Elements

// A Dust is a kind of Vector
function Dust() {
  Vector.apply( this, arguments ); // call Vector's constructor
  this.age = 0;
  this.maxAge = Math.random() * 5000 + 50;
  this.weight =  0.25 + Math.random()*14;
  this.color = (this.weight > 0.7) ? colors["a"+Math.ceil(Math.random()*4)] : "#000";
}
Util.extend( Dust, Vector ); // extends Vector class


// define an animate function so it can be animated when added into Space
Dust.prototype.animate = function(time, fps, context) {

  // drift movement
  this.add( rand(1), (Math.random() - Math.random()*(1-this.weight/1.5)) );

  // remove when done
  if (this.age++ > this.maxAge) space.remove(this);

  // glitter
  var gray = (this.maxAge-this.age)/this.maxAge * 0.4;
  gray = Math.max(0, Math.min( 0.6, (Math.random() > 0.5) ? gray + 0.05 : gray - 0.05 ) );

  // draw dust
  form.fill( Util.toRGBColor( this.color, true, gray ) );
  form.point( this, this.weight, true );

};

// a helper function for randomness
function rand(r) { return Math.random() * r - Math.random() * r; }


//// 3. Visualize, Animate, Interact

// When mouse moved, add dust into space
space.bindCanvas("mousemove", function(evt) {

  // add two Dust into space
  space.add( new Dust( evt.offsetX+rand(5), evt.offsetY+rand(5) ) );
  space.add( new Dust( evt.offsetX+rand(5), evt.offsetY+rand(5) ) );

});

// 4. Start playing
space.play();









// Text Animation

jQuery(document).ready(function($){
  //set animation timing
  var animationDelay = 3100,
  //loading bar effect
  barAnimationDelay = 3800,
  barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
  //letters effect
  lettersDelay = 50,
  //type effect
  typeLettersDelay = 150,
  selectionDuration = 500,
  typeAnimationDelay = selectionDuration + 800,
  //clip effect
  revealDuration = 600,
  revealAnimationDelay = 1500;

initHeadline();

function initHeadline(){singleLetters($(".cd-headline.letters").find("b")),animateHeadline($(".cd-headline"))}function singleLetters(e){e.each(function(){var e=$(this),s=e.text().split(""),t=e.hasClass("is-visible");for(i in s)e.parents(".rotate-2").length>0&&(s[i]="<em>"+s[i]+"</em>"),s[i]=t?'<i class="in">'+s[i]+"</i>":"<i>"+s[i]+"</i>";var a=s.join("");e.html(a).css("opacity",1)})}function animateHeadline(e){var i=animationDelay;e.each(function(){var e=$(this);if(e.hasClass("loading-bar"))i=barAnimationDelay,setTimeout(function(){e.find(".cd-words-wrapper").addClass("is-loading")},barWaiting);else if(e.hasClass("clip")){var s=e.find(".cd-words-wrapper"),t=s.width()+10;s.css("width",t)}else if(!e.hasClass("type")){var a=e.find(".cd-words-wrapper b"),n=0;a.each(function(){var e=$(this).width();e>n&&(n=e)}),e.find(".cd-words-wrapper").css("width",n)}setTimeout(function(){hideWord(e.find(".is-visible").eq(0))},i)})}function hideWord(e){var i=takeNext(e);if(e.parents(".cd-headline").hasClass("type")){var s=e.parent(".cd-words-wrapper");s.addClass("selected").removeClass("waiting"),setTimeout(function(){s.removeClass("selected"),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},selectionDuration),setTimeout(function(){showWord(i,typeLettersDelay)},typeAnimationDelay)}else if(e.parents(".cd-headline").hasClass("letters")){var t=e.children("i").length>=i.children("i").length?!0:!1;hideLetter(e.find("i").eq(0),e,t,lettersDelay),showLetter(i.find("i").eq(0),i,t,lettersDelay)}else e.parents(".cd-headline").hasClass("clip")?e.parents(".cd-words-wrapper").animate({width:"2px"},revealDuration,function(){switchWord(e,i),showWord(i)}):e.parents(".cd-headline").hasClass("loading-bar")?(e.parents(".cd-words-wrapper").removeClass("is-loading"),switchWord(e,i),setTimeout(function(){hideWord(i)},barAnimationDelay),setTimeout(function(){e.parents(".cd-words-wrapper").addClass("is-loading")},barWaiting)):(switchWord(e,i),setTimeout(function(){hideWord(i)},animationDelay))}function showWord(e,i){e.parents(".cd-headline").hasClass("type")?(showLetter(e.find("i").eq(0),e,!1,i),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:e.width()+10},revealDuration,function(){setTimeout(function(){hideWord(e)},revealAnimationDelay)})}function hideLetter(e,i,s,t){if(e.removeClass("in").addClass("out"),e.is(":last-child")?s&&setTimeout(function(){hideWord(takeNext(i))},animationDelay):setTimeout(function(){hideLetter(e.next(),i,s,t)},t),e.is(":last-child")&&$("html").hasClass("no-csstransitions")){var a=takeNext(i);switchWord(i,a)}}function showLetter(e,i,s,t){e.addClass("in").removeClass("out"),e.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),s||setTimeout(function(){hideWord(i)},animationDelay)):setTimeout(function(){showLetter(e.next(),i,s,t)},t)}function takeNext(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function takePrev(e){return e.is(":first-child")?e.parent().children().last():e.prev()}function switchWord(e,i){e.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}

});
