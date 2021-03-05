$(function() { 
    openTab();
});

function openTab() {
    $( "#tab-wrap" ).on('click', function() {
        $( this ).addClass("wrap-noshadow");
        $( "#tab" ).addClass("opened");

        hide("#postal-card", 2000);
        hide("#tab-wrap", 2000);
        hide("#postal-card-back", 2000);
        move("#invitation-wrap", "left", 3500);
        swipeLeft();

    });
}

function hide(element, wait) {
    setTimeout(function() {
        $( element ).addClass("hidden");
    }, wait);
    setTimeout(function() {
        $( element ).hide();
    }, wait+1000);
}

function move(element, dir, wait) {
    var clazz = dir == "right" ? "move-right": "move-left";
    setTimeout(function() {
        $( element ).addClass(clazz);
    }, wait);
   
}

function swipeLeft() {
    $( "#invitation-wrap" ).on('swiped-left', function(e) {
        $( this ).removeClass("move-left");
        $( this ).addClass("move-left-out");
    });
}