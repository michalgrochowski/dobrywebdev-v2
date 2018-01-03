(function(){
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
          console.log('ServiceWorker registration successful!');
        }).catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });
    }

    var projects = $(".projects");
    var container = $(".container");

    // OwlCarousel settings
    $(function() {
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
        projects.owlCarousel({
        navSpeed: 700,
        dots: false,
        touchDrag: true,
        mouseDrag: false,
        pullDrag: true,
        freeDrag: true,
        items: 1,
        slideBy: 1,
    });
});    

// Main function that loads theme settings from localStorage, displays welcome text and block projects links,

$(window).on("load", function() {
    checkTime();
    howOldAmI();
    $(".projects__link").attr("tabindex", "-1");
    $(".owl-item.active .projects__project .projects__link").attr("tabindex", "0");
    $(".cookie__close")
    if (window.location.hash === "#start" || window.location.hash === "") {
        overflowOff();
        showStart();
    } else if (window.location.hash === "#about") {
        overflowOn();
        showAbout();
    } else if (window.location.hash === "#projects") {
        overflowOn();
        showProjects();
    } else if (window.location.hash === "#contact") {
        overflowOn();
        showContact();
    } 
    if (window.localStorage.length === 0 || window.localStorage.length === 1) {
        return;
    }  else if (localStorage.getItem("icon") !== null) {
    $(".cookie-info").attr("class", JSON.parse(localStorage.getItem("cookie")));
    $(".icon--theme").attr("class", JSON.parse(localStorage.getItem("icon")));
    $(".body-border--top").attr("class", JSON.parse(localStorage.getItem("bodyBorderTop")));
    $(".body-border--bottom").attr("class", JSON.parse(localStorage.getItem("bodyBorderBottom")));
    $(".body-border--left").attr("class", JSON.parse(localStorage.getItem("bodyBorderLeft")));
    $(".body-border--right").attr("class", JSON.parse(localStorage.getItem("bodyBorderRight")));
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
    $(".form__input--mail").attr("class", JSON.parse(localStorage.getItem("inputMail")));
    $(".form__input--phone").attr("class", JSON.parse(localStorage.getItem("inputPhone")));
    $(".form__input--name").attr("class", JSON.parse(localStorage.getItem("inputName")));
    $(".form__textarea").attr("class", JSON.parse(localStorage.getItem("textarea")));
    $(".cookie-info__close").attr("class", JSON.parse(localStorage.getItem("cookieClose")));
    $('a').removeClass("light-theme--link dark-theme--link");
    $(".footer__link").css("border-bottom", "none");
    $(".socials__item").css("border-bottom", "none");
    $(".projects__link").css("border-bottom", "none");
    $(".cookie-info__close").css("border-bottom", "none");
    if ($("#theme").hasClass("icon-moon")) {
        $(".nav__logo").attr("src", "img/logo-light.png");
        $('a').addClass("light-theme--link").removeClass("dark-theme--link");
        $(".nav__link--start").removeClass("light-theme--link");
    } else if ($("#theme").hasClass("icon-sun")) {
        $(".nav__logo").attr("src", "img/logo-dark.png");
        $('a').addClass("dark-theme--link").removeClass("light-theme--nav-link");
        $(".nav__link--start").removeClass("dark-theme--link");
    }
    if ($(".langENG").hasClass("button--lang--active")) {
        $(".langENG").removeClass("button--lang--active");
        $(".langPL").addClass("button--lang--active");
    } else if ($(".langPL").hasClass("button--lang--active")) {
        return;
    }
    }
});

// Check what time it is and display welcome text based on that

function checkTime() {
    var date = new Date();
    var currentTime = date.getHours();
    if (currentTime >= 6 && currentTime <= 18) {
        $(".overlay").addClass("overlay--light");
        $(".overlay__text").text("Dzień dobry");
    } else {
        $(".overlay__text").text("Dobry wieczór");
        $(".overlay").addClass("overlay--dark");
    }
}

// Smaller functions

