
$.getJSON("js/languages.json", function(json) {
    
    if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "es");
    }
    var lang = localStorage.getItem("lang");
    var doc = json;
    $('.lang').each(function(index, element) {
        $(this).text(doc[lang][$(this).attr('key')]);
    }); 

    $('.translate').click(function() {
        localStorage.setItem("lang", $(this).attr('id'));
        var lang = $(this).attr('id');
        var doc = json;
        $('.idioma').css('display', 'none');
        $('.lang').each(function(index, element) {
            $(this).text(doc[lang][$(this).attr('key')]);
            $(this).attr('placeholder', doc[lang][$(this).attr('key')]);
            $(this).val(doc[lang][$(this).attr('key')]);
        });

        $('.cambiar-idioma').click(function() {
            $('.idioma').css('display', 'block');
        });

    }); 
});