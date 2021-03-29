var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIAlgditxdS08MFdM6zWGOpSs3DUj1GKbYBtBESYOkGqHgXWzWTy9COVH4vwkp70IEOA/exec";
var GUESTS = [];

function getNames() {
    var id = param("id");

    if (id != null) {
        fetch(SCRIPT_URL + "?id=" + id)
            .then(res => res.json())
            .then((out) => {
                loadNames(out);
            }).catch(err => console.error(err));
    }
}

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}

function loadNames(names) {
    var and = window.messagesJson.ca.and;
    if ("es" == param("lang")) {
        and = window.messagesJson.es.and;
    }

    GUESTS = names;
    move("#loading", "left", 0, true);
    var namesNormalized = names.join(', ').replace(/, ([^,]*)$/, and+'$1');
    var msg = u("#names span").text() + namesNormalized;
    u("#names span").text(msg);
    show("#tap", 3000);
}

function notify(element, name, assist) {
    console.log("Notify: ", name, assist);
    var id = param("id");
    console.log("URL: " + `${SCRIPT_URL}?id=${id}&name=${name}&assist=${assist}`);

    fetch(`${SCRIPT_URL}?id=${id}&name=${name}&assist=${assist}`)
    .then((response) => {
        if (response.ok) {
            u( element ).removeClass("assistance-loading");
            u( element ).addClass("assistance-loaded");
        } else {
            u( element ).removeClass("assistance-loading");
            u( element ).addClass("assistance-error");
        }
    }).catch(err => console.error(err));
}

function getIBAN() {
    var id = param("id");

    if (id != null) {
        fetch(`${SCRIPT_URL}?id=${id}&iban=true`)
        .then(res => res.json())
        .then((iban) => {
            if (iban != null) {
                u( "#iban ").text(`IBAN: ${iban}`);
            }
        }).catch(err => console.error(err));
    }
}