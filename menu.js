jQuery('document').ready(function($) {

    var menuBtn = $('.mobile-menu span'),
        menu = $('.navegacion ul');

    menuBtn.click(function() {
        if (menu.hasClass('show')) {
            menu.removeClass('show');
            menuBtn.removeClass('icon-menu');
            menuBtn.addClass('icon-cross');
        } else {
            menu.addClass('show');
            menuBtn.addClass('icon-menu');
            menuBtn.removeClass('icon-cross');
        }

    });

});