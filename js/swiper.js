(function(){
    var swiper = new Swiper(".testSwiper", {
        autoplay:{
            delay:2500
        },
        loop: true,
        spaceBetween: 30,
        slidesPerView:3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

})();


/* (function(){
    var swiper = new Swiper(".testSwiper", {
        // autoplay:{
        //     delay:1000
        // },
        loop: true,
        spaceBetween: 30,
        slidesPerView:3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

})(); */
