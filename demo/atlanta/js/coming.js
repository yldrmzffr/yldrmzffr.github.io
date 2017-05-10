$(function () {
    "use strict";

    /* Countdown date and initialisation */
    /* Careful :
     January -> 1-1 (0)
     February -> 2-1 (1)
     March -> 3-1 (2)
     ...
     */
    var austDay = new Date();
    austDay.setDate(austDay.getDate() + 15);
    $('#defaultCountdown').countdown({until: austDay});

});

$(document).ready(function () {
    "use strict";

    /* Hide the lowblock under the highblock / Home page */
    var marginLowBlock = $(".lowblock").height() - 60;
    $(".lowblock").css({"marginTop": -marginLowBlock});

    /* Show the lowblock */
    $(".outerblock").hover(function () {
        $(".lowblock").stop(true).animate({'marginTop': 0}, 300, 'easeInOutExpo');
    }, function () {
        $(".lowblock").stop(true).animate({'marginTop': -marginLowBlock}, 300, 'easeInOutExpo');
    });

    /* Popups */
    var firstPopupPosition = (( $(".container").width() - $(".outerblock").width() ) / 2 ) - $("#popup1").width() - 26;
    var secondPopupPosition = $(".container").width() / 2 + ($(".outerblock").width() ) / 2 + 34;

    $("#popup1").css({"margin-left": firstPopupPosition});
    $("#popup2").css({"margin-left": secondPopupPosition});

    if ($(window).width() > 1160) {
        setTimeout(function () {
            $("#popup1").removeClass("zeroscale").addClass("normalscale");
        }, 1500);

        setTimeout(function () {
            $("#popup2").removeClass("zeroscale").addClass("normalscale");
            $("#popup1").removeClass("normalscale").addClass("zeroscale");
        }, 4000);

        setTimeout(function () {
            $("#popup2").removeClass("normalscale").addClass("zeroscale");
        }, 6500);
    }

    /* Click to change color */
    $("#color-green").click(function () {
        $(".back-colored").animate({backgroundColor: "#2CD734"}, 300);
        $("#content3 .menublock,.number").animate({color: "rgba(44,215,52,0.7)"}, 300);
        $(".newsblock").removeClass("yellow-back-colored").removeClass("blue-back-colored").removeClass("red-back-colored");
        $(".menublock").removeClass("yellow-colored").removeClass("blue-colored").removeClass("red-colored");
        $(".round-logo").removeClass("yellow-logo").removeClass("blue-logo").removeClass("red-logo");
        $(".btn-send").removeClass("yellow-send").removeClass("blue-send").removeClass("red-send");
    });

    $("#color-red").click(function () {
        $(".back-colored").animate({backgroundColor: "#F43A3A"}, 300);
        $("#content3 .menublock,.number").animate({color: "rgba(244,58,58,0.7)"}, 300);
        $(".newsblock").removeClass("yellow-back-colored").removeClass("blue-back-colored").addClass("red-back-colored");
        $(".menublock").removeClass("yellow-colored").removeClass("blue-colored").addClass("red-colored");
        $(".round-logo").removeClass("yellow-logo").removeClass("blue-logo").addClass("red-logo");
        $(".btn-send").removeClass("yellow-send").removeClass("blue-send").addClass("red-send");
    });

    $("#color-yellow").click(function () {
        $(".back-colored").animate({backgroundColor: "#FFCF0A"}, 300);
        $("#content3 .menublock,.number").animate({color: "rgba(255,207,10,0.7)"}, 300);
        $(".newsblock").removeClass("red-back-colored").removeClass("blue-back-colored").addClass("yellow-back-colored");
        $(".menublock").removeClass("red-colored").removeClass("blue-colored").addClass("yellow-colored");
        $(".round-logo").removeClass("red-logo").removeClass("blue-logo").addClass("yellow-logo");
        $(".btn-send").removeClass("red-send").removeClass("blue-send").addClass("yellow-send");
    });

    $("#color-blue").click(function () {
        $(".back-colored").animate({backgroundColor: "#3CB5FF"}, 300);
        $("#content3 .menublock,.number").animate({color: "rgba(60,181,255,0.7)"}, 300);
        $(".newsblock").removeClass("red-back-colored").removeClass("yellow-back-colored").addClass("blue-back-colored");
        $(".menublock").removeClass("red-colored").removeClass("yellow-colored").addClass("blue-colored");
        $(".round-logo").removeClass("yellow-logo").removeClass("red-logo").addClass("blue-logo");
        $(".btn-send").removeClass("yellow-send").removeClass("red-send").addClass("blue-send");
    });

    /* Div with colors */
    $(".contain-color").hover(function () {
        $(this).stop(true).animate({marginLeft: 0}, 200);
    }, function () {
        $(this).stop(true).animate({marginLeft: 200 + "px"}, 200);
    });

    /* Show content 2 or content 3 */
    $(".highblock .col-xs-1 span:eq(0)").click(function () {
        $("#content1").removeClass("normalscale").addClass("zeroscale");

        setTimeout(function () {
            $("#content2").removeClass("zeroscale").addClass("normalscale");
        }, 300);
    });

    $(".highblock .col-xs-1 span:eq(1)").click(function () {
        $("#content1").removeClass("normalscale").addClass("zeroscale");

        setTimeout(function () {
            $("#content3").removeClass("zeroscale").addClass("normalscale");
        }, 300);
    });

    /* Return to content 1 */
    $(".close-logo").click(function () {
        $("#content2,#content3").removeClass("normalscale").addClass("zeroscale");

        setTimeout(function () {
            $("#content1").removeClass("zeroscale").addClass("normalscale");
        }, 300);
    });

    /*** Countdown - Initialisation ***/
    var secondCount = $(".countdown-section:last .countdown-amount").text();
    var minuteCount = $(".countdown-section:eq(2) .countdown-amount").text();
    var hourCount = $(".countdown-section:eq(1) .countdown-amount").text();
    var dayCount = $(".countdown-section:eq(0) .countdown-amount").text();
    var fullCount = parseInt(secondCount) + 60 * parseInt(minuteCount) + 3600 * parseInt(hourCount) + 86400 * parseInt(dayCount);

    var waterCount = Math.floor(6.5 * fullCount);
    var birthCount = Math.floor(4 * fullCount);
    var heartCount = Math.floor(1.2 * fullCount);
    var chickenCount = Math.floor(63.3 * fullCount);


    /*** Informations call functions ***/
    changeWater();
    changeBirth();
    changeHeart();
    changeChicken();
    changeTitle();

    /* Informations functions */
    function changeWater() {
        /*** Incrementation ***/
        waterCount--;
        /*** Put values in html ***/
        $(".lowblock-info .newsblock:eq(0) .newsblock-in:eq(0)").find("p").remove();
        $(".lowblock-info .newsblock:eq(0) .newsblock-in:eq(0)").html("<p>" + waterCount + "</p>");
        /*** Refresh ***/
        setTimeout(function () {
            changeWater();
        }, 1000 / 6.5);
    }

    function changeBirth() {
        /*** Incrementation ***/
        birthCount--;
        /*** Put values in html ***/
        $(".lowblock-info .newsblock:eq(1) .newsblock-in:eq(0)").find("p").remove();
        $(".lowblock-info .newsblock:eq(1) .newsblock-in:eq(0)").html("<p>" + birthCount + "</p>");
        /*** Refresh ***/
        setTimeout(function () {
            changeBirth();
        }, 1000 / 4);
    }

    function changeHeart() {
        /*** Incrementation ***/
        heartCount--;
        /*** Put values in html ***/
        $(".lowblock-info .newsblock:eq(2) .newsblock-in:eq(0)").find("p").remove();
        $(".lowblock-info .newsblock:eq(2) .newsblock-in:eq(0)").html("<p>" + heartCount + "</p>");
        /*** Refresh ***/
        setTimeout(function () {
            changeHeart();
        }, 1000 / 1.2);
    }

    function changeChicken() {
        /*** Incrementation ***/
        chickenCount--;
        /*** Put values in html ***/
        $(".lowblock-info .newsblock:eq(3) .newsblock-in:eq(0)").find("p").remove();
        $(".lowblock-info .newsblock:eq(3) .newsblock-in:eq(0)").html("<p>" + chickenCount + "</p>");
        /*** Refresh ***/
        setTimeout(function () {
            changeChicken();
        }, 1000 / 63.3);
    }

    function changeTitle() {
        /* Initialisation */
        var secondCount = $(".countdown-section:last .countdown-amount").text();
        var minuteCount = $(".countdown-section:eq(2) .countdown-amount").text();
        var hourCount = $(".countdown-section:eq(1) .countdown-amount").text();
        var dayCount = $(".countdown-section:eq(0) .countdown-amount").text();
        var fullCount = parseInt(secondCount) + 60 * parseInt(minuteCount) + 3600 * parseInt(hourCount) + 86400 * parseInt(dayCount);
        /*** Texts ***/
        $(".lowblock-info .menublock:eq(0)").find("h3").remove();
        $(".lowblock-info .menublock:eq(0)").html("<h3>We are coming back in : " + fullCount + " seconds</h3>");

        setTimeout(function () {
            changeTitle();
        }, 1000);
    }

})