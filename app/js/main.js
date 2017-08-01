(function(){
    var projects = $(".projects");
    var container = $(".container");
    $(function() {
        projects.owlCarousel({
        navSpeed: 700,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        freeDrag: false,
        items: 1,
        slideBy: 1,
    });
        container.owlCarousel({
        nav: false,
        dots: false,
        navSpeed: 700,
        infinite: false,
        rewind: false,
        loop: false,
        items: 1,
        slideBy: 1,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        freeDrag: false
    });
});    

function stopOwlPropagation(element) {
    $(element).on('to.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('next.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('prev.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('destroy.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('changed.owl.carousel', function(e) { e.stopPropagation(); });
}

stopOwlPropagation(projects);
stopOwlPropagation(container);

$('.projects__next').click(function() {
    projects.trigger('next.owl.carousel', [300]);
});

$('.projects__prev').click(function() {
    projects.trigger('prev.owl.carousel', [300]);
});

$(".nav__link--mobile, .nav__link--start").on("click changed.owl.carousel", function(){
    if ($(this).attr("href") !== "#start") {
    $("body").css("overflow-x", "hidden");
    $("body").css("overflow-y", "auto");
    $("html").css("overflow-x", "hidden");
    $("html").css("overflow-y", "auto");
} else if ($(this).attr("href") === "#start") {
    $("body").css("overflow-x", "hidden");
    $("body").css("overflow-y", "hidden");
    $("html").css("overflow-x", "hidden");
    $("html").css("overflow-y", "hidden");
}
});

/*
container.on('changed.owl.carousel', function(event) {
    if (event.item.index === 0) {
        window.location.hash = "#start"
    } else if (event.item.index === 1) {
        window.location.hash = "#about"
    } else if (event.item.index === 2) {
        window.location.hash = "#projects"
    } else if (event.item.index === 3) {
        window.location.hash = "#contact"
    }
})*/

window.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash === "#start" || window.location.hash === "") {
        $("body").css("overflow-x", "hidden");
        $("body").css("overflow-y", "hidden");
        $("html").css("overflow-x", "hidden");
        $("html").css("overflow-y", "hidden");
    } else  {
        $("body").css("overflow-x", "hidden");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-x", "hidden");
        $("html").css("overflow-y", "auto");
    }
    if (localStorage.getItem("icon") === null) {
        return false;
    } else {
    $(".icon--theme").attr("class", JSON.parse(localStorage.getItem("icon")));
    $(".section").attr("class", JSON.parse(localStorage.getItem("section")));
    $(".nav").attr("class", JSON.parse(localStorage.getItem("nav")));
    $(".footer").attr("class", JSON.parse(localStorage.getItem("footer")));
    $(".nav__hamburger").attr("class", JSON.parse(localStorage.getItem("hamburger")));
    $(".nav__close-menu").attr("class", JSON.parse(localStorage.getItem("closemenu")));
    $(".nav__list--mobile").attr("class", JSON.parse(localStorage.getItem("mobilelist")));
    $("body").attr("class", JSON.parse(localStorage.getItem("body")));
    $(".button--theme").attr("class", JSON.parse(localStorage.getItem("buttonTheme")));
    $(".projects__prev").attr("class", JSON.parse(localStorage.getItem("projectsPrev")));
    $(".projects__next").attr("class", JSON.parse(localStorage.getItem("projectsNext")));
    $(".form__button").attr("class", JSON.parse(localStorage.getItem("sendButton")));
    $(".langPL").attr("class", JSON.parse(localStorage.getItem("langPL")));
    $(".langENG").attr("class", JSON.parse(localStorage.getItem("langENG")));
    $('a').removeClass("light-theme--link dark-theme--link");
    if ($("#theme").hasClass("icon-moon")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
         $('a').addClass("light-theme--link").removeClass("dark-theme--link");
    } else if ($("#theme").hasClass("icon-sun")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
         $('a').addClass("dark-theme--link").removeClass("light-theme--link");
    }
    if ($(".langENG").hasClass("button--lang--active")) {
        $(".langENG").removeClass("button--lang--active");
        $(".langPL").addClass("button--lang--active");
    } else if ($(".langPL").hasClass("button--lang--active")) {
        return;
    }
    }
});

$(".nav__link--mobile").on('click', function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").hide();
});

