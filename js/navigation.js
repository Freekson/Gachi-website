$(document).ready(function() {
    var show_menu = true;
    $('.main-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#main').offset().top - 54
        },700);
        if(show_menu == false){
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
        }
    });
    $('.offer-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#offer').offset().top -54
        },700);
        if(show_menu == false){
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
        }
    });
    $('.diet-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#diet').offset().top - 54
        },700);
        if(show_menu == false){
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
        }
    });
    $('.contact-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - 54
        },700);
        if(show_menu == false){
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
        }
    });
    $('.creator-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#creator').offset().top - 54
        },700);
        if(show_menu == false){
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
        }
    });
    $('.menu-visible').on('click', function(){
        if(show_menu == true){
            $('.main-menu').animate({top: 0 }, 700);
            show_menu = false;
        }
        else{
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
        }
    });
    $(window).resize(function(){
        var window_width = $(window).width();
        if(window_width > 768){
            $('.main-menu').css('top',0);
            show_menu = true;
        }
        else{
            $('.main-menu').css('top',-240);
        }
    });
});