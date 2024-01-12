// // init swiper slider

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


// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'fade', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();