$(".nav__hamburger").on("click", function() {
    $(".nav__hamburger").hide();
    $(".nav__close-menu").show();
    $(".nav__list--mobile").show().attr("aria-expanded", "true");
});

$(".nav__close-menu").on("click", function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").hide().attr("aria-expanded", "false");
});

$(".nav__link--start").on("click", function(){
    if ($(".nav__list--mobile").css("display") === "block") {
        $(".nav__list--mobile").hide();
        $(".nav__hamburger").show();
        $(".nav__close-menu").hide();
    } else {
        return;
    }
});

$(".button--theme").on("click", function(){
    window.localStorage.clear();
    $(".icon--theme").toggleClass("icon-moon icon-sun");
    $(".section").toggleClass("light-theme dark-theme");
    $(".nav").toggleClass("light-theme dark-theme");
    $(".footer").toggleClass("light-theme dark-theme");
    $('a').toggleClass("light-theme--link dark-theme--link");
    $(".nav__hamburger").toggleClass("light-theme dark-theme");
    $(".nav__close-menu").toggleClass("light-theme dark-theme");
    $(".nav__list--mobile").toggleClass("light-theme dark-theme");
    $("body").toggleClass("light-theme dark-theme");
    $(".button--theme").toggleClass("dark-outline");
    $(".button--flag").toggleClass("dark-outline");
    $(".projects__prev").toggleClass("dark-theme--button light-theme--button dark-outline");
    $(".projects__next").toggleClass("dark-theme--button light-theme--button dark-outline");
    $(".form__button").toggleClass("light-theme--button dark-theme--button dark-outline");
    $(".langPL").toggleClass("light-theme dark-theme");
    $(".langENG").toggleClass("light-theme dark-theme");
    // Items for localStorage
    localStorage.setItem("icon", JSON.stringify($(".icon--theme").attr("class")));
    localStorage.setItem("section", JSON.stringify($(".section").attr("class")));
    localStorage.setItem("nav", JSON.stringify($(".nav").attr("class")));
    localStorage.setItem("footer", JSON.stringify($(".footer").attr("class")));
    localStorage.setItem("hamburger", JSON.stringify($(".nav__hamburger").attr("class")));
    localStorage.setItem("closemenu", JSON.stringify($(".nav__close-menu").attr("class")));
    localStorage.setItem("mobilelist", JSON.stringify($(".nav__list--mobile").attr("class")));
    localStorage.setItem("body", JSON.stringify($("body").attr("class")));
    localStorage.setItem("buttonTheme", JSON.stringify($(".button--theme").attr("class")));
    localStorage.setItem("projectsPrev", JSON.stringify($(".projects__prev").attr("class")));
    localStorage.setItem("projectsNext", JSON.stringify($(".projects__next").attr("class")));
    localStorage.setItem("sendButton", JSON.stringify($(".form__button").attr("class")));
    localStorage.setItem("langPL", JSON.stringify($(".langPL").attr("class")));
    localStorage.setItem("langENG", JSON.stringify($(".langENG").attr("class")));
    if ($("#theme").hasClass("icon-moon")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
    } else if ($("#theme").hasClass("icon-sun")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
    }
});