function overflowOn() {
    $("body").css("overflow-x", "hidden");
    $("body").css("overflow-y", "auto");
    $("html").css("overflow-x", "hidden");
    $("html").css("overflow-y", "auto");
}

function overflowOff() {
    $("body").css("overflow-x", "hidden");
    $("body").css("overflow-y", "hidden");
    $("html").css("overflow-x", "hidden");
    $("html").css("overflow-y", "hidden");
}

function showStart() {
    $("#start").css("visibility", "visible");
    $("#about").css("visibility", "hidden");
    $("#projects").css("visibility", "hidden");
    $("#contact").css("visibility", "hidden");
}

function showAbout() {
    $("#start").css("visibility", "hidden");
    $("#about").css("visibility", "visible");
    $("#projects").css("visibility", "hidden");
    $("#contact").css("visibility", "hidden");
}

function showProjects() {
    $("#start").css("visibility", "hidden");
    $("#about").css("visibility", "hidden");
    $("#projects").css("visibility", "visible");
    $("#contact").css("visibility", "hidden");
}

function showContact() {
    $("#start").css("visibility", "hidden");
    $("#about").css("visibility", "hidden");
    $("#projects").css("visibility", "hidden");
    $("#contact").css("visibility", "visible");
}

function stopOwlPropagation(element) {
    $(element).on('to.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('next.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('prev.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('destroy.owl.carousel', function(e) { e.stopPropagation(); });
    $(element).on('changed.owl.carousel', function(e) { e.stopPropagation(); });
}

// Additional OwlCarousel functions

stopOwlPropagation(projects);
stopOwlPropagation(container);

$('.projects__next').click(function() {
    projects.trigger('next.owl.carousel', [300]);
    if ($(".projects__project").parent().hasClass("active")) {
        $(this).find(".projects__link").attr("tabindex", "0");
    } else {
        return;
    }
});

$('.projects__prev').click(function() {
    projects.trigger('prev.owl.carousel', [300]);
    if ($(".projects__project").parent().hasClass("active")) {
        $(this).find(".projects__link").attr("tabindex", "0");
    } else {
        return;
    }
});

projects.on("translated.owl.carousel", function(){
    $(".projects__link").attr("tabindex", "-1");
    $(".owl-item.active .projects__project .projects__link").attr("tabindex", "0");
})

// Showing and hiding specific sections so the others can't be reached with keyboard

$(window).on("hashchange", function(){
    if (window.location.hash === "#start" || window.location.hash === "") {
        showStart();
    } else if (window.location.hash === "#about") {
        showAbout();
    } else if (window.location.hash === "#projects") {
        showProjects();
    } else if (window.location.hash === "#contact") {
        showContact();
    }
});

// Turn on or off overflow-x depending on current hash

$(".nav__link--mobile, .nav__link--start, .nav__link").on("click", function(){
    if ($(this).attr("href") !== "#start") {
        overflowOn();
    } else if ($(this).attr("href") === "#start") {
        overflowOff();
    }
});

// Hide the overlay after animation is finished

$(".overlay").on("animationend", function(){
    $(this).css("display", "none");
});

// Check if cookies info was closed before and if so don't show it

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
        if (localStorage.getItem("cookieoff") === "true" && $(".cookie-info").hasClass("visuallyhidden") === false) {
            $(".cookie-info").addClass("visuallyhidden");
        } else {
            return;
        }
    }, 500);
});

// Mobile menu scripts, showing hamburger etc.

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

// Theme changing script that also saves settings in localStorage

