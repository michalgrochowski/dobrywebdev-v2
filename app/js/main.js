$('.projects').owlCarousel({
    margin:10,
    nav:true,
    dots: false,
    navText: ["Poprzedni", "Następny"],
    navSpeed: 700,
    items: 1
})

$('.header__link').on('click', function(event){
    $('html, body').animate({
        scrollLeft:$('#start').offset().left
    }, 700);
});

$(document).on('click touch', '.nav__link', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().left;
    $('body, html').animate({scrollLeft: pos}, 700);
    window.location.hash = id;
    return false;
});

$(document).on('click touch', '.nav__link--mobile', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().left;
    $('body, html').animate({scrollLeft: pos}, 700);
    window.location.hash = id;
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
    return false;
});

/* Open mobile menu after clicking hamburger icon */

$(".nav__hamburger").on("click touch", function() {
    $(".nav__hamburger").hide();
    $(".nav__close-menu").show();
    $(".nav__list--mobile").slideToggle();
});

/* Close mobile menu after clicking X icon */

$(".nav__close-menu").on("click touch", function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
});

/*
$(function() {
    $('.form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var checkphone = /^[5-9]{1}[0-9]{8}$/;
        var checkmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var checkname = /^([a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{2,}\s[a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{1,}'?-?[a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{2,}\s?([a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{1,})?)/;
        var email = $(".form__input--mail").val();
        var phone = $(".form__input--phone").val();
        var name = $(".form__input--name").val();
        var message = $(".form__textarea").val();
        $(".input__fail").remove();
        if (checkmail.test(email) === false) {
            var mailfail = "<p class='input__fail'>Podaj prawidłowy adres e-mail</p>";
            $(mailfail).hide().appendTo(".form__group--mail").fadeIn(500);
            return false;
        } else if (checkphone.test(phone) === false) {
            var phonefail = "<p class='input__fail'>Podaj prawidłowy, 9 cyfrowy numer telefonu</p>";
            $(phonefail).hide().appendTo(".form__group--phone").fadeIn(500);
            return false;
        } else if (checkname.test(name) === false) {
            var namefail = "<p class='input__fail'>Podaj prawidłowe imię i nazwisko</p>";
            $(namefail).hide().appendTo(".form__group--name").fadeIn(500);
            return false;
        } else if (message === "") {
            var msgfail = "<p class='input__fail'>Wiadomość nie może być pusta</p>";
            $(msgfail).hide().appendTo(".form__group--msg").fadeIn(500);
            return false;
        }
        else {
            $(".input__fail").remove();
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).done(function(data) {
                var success = '<div class="form__success"><p>Dziękuję za wiadomość!</p></div>';
                $(".form").trigger("reset");
                $(success).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
            }).fail(function(data) {
                var fail = '<div class="form__fail"><p>Nie udało się, spróbuj jeszcze raz.</p></div>';
                $(fail).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
            });
        }
    });
});
*/