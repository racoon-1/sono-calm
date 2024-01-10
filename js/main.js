$(document).ready(function(){

    $(window).scroll(function(){

        sct = $(window).scrollTop();
        console.log(sct);
    
        if (sct >= 100) {
            $('header').css({
                backgroundColor : '#fff',
            });

            $('.title a h2').css({
                color : '#333'
            });

            $('.title a h5').css({
                color : '#333'
            });

            $('.header_rev a').css({
                color : '#333'
            });
        } else if (sct < 99) {
            $('header').css({
                backgroundColor : 'rgba(0,0,0,0)',
            });

            $('.title a h2').css({
                color : '#fff'
            });

            $('.title a h5').css({
                color : '#fff'
            });

            $('.header_rev a').css({
                color : '#fff'
            });
        }
        
    });

   

/* sec_1 */

    var c = 3;

    setInterval(function(){

        c--;
        console.log(c);

        if(c==0) {
            $('.sec_1_container .sec_1_main_img').fadeIn();
            c=3;
        }else {
            $('.sec_1_container .sec_1_main_img').eq(c).fadeOut();
        }

    }, 5000);




/* main */

/* facility */
    
    var b = 8;

    setInterval(function(){

        b--;

        /* if (b==0) {
            $('.sec_4_container .sec_4_container_box').fadeIn();
            b=8;
        } else {
            $('.sec_4_container .sec_4_container_box').eq(b).fadeOut();
        } */

    }, 2000);


});