$(document).ready(function(){
    updateParallax();
    $(window).scroll(function() {
        updateParallax();
    });
});

function updateParallax() {
    // applyParallax('.parallax', 0.5);
}

function applyParallax(selector, factor) {
    if (onScreen(selector)) {
        $(selector).css({
            'background-position-y' : (factor*scrollOffset(selector)) + 'px'
        });
    }
}

function onScreen(selector) {
    var scrollTop = $(window).scrollTop();
    var wHeight = $(window).height();

    var elemTop = $(selector).offset().top-scrollTop; // scrollOffset
    var elemBottom = elemTop+$(selector).outerHeight();

    return elemBottom > 0 && elemTop < wHeight;
}

function scrollOffset(selector) {
    // offset from top of window
    return $(selector).offset().top - $(window).scrollTop();
}