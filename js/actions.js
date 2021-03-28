function hide(element, wait) {
    setTimeout(function() {
        $( element ).addClass("hidden");
    }, wait);
    remove(element, wait+2000);
}

function show(element, wait) {
    setTimeout(function() {
        $( element ).removeClass("hidden").removeClass("no-display");
    }, wait);
}

function remove(element, wait) {
    setTimeout(function() {
        $( element ).remove();
    }, wait);
}

function noDisplay(element, wait) {
    setTimeout(function() {
        $( element ).addClass("no-display");
    }, wait);
}

function rotate(element, dir, wait) {
    var clazz = dir == "top" ? "rotate-top": "rotate-bottom";

    setTimeout(function() {
        $( element ).addClass(clazz);
    }, wait);
}

function move(element, dir, wait, out) {
    var clazz = dir == "right" ? "move-right": "move-left";
    clazz = out ? clazz+"-out" : clazz;

    setTimeout(function() {
        $( element ).addClass(clazz);
    }, wait);

    if (out) {
        remove(element, wait+2000);
    }
}

function showOnTop(element, wait) {
    setTimeout(function() {
        $( ".show-top" ).removeClass("show-top");
        $( element ).addClass("show-top");
    }, wait);
}