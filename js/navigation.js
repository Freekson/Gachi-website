$(document).ready(function() {
    var show_menu = true;
    $('.menu-visible').on('click', function(){
        if(show_menu == true){
            $('.main-menu').animate({top: 0 }, 700);
            show_menu = false;
            $(this).css({
                'background-color':'black',
                'color':'whitesmoke'
            });
        }
        else{
            $('.main-menu').animate({top: -240 }, 700);
            show_menu = true;
            $(this).css({
                'background-color':'#fdc501',
                'color':'black'
            });
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