$(".button--theme").on("click", function(){
    window.localStorage.clear();
    $(".icon--theme").toggleClass("icon-moon icon-sun");
    $(".body-border").toggleClass("light-theme dark-theme");
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
    $(".langPL").toggleClass("light-theme dark-theme dark-outline");
    $(".langENG").toggleClass("light-theme dark-theme dark-outline");
    $(".cookie-info").toggleClass("light-theme dark-theme");
    $(".overlay").toggleClass("overlay--light overlay--dark");
    $(".form__input--mail").toggleClass("input-light input-dark");
    $(".form__input--phone").toggleClass("input-light input-dark");
    $(".form__input--name").toggleClass("input-light input-dark");
    $(".form__textarea").toggleClass("input-light input-dark");
    $(".cookie-info__close").toggleClass("dark-theme--link light-theme--link dark-outline");
    $(".nav__link--start").removeClass("light-theme--link dark-theme--link");
    $(".footer__link").css("border-bottom", "none");
    $(".socials__item").css("border-bottom", "none");
    $(".projects__link").css("border-bottom", "none");
    $(".cookie-info__close").css("border-bottom", "none");
    // Items for localStorage
    localStorage.setItem("icon", JSON.stringify($(".icon--theme").attr("class")));
    localStorage.setItem("bodyBorderTop", JSON.stringify($(".body-border--top").attr("class")));
    localStorage.setItem("bodyBorderBottom", JSON.stringify($(".body-border--bottom").attr("class")));
    localStorage.setItem("bodyBorderLeft", JSON.stringify($(".body-border--left").attr("class")));
    localStorage.setItem("bodyBorderRight", JSON.stringify($(".body-border--right").attr("class")));
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
    localStorage.setItem("cookie", JSON.stringify($(".cookie-info").attr("class")));
    localStorage.setItem("overlay", JSON.stringify($(".overlay").attr("class")));
    localStorage.setItem("inputMail", JSON.stringify($(".form__input--mail").attr("class")));
    localStorage.setItem("inputPhone", JSON.stringify($(".form__input--phone").attr("class")));
    localStorage.setItem("inputName", JSON.stringify($(".form__input--name").attr("class")));
    localStorage.setItem("textarea", JSON.stringify($(".form__textarea").attr("class")));
    localStorage.setItem("cookieClose", JSON.stringify($(".cookie-info__close").attr("class")));
    localStorage.setItem("navLink", JSON.stringify($(".nav__link").attr("class")));
    if ($("#theme").hasClass("icon-moon")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
    } else if ($("#theme").hasClass("icon-sun")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
    }
});

// Click function to hide cookies info

$(".cookie-info__close").on("click", function(){
    $(".cookie-info").addClass("visuallyhidden");
    localStorage.setItem("cookieoff", "true");
});

// Language changing script

