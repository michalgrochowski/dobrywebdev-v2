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
    navSpeed: 700,
    infinite: false,
    loop: false,
    URLhashListener: true,
    items: 1
})

window.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("icon") === null) {
        return false;
    } else {
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
    if ($("#theme").hasClass("icon-moon")) {
        $('a').removeClass("dark-theme--link").addClass("light-theme--link");
    } else {
        $('a').removeClass("light-theme--link").addClass("dark-theme--link");
    };
    if ($("#theme").hasClass("icon-moon")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
    } else if ($("#theme").hasClass("icon-sun")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
    };
    };
});

var closeMobile = function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle("700");
}

$(".nav__link--mobile").on('click', function() {
    closeMobile();
});
$(".nav__hamburger").on("click", function() {
    closeMobile();
});
$(".nav__close-menu").on("click", function() {
    closeMobile();
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
    if ($("#theme").hasClass("icon-moon")) {
         $(".nav__logo").attr("src", "img/logo-light.png");
    } else if ($("#theme").hasClass("icon-sun")) {
         $(".nav__logo").attr("src", "img/logo-dark.png");
    };
})

var flag = $(".nav__item--flag");
    flag.on("click", function() {
    if (flag.attr("src") === "img/eng.png") {
        flag.attr("src","img/pl.png");
        $.getJSON("json/content-eng.json", function(data) {
            var navAbout = data.navAbout;
            var navProjects = data.navProjects;
            var navContact = data.navContact;
            var mainTitle = data.mainTitle;
            var mainSubtitle = data.mainSubtitle;
            var aboutTitle = data.aboutTitle;
            var aboutSubtitle = data.aboutSubtitle;
            var aboutDescription = data.aboutDescription;
            var skillsSubtitle = data.skillsSubtitle;
            var projectsTitle = data.projectsTitle;
            var interiorDescription = data.interiorDescription;
            var sleszynskiDescription = data.sleszynskiDescription;
            var todoDescription = data.todoDescription;
            var interiorv1Description = data.interiorv1Description;
            var dobrywebdevDescription = data.dobrywebdevDescription;
            var cvDescription = data.cvDescription;
            var interactiveDescription = data.interactiveDescription;
            var formDescription = data.formDescription;
            var projectLive = data.projectLive;
            var projectCode = data.projectCode;
            var contactTitle = data.contactTitle;
            var mailLabel = data.mailLabel;
            var phoneLabel = data.phoneLabel;
            var nameLabel = data.nameLabel;
            var textLabel = data.textLabel;
            var sendButton = data.sendButton;
            var phone = data.phone;
            var mail = data.mail;
            var mailPlaceholder = data.mailPlaceholder;
            var namePlaceholder = data.namePlaceholder;
            var textPlaceholder = data.textPlaceholder;
            var sendButton = data.sendButton;
            $(".navAbout").text(navAbout);
            $(".navProjects").text(navProjects);
            $(".navContact").text(navContact);
            $(".mainTitle").text(mainTitle);
            $(".mainSubtitle").text(mainSubtitle);
            $(".aboutTitle").text(aboutTitle);
            $(".aboutSubtitle").text(aboutSubtitle);
            $(".aboutDescription").text(aboutDescription);
            $(".skillsSubtitle").text(skillsSubtitle);
            $(".projectsTitle").text(projectsTitle);
            $(".interiorDescription").text(interiorDescription);
            $(".sleszynskiDescription").text(sleszynskiDescription);
            $(".todoDescription").text(todoDescription);
            $(".interiorv1Description").text(interiorv1Description);
            $(".dobrywebdevDescription").text(dobrywebdevDescription);
            $(".cvDescription").text(cvDescription);
            $(".interactiveDescription").text(interactiveDescription);
            $(".formDescription").text(formDescription);
            $(".projectLive").text(projectLive);
            $(".projectCode").text(projectCode);
            $(".contactTitle").text(contactTitle);
            $(".mailLabel").text(mailLabel);
            $(".phoneLabel").text(phoneLabel);
            $(".nameLabel").text(nameLabel);
            $(".textLabel").text(textLabel);
            $(".sendButton").text(sendButton);
            $(".phone").text(phone);
            $(".mail").text(mail);
            $(".form__input--mail").attr("placeholder", mailPlaceholder);
            $(".form__input--name").attr("placeholder", namePlaceholder);
            $(".form__textarea").attr("placeholder", textPlaceholder);
            $(".form__button").attr("value", sendButton);
        });
    } else if (flag.attr("src") === "img/pl.png") {
        flag.attr("src", "img/eng.png");
        $.getJSON("json/content-pl.json", function(data) {
            var navAbout = data.navAbout;
            var navProjects = data.navProjects;
            var navContact = data.navContact;
            var navAbout = data.navAbout;
            var navProjects = data.navProjects;
            var navContact = data.navContact;
            var mainTitle = data.mainTitle;
            var mainSubtitle = data.mainSubtitle;
            var aboutTitle = data.aboutTitle;
            var aboutSubtitle = data.aboutSubtitle;
            var aboutDescription = data.aboutDescription;
            var skillsSubtitle = data.skillsSubtitle;
            var projectsTitle = data.projectsTitle;
            var interiorDescription = data.interiorDescription;
            var sleszynskiDescription = data.sleszynskiDescription;
            var todoDescription = data.todoDescription;
            var interiorv1Description = data.interiorv1Description;
            var dobrywebdevDescription = data.dobrywebdevDescription;
            var cvDescription = data.cvDescription;
            var interactiveDescription = data.interactiveDescription;
            var formDescription = data.formDescription;
            var projectLive = data.projectLive;
            var projectCode = data.projectCode;
            var contactTitle = data.contactTitle;
            var mailLabel = data.mailLabel;
            var phoneLabel = data.phoneLabel;
            var nameLabel = data.nameLabel;
            var textLabel = data.textLabel;
            var sendButton = data.sendButton;
            var phone = data.phone;
            var mail = data.mail;
            var mailPlaceholder = data.mailPlaceholder;
            var namePlaceholder = data.namePlaceholder;
            var textPlaceholder = data.textPlaceholder;
            var sendButton = data.sendButton;
            $(".navAbout").text(navAbout);
            $(".navProjects").text(navProjects);
            $(".navContact").text(navContact);
            $(".mainTitle").text(mainTitle);
            $(".mainSubtitle").text(mainSubtitle);
            $(".aboutTitle").text(aboutTitle);
            $(".aboutSubtitle").text(aboutSubtitle);
            $(".aboutDescription").text(aboutDescription);
            $(".skillsSubtitle").text(skillsSubtitle);
            $(".projectsTitle").text(projectsTitle);
            $(".interiorDescription").text(interiorDescription);
            $(".sleszynskiDescription").text(sleszynskiDescription);
            $(".todoDescription").text(todoDescription);
            $(".interiorv1Description").text(interiorv1Description);
            $(".dobrywebdevDescription").text(dobrywebdevDescription);
            $(".cvDescription").text(cvDescription);
            $(".interactiveDescription").text(interactiveDescription);
            $(".formDescription").text(formDescription);
            $(".projectLive").text(projectLive);
            $(".projectCode").text(projectCode);
            $(".contactTitle").text(contactTitle);
            $(".mailLabel").text(mailLabel);
            $(".phoneLabel").text(phoneLabel);
            $(".nameLabel").text(nameLabel);
            $(".textLabel").text(textLabel);
            $(".sendButton").text(sendButton);
            $(".phone").text(phone);
            $(".mail").text(mail);
            $(".form__input--mail").attr("placeholder", mailPlaceholder);
            $(".form__input--name").attr("placeholder", namePlaceholder);
            $(".form__textarea").attr("placeholder", textPlaceholder);
            $(".form__button").attr("value", sendButton);
        });
    };
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
                var successEng = '<div class="form__success"><p>Thank you for your Message!</p></div>';
                if (flag.attr("src") === "img/eng.png") {
                    $(".form").trigger("reset");
                    $(successPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                } else if (flag.attr("src") === "img/pl.png") {
                    $(".form").trigger("reset");
                    $(successEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                };
            }).fail(function(data) {
                var failPl = '<div class="form__fail"><p>Nie udało się, spróbuj jeszcze raz.</p></div>';
                var failEng = '<div class="form__fail"><p>Something went wrong, please try again.</p></div>';
                $(fail).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                if (flag.attr("src") === "img/eng.png") {
                    $(failPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                } else if (flag.attr("src") === "img/pl.png") {
                    $(failEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
                };
            });
        }
    });
});

})();