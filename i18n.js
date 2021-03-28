function i18nInit() {
    var lang = param("lang");
    console.log("TATE", messages[0]);
}

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}