$(".langENG").on("click", function() {
    if ($(this).hasClass("button--lang--active")) {
        return;
    } else {
        $(this).toggleClass("button--lang--active");
        $(".langPL").toggleClass("button--lang--active");
    }
    $.getJSON("json/content-eng.json", function(data) {
        $(".navAbout").text(data.navAbout).attr("title", data.navAbout);
        $(".navProjects").text(data.navProjects).attr("title", data.navProjects);
        $(".navContact").text(data.navContact).attr("title", data.navContact);
        $(".button--theme").attr("aria-label", data.buttonTheme).attr("title", data.buttonTheme);
        $(".langPL").attr("title", data.langPL);
        $(".langENG").attr("title", data.langENG);
        $(".nav__hamburger").attr("title", data.hamburger);
        $(".nav__close-menu").attr("title", data.closeMenu);
        $(".mainTitle").text(data.mainTitle);
        $(".mainSubtitle").text(data.mainSubtitle);
        $(".aboutTitle").text(data.aboutTitle);
        $(".aboutSubtitle").text(data.aboutSubtitle);
        $(".aboutDescription").html(data.aboutDescription);
        howOldAmI();
        $(".aboutCooperation").text(data.aboutCooperation);
        $(".skillsSubtitle").text(data.skillsSubtitle);
        $(".projectsTitle").text(data.projectsTitle);
        $(".weatherDescription").text(data.weatherDescription);
        $(".challengeDescription").text(data.challengeDescription);
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
        $(".cookie-info__text").text(data.cookies);
        //Main title
        $(".projects__title").eq(0).text(data.weatherMaintitle);
        $(".projects__title").eq(4).text(data.todoMaintitle);
        $(".projects__title").eq(9).text(data.formMaintitle);
        // Projects links titles
        $(".projects__link").eq(0).attr("title", data.weatherTitle);
        $(".projects__link").eq(1).attr("title", data.weatherCode);
        $(".projects__link").eq(2).attr("title", data.challengeTitle);
        $(".projects__link").eq(3).attr("title", data.challengeCode);
        $(".projects__link").eq(4).attr("title", data.interiorTitle);
        $(".projects__link").eq(5).attr("title", data.sleszynskiTitle);
        $(".projects__link").eq(6).attr("title", data.todoTitle);
        $(".projects__link").eq(7).attr("title", data.todoCode);
        $(".projects__link").eq(8).attr("title", data.interiorv1Title);
        $(".projects__link").eq(9).attr("title", data.interiorv1Code);
        $(".projects__link").eq(10).attr("title", data.dobrywebdevTitle);
        $(".projects__link").eq(11).attr("title", data.dobrywebdevCode);
        $(".projects__link").eq(12).attr("title", data.cvTitle);
        $(".projects__link").eq(13).attr("title", data.interactiveTitle);
        $(".projects__link").eq(14).attr("title", data.interactiveCode);
        $(".projects__link").eq(15).attr("title", data.formTitle);
        $(".projects__link").eq(16).attr("title", data.formCode);
        // Projects photos alts
        $(".projects__photo").eq(0).attr("alt", data.weatherAlt);
        $(".projects__photo").eq(1).attr("alt", data.challengeAlt);
        $(".projects__photo").eq(2).attr("alt", data.interiorAlt);
        $(".projects__photo").eq(3).attr("alt", data.sleszynskiAlt);
        $(".projects__photo").eq(4).attr("alt", data.todoAlt);
        $(".projects__photo").eq(5).attr("alt", data.interiorv1Alt);
        $(".projects__photo").eq(6).attr("alt", data.dobrywebdevAlt);
        $(".projects__photo").eq(7).attr("alt", data.cvAlt);
        $(".projects__photo").eq(8).attr("alt", data.interactiveAlt);
        $(".projects__photo").eq(9).attr("alt", data.formAlt);
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
        $(".navAbout").text(data.navAbout).attr("title", data.navAbout);
        $(".navProjects").text(data.navProjects).attr("title", data.navProjects);
        $(".navContact").text(data.navContact).attr("title", data.navContact);
        $(".button--theme").attr("aria-label", data.buttonTheme).attr("title", data.buttonTheme);
        $(".langPL").attr("title", data.langPL);
        $(".langENG").attr("title", data.langENG);
        $(".nav__hamburger").attr("title", data.hamburger);
        $(".nav__close-menu").attr("title", data.closeMenu);
        $(".mainTitle").text(data.mainTitle);
        $(".mainSubtitle").text(data.mainSubtitle);
        $(".aboutTitle").text(data.aboutTitle);
        $(".aboutSubtitle").text(data.aboutSubtitle);
        $(".aboutDescription").html(data.aboutDescription);
        howOldAmI();
        $(".aboutCooperation").text(data.aboutCooperation);
        $(".skillsSubtitle").text(data.skillsSubtitle);
        $(".projectsTitle").text(data.projectsTitle);
        $(".weatherDescription").text(data.weatherDescription);
        $(".challengeDescription").text(data.challengeDescription);
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
        $(".cookie-info__text").text(data.cookies);
        //Main title
        $(".projects__title").eq(0).text(data.weatherMaintitle);
        $(".projects__title").eq(4).text(data.todoMaintitle);
        $(".projects__title").eq(9).text(data.formMaintitle);
        // Projects links titles
        $(".projects__link").eq(0).attr("title", data.weatherTitle);
        $(".projects__link").eq(1).attr("title", data.weatherCode);
        $(".projects__link").eq(2).attr("title", data.challengeTitle);
        $(".projects__link").eq(3).attr("title", data.challengeCode);
        $(".projects__link").eq(4).attr("title", data.interiorTitle);
        $(".projects__link").eq(5).attr("title", data.sleszynskiTitle);
        $(".projects__link").eq(6).attr("title", data.todoTitle);
        $(".projects__link").eq(7).attr("title", data.todoCode);
        $(".projects__link").eq(8).attr("title", data.interiorv1Title);
        $(".projects__link").eq(9).attr("title", data.interiorv1Code);
        $(".projects__link").eq(10).attr("title", data.dobrywebdevTitle);
        $(".projects__link").eq(11).attr("title", data.dobrywebdevCode);
        $(".projects__link").eq(12).attr("title", data.cvTitle);
        $(".projects__link").eq(13).attr("title", data.interactiveTitle);
        $(".projects__link").eq(14).attr("title", data.interactiveCode);
        $(".projects__link").eq(15).attr("title", data.formTitle);
        $(".projects__link").eq(16).attr("title", data.formCode);
        // Projects photos alts
        $(".projects__photo").eq(0).attr("alt", data.weatherAlt);
        $(".projects__photo").eq(1).attr("alt", data.challengeAlt);
        $(".projects__photo").eq(2).attr("alt", data.interiorAlt);
        $(".projects__photo").eq(3).attr("alt", data.sleszynskiAlt);
        $(".projects__photo").eq(4).attr("alt", data.todoAlt);
        $(".projects__photo").eq(5).attr("alt", data.interiorv1Alt);
        $(".projects__photo").eq(6).attr("alt", data.dobrywebdevAlt);
        $(".projects__photo").eq(7).attr("alt", data.cvAlt);
        $(".projects__photo").eq(8).attr("alt", data.interactiveAlt);
        $(".projects__photo").eq(9).attr("alt", data.formAlt);
    });
});

