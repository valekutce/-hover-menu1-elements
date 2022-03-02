$(document).ready(function() {
    // ICONS CALLBACK
    // hicon.replace();
    // Dropdown nav
    $("#sub-nav").click(function () {
    $(".nav-sub-list").toggleClass("nav-sub-list-on");
    $(".arrow").toggleClass("arrow-active");
    $(".line-1").toggleClass("line-1-active");
    $(".line-2").toggleClass("line-2-active");
    });

    // Select section in nav
    $(".nav-sect").click(function (e) {
    $(".nav-sect").addClass("less-op");
    $(this).removeClass("less-op");

    // Close dropdown menu if open when you click other secionts
    if ($(e.target).hasClass("no-dropdown") == false) {
    } else if ($(e.target).hasClass("no-dropdown") == true) {
        $(".nav-sub-list").removeClass("nav-sub-list-on");
        $(".arrow").removeClass("arrow-active");
        $(".line-1").removeClass("line-1-active");
        $(".line-2").removeClass("line-2-active");
    }
    });

    // Reset nav when you click outside
    $("html").click(function () {
    $(".nav-sect").removeClass("less-op");
    $(".nav-sub-list").removeClass("nav-sub-list-on");
    $(".arrow").removeClass("arrow-active");
    $(".line-1").removeClass("line-1-active");
    $(".line-2").removeClass("line-2-active");
    });

    $(".nav-container").click(function (event) {
    event.stopPropagation();
    });

})