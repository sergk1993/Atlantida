$(function(){

    $('.header__slider').slick({
        nextArrow:'<button class="header__arrow header__arrow-next"><img src="images/header-arrow-next.png" alt=""></button>',
        prevArrow:'<button class="header__arrow header__arrow-prev"><img src="images/header-arrow-prev.png" alt=""></button>'
    });

 
        $('.portfolio__box').masonry({
            // options
            itemSelector: '.portfolio__box-img',
            columnWidth: 10
        });
   
        var mixer = mixitup('.portfolio__inner');
        mixer.filter('.all');


        $('.people__slider').slick({
            arrows:false,
            dots:true,
        });

        $('.header__button').on('click', function(){
            $('.menu__list').toggleClass('menu__list-active')
        });

        $('.header__button').on('click', function(){
            $('.header__button span').toggleClass('active')
        });


        new WOW().init();
         
});