// Form validation

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
            var mailfail;
            if ($(".langPL").hasClass("button--lang--active")) {
                mailfail = "<p class='input__fail'>Podaj prawidłowy adres e-mail</p>";
            } else {
                mailfail = "<p class='input__fail'>Please provide a valid email address</p>";
            }
            $(mailfail).hide().appendTo(".form__group--mail").fadeIn(500);
            return false;
        } else if (checkphone.test(phone) === false) {
            var phonefail;
            if ($(".langPL").hasClass("button--lang--active")) {
                phonefail = "<p class='input__fail'>Podaj prawidłowy, 9 cyfrowy numer telefonu</p>";
            } else {
                phonefail = "<p class='input__fail'>Please provide a valid, 9 digit mobile number</p>";
            }
            $(phonefail).hide().appendTo(".form__group--phone").fadeIn(500);
            return false;
        } else if (checkname.test(name) === false) {
            var namefail;
            if ($(".langPL").hasClass("button--lang--active")) {
                namefail = "<p class='input__fail'>Podaj prawidłowe imię i nazwisko</p>";
            } else {
                namefail = "<p class='input__fail'>Please provide a valid first and last name</p>";
            }
            $(namefail).hide().appendTo(".form__group--name").fadeIn(500);
            return false;
        } else if (message === "") {
            var msgfail;
            if ($(".langPL").hasClass("button--lang--active")) {
                msgfail = "<p class='input__fail'>Wiadomość nie może być pusta</p>";
            } else {
                msgfail = "<p class='input__fail'>The message cannot be empty</p>";
            }
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
                $(".form").trigger("reset");
                if ($(".langPL").hasClass("button--lang--active")) {
                    $(successPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                } else {
                    $(successEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                }
            }).fail(function(data) {
                var failPl = '<div class="form__fail"><p>Nie udało się, spróbuj jeszcze raz.</p></div>';
                var failEng = '<div class="form__fail"><p>Something went wrong, please try again.</p></div>';
                if ($(".langPL").hasClass("button--lang--active")) {
                    $(failPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                } else {
                    $(failEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                }
            });
        }
    });
});

// Copyright year in the footer and my age in "About" section

(function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var footerYear = document.getElementById("footer__year");
    footerYear.innerText = currentYear;
})();

// Get my current age and display it in "About" section

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function howOldAmI() {
    var myAge = document.getElementById("myAge");
    myAge.innerText = getAge("1991/05/16");
}

})();