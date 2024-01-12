






/*init Parallax */
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// /*init rellax */
// var rellax = new Rellax('.rellax', {
//   center: true
// });



 
 

  //how to go to the click section from nav
  $(".navbar-nav").find("a").click(function(e) {
    e.preventDefault();
   
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },2000,"swing");
    
});

 /*init Aos*/
 AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
  anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation
 });  


/* function that create the connectors between stars on nav */
// var line;
// $(document).ready(
//   function linkers() {
//     var c1=new Connector({ele1: 'a', ele2: 'b', lineStyle: '1px solid red' })
//     var c2=new Connector({ele1: 'b', ele2: 'c', lineStyle: '1px solid red' })
//     var c3=new Connector({ele1: 'c', ele2: 'd', lineStyle: '1px solid red' })
//     var c4=new Connector({ele1: 'd', ele2: 'e', lineStyle: '1px solid red' })
//     var c5=new Connector({ele1: 'a', ele2: 'e', lineStyle: '1px solid red' })
//     // var c6=new Connector({ele1: 'a', ele2: 'c', lineStyle: '1px solid red' })
// });

// $(window).resize(function(){location.reload();})
// var lastWidth = $(window).width();

$(window).resize(function(){
if($(window).width() > 992){
 $(".show").removeClass('show');
 $(".navbar-toggler").addClass('collapsed');
}

})


// work slider
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});
var swiper = new Swiper('.swiper-container', {
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper('.clients-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
 
});
$('.clients-container ul').on('mouseenter', function(e){
  console.log('stop autoplay');
  swiper.autoplay.stop();
})
$('.clients-container ul').on('mouseleave', function(e){
  console.log('start autoplay');
  swiper.autoplay.start();
})



//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight();

$(window).scroll(function() {
	if ($(window).scrollTop() > toggleHeight) {
		//Adds active class to make button visible
		$(".m-backtotop").addClass("active");
		
	} else {
		//Removes active class to make button visible
		$(".m-backtotop").removeClass("active");
		
	}
});


//Scrolls the user to the top of the page again
$(".m-backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$(".icon-scroll").click(function() {
	$("html, body").animate({ scrollTop: $("#main").offset().top }, "slow");
	return false;
});

$(function() {  
  $("body").niceScroll({
    cursorwidth:"10px",
    cursorcolor: "#3c415e", // change cursor color in hex
    cursorborder: "0px solid #fff", // css definition for cursor border
    zindex: "auto" | [10000000000], // change z-index for scrollbar div
    cursoropacitymin: 0.4,// change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    background:"rgba(20,20,20,0.3)",
  });
});


$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.4) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.4) + 'px');
    }
  })
}

$('.map')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

// var newPosition = 0;

// $("body").scroll(function() {
    
//   newPosition ++ ;
//   newPosition = newPosition * 20 ;
//     var newPosition = "translateY(" + newPosition + "px)";
//     $(".earth img").css({"-moz-transform" : newPosition, "-webkit-transform" : newPosition});
// });


var typed = new Typed("#unitedits",{
  strings: ["United<strong> ITS</strong>"],
  typeSpeed: 90,
  showCursor: false,
  startDelay :500
});






const rocket = document.querySelector('.c-rocket');
const flames = [...document.querySelectorAll('.c-rocket__flame')];
const delay = 40;
let now = Date.now();
let then = Date.now();
let elapsed = 0;
//let randomStar = 0;

const random = (min, max) => Math.random() * (max - min) + min;

const animeFlames = () => {
  now = Date.now();
  elapsed = now - then;

  if (elapsed > delay) {
    flames.map(flame => {
      flame.style.transform = `scale(${random(0.8, 1)}, ${random(0.8, 1)})`;
    });

    then = Date.now();
  }

  requestAnimationFrame(animeFlames);
}



const space = () => {
  requestAnimationFrame(animeFlames);
 
}

requestAnimationFrame(space);