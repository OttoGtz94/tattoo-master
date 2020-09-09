$(document).ready(function($) {
    function scrollNav() {

        $('.menu-navegacion a').click(function() {
            $(".active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
            return false;
        });
    }

    function scrollHeader() {

        $('#menu a').click(function() {
            $(".active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
            return false;
        });
    }

    // function traducir() {
    //     console.log("jQuery cargado");
    //     $.getJSON('lang.json', function(json) {
    //         let boton = $('.traducir');
    //         //console.log(idoma);
    //         boton.click(function() {
    //             let idoma = $('.traducir').attr('id', 'es');
    //             boton.text('Ingles');
    //             console.log("Se dio click en traducir");
    //             console.log(idoma);
    //         });
    //     });
    // }
    scrollNav();
    scrollHeader();
    //traducir();

});