$(".langENG").on("click", function() {
    if ($(this).hasClass("button--lang--active")) {
        return;
    } else {
        $(this).toggleClass("button--lang--active");
        $(".langPL").toggleClass("button--lang--active");
    }
    $(".button--theme").attr("aria-label", "Change the website theme");
    $(".button--theme").attr("title", "Change the website theme");
    $(".langPL").attr("title", "Change language to polish");
    $(".langENG").attr("title", "Change language to english");
    $(".nav__hamburger").attr("title", "Open menu");
    $(".nav__close-menu").attr("title", "Close menu");
    $.getJSON("json/content-eng.json", function(data) {
        $(".navAbout").text(data.navAbout);
        $(".navProjects").text(data.navProjects);
        $(".navContact").text(data.navContact);
        $(".mainTitle").text(data.mainTitle);
        $(".mainSubtitle").text(data.mainSubtitle);
        $(".aboutTitle").text(data.aboutTitle);
        $(".aboutSubtitle").text(data.aboutSubtitle);
        $(".aboutDescription").text(data.aboutDescription);
        $(".skillsSubtitle").text(data.skillsSubtitle);
        $(".projectsTitle").text(data.projectsTitle);
        $(".interiorDescription").text(data.interiorDescription);
        $(".sleszynskiDescription").text(data.sleszynskiDescription);
        $(".todoDescription").text(data.todoDescription);
        $(".interiorv1Description").text(data.interiorv1Description);
        $(".dobrywebdevDescription").text(data.dobrywebdevDescription);
        $(".cvDescription").text(data.cvDescription);
        $(".interactiveDescription").text(data.interactiveDescription);
        $(".formDescription").text(data.formDescription);
        $(".projectLive").text(data.projectLive);
        $(".projectCode").text(data.projectCode);
        $(".contactTitle").text(data.contactTitle);
        $(".mailLabel").text(data.mailLabel);
        $(".phoneLabel").text(data.phoneLabel);
        $(".nameLabel").text(data.nameLabel);
        $(".textLabel").text(data.textLabel);
        $(".sendButton").text(data.sendButton);
        $(".phone").text(data.phone);
        $(".mail").text(data.mail);
        $(".form__input--mail").attr("placeholder", data.mailPlaceholder);
        $(".form__input--name").attr("placeholder", data.namePlaceholder);
        $(".form__textarea").attr("placeholder", data.textPlaceholder);
        $(".form__button").attr("value", data.sendButton);
    });
});

$(".langPL").on("click", function() {
    if ($(this).hasClass("button--lang--active")) {
        return;
    } else {
        $(this).toggleClass("button--lang--active");
        $(".langENG").toggleClass("button--lang--active");
    }
    $.getJSON("json/content-pl.json", function(data) {
        $(".navAbout").text(data.navAbout);
        $(".navProjects").text(data.navProjects);
        $(".navContact").text(data.navContact);
        $(".mainTitle").text(data.mainTitle);
        $(".mainSubtitle").text(data.mainSubtitle);
        $(".aboutTitle").text(data.aboutTitle);
        $(".aboutSubtitle").text(data.aboutSubtitle);
        $(".aboutDescription").text(data.aboutDescription);
        $(".skillsSubtitle").text(data.skillsSubtitle);
        $(".projectsTitle").text(data.projectsTitle);
        $(".interiorDescription").text(data.interiorDescription);
        $(".sleszynskiDescription").text(data.sleszynskiDescription);
        $(".todoDescription").text(data.todoDescription);
        $(".interiorv1Description").text(data.interiorv1Description);
        $(".dobrywebdevDescription").text(data.dobrywebdevDescription);
        $(".cvDescription").text(data.cvDescription);
        $(".interactiveDescription").text(data.interactiveDescription);
        $(".formDescription").text(data.formDescription);
        $(".projectLive").text(data.projectLive);
        $(".projectCode").text(data.projectCode);
        $(".contactTitle").text(data.contactTitle);
        $(".mailLabel").text(data.mailLabel);
        $(".phoneLabel").text(data.phoneLabel);
        $(".nameLabel").text(data.nameLabel);
        $(".textLabel").text(data.textLabel);
        $(".sendButton").text(data.sendButton);
        $(".phone").text(data.phone);
        $(".mail").text(data.mail);
        $(".form__input--mail").attr("placeholder", data.mailPlaceholder);
        $(".form__input--name").attr("placeholder", data.namePlaceholder);
        $(".form__textarea").attr("placeholder", data.textPlaceholder);
        $(".form__button").attr("value", data.sendButton);
    });
});

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
                var successPl = '<div class="form__success"><p>Dziękuję za wiadomość!</p></div>';
                var successEng = '<div class="form__success"><p>Thank you for your message!</p></div>';
                if (flag.attr("src") === "img/eng.png") {
                    $(".form").trigger("reset");
                    $(successPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                } else if (flag.attr("src") === "img/pl.png") {
                    $(".form").trigger("reset");
                    $(successEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                }
            }).fail(function(data) {
                var failPl = '<div class="form__fail"><p>Nie udało się, spróbuj jeszcze raz.</p></div>';
                var failEng = '<div class="form__fail"><p>Something went wrong, please try again.</p></div>';
                $(failPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                if (flag.attr("src") === "img/eng.png") {
                    $(failPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                } else if (flag.attr("src") === "img/pl.png") {
                    $(failEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                }
            });
        }
    });
});
})();