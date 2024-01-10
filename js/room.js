(function(){
    var swiper = new Swiper(".roomswiper", {
       /*  autoplay:{
            delay:2500
        }, */
        loop: true,
        spaceBetween: 30,
        slidesPerView:0.9,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

})();