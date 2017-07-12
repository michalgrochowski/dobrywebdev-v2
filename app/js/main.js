(function(){
    $('.projects').owlCarousel({
    nav:true,
    dots: false,
    navText: ["Poprzedni", "Następny"],
    navSpeed: 700,
    touchDrag: false,
    mouseDrag: false,
    items: 1
})

    $('.container').owlCarousel({
    nav: false,
    dots: false,
    navSpeed: 1200,
    infinite: false,
    loop: false,
    URLhashListener: true,
    items: 1
})

window.addEventListener("DOMContentLoaded", function() {
    var iconKey = localStorage.getItem("icon");
    var sectionKey = localStorage.getItem("section");
    var navKey = localStorage.getItem("nav");
    var footerKey = localStorage.getItem("footer");
    var linkKey = localStorage.getItem("link");
    var hamburger = localStorage.getItem("hamburger");
    var closemenu = localStorage.getItem("closemenu");
    var mobilelist = localStorage.getItem("mobilelist");
    var body = localStorage.getItem("body");
    $(".icon--theme").attr("class", JSON.parse(iconKey));
    $(".section").attr("class", JSON.parse(sectionKey));
    $(".nav").attr("class", JSON.parse(navKey));
    $(".footer").attr("class", JSON.parse(footerKey));
    $('a').removeClass("light-theme--link dark-theme-link");
    $(".nav__hamburger").attr("class", JSON.parse(hamburger));
    $(".nav__close-menu").attr("class", JSON.parse(closemenu));
    $(".nav__list--mobile").attr("class", JSON.parse(mobilelist));
    $("body").attr("class", JSON.parse(body));
    if ($("#theme").hasClass("icon-moon")) {
        $('a').removeClass("dark-theme--link").addClass("light-theme--link");
    } else {
        $('a').removeClass("light-theme--link").addClass("dark-theme--link");
    };
    if ($(".nav__logo").attr("src", "img/logo-light.png")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
    } else if ($(".nav__logo").attr("src", "img/logo-dark.png")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
    };
});

$(".nav__link--mobile").on('click', function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
});

/* Open mobile menu after clicking hamburger icon */

$(".nav__hamburger").on("click", function() {
    $(".nav__hamburger").hide();
    $(".nav__close-menu").show();
    $(".nav__list--mobile").slideToggle();
});

/* Close mobile menu after clicking X icon */

$(".nav__close-menu").on("click", function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
});

$(".icon--theme").on("click", function(){
    $(this).toggleClass("icon-moon icon-sun");
    $(".section").toggleClass("light-theme dark-theme");
    $(".nav").toggleClass("light-theme dark-theme");
    $(".footer").toggleClass("light-theme dark-theme");
    $('a').toggleClass("light-theme--link dark-theme--link");
    $(".nav__logo").attr("src", "img/logo-dark.png");
    $(".nav__hamburger").toggleClass("light-theme dark-theme");
    $(".nav__close-menu").toggleClass("light-theme dark-theme");
    $(".nav__list--mobile").toggleClass("light-theme dark-theme");
    $("body").toggleClass("light-theme dark-theme");
    window.localStorage.clear();
    // Items for localStorage
    var icon = $(".icon--theme").attr("class");
    localStorage.setItem("icon", JSON.stringify(icon));
    var section = $(".section").attr("class");
    localStorage.setItem("section", JSON.stringify(section));
    var nav = $(".nav").attr("class");
    localStorage.setItem("nav", JSON.stringify(nav));
    var footer = $(".footer").attr("class");
    localStorage.setItem("footer", JSON.stringify(footer));
    var hamburger = $(".nav__hamburger").attr("class");
    localStorage.setItem("hamburger", JSON.stringify(hamburger));
    var cloemenu = $(".nav__close-menu").attr("class");
    localStorage.setItem("closemenu", JSON.stringify(cloemenu));
    var mobilelist = $(".nav__list--mobile").attr("class");
    localStorage.setItem("mobilelist", JSON.stringify(mobilelist));
    var body = $("body").attr("class");
    localStorage.setItem("body", JSON.stringify(body));
    if ($(".nav__logo").attr("src", "img/logo-light.png")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
    } else if ($(".nav__logo").attr("src", "img/logo-dark.png")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
    }
})

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
})();