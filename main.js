$(document).ready(function () {
    //use default configuration
    "use strict";
    //using custom configuration
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 50) {
            $("header").addClasss("secondary");
        } else {
            if ($("header").hasClass("secondary"))
                $("header").removeClass("secondary");
        }
    });
});
