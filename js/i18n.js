var messages = `{
    "ca": {
        "and": " i ",
        "to": "Per: ",
        "engaged": "Carme i Jordi",
        "engaged2": "Carme i Jordi",
        "date": "divendres 30 juliol",
        "fulldate": "divendres 30 de juliol de 2021",
        "welcome": "Ens fa molta il·lusió compartir aquest moment amb tots vosaltres!",
        "bye": "Son Collell: crta. Manacor (Ma-15), sortida 30 07230 | Montuïri",
        "proudly": "Estem molt feliços de convidar-vos a la celebració de les nostres noces a 'Son Collell'",
        "welcomedrink": "welcome drink",
        "ceremony": "cerimònia",
        "starter": "aperitiu",
        "dinner": "sopar",
        "invitation": "Us esperem!",
        "assistancewish": "Dessitjam de tot cor que pogueu assistir!",
        "assistance": "Per favor, confirmeu l'assistència a les noces com més aviat millor.",
        "assistancebutton": "Confirma assistència",
        "back": "Torna",
        "send": "Envia"
    },
    "es": {
        "and": " y ",
        "to": "Para: ",
        "engaged": "Carme y Jordi",
        "engaged2": "Carme y Jordi",
        "date": "viernes 30 julio",
        "fulldate": "viernes 30 de julio de 2021",
        "welcome": "¡Nos hace mucha ilusión compartir este momento con vosotros!",
        "bye": "Son Collell: crta. Manacor (Ma-15), salida 30 07230 | Montuïri",
        "proudly": "Estamos muy felices de invitaros a la celebración de nuestra boda en 'Son Collell'",
        "welcomedrink": "welcome drink",
        "ceremony": "ceremonia",
        "starter": "aperitivo",
        "dinner": "cena",
        "invitation": "¡Os esperamos!",
        "assistancewish": "¡Deseamos de todo corazón que podáis asistir!",
        "assistance": "Por favor, confirmad la asistencia a la boda cuanto antes podáis.",
        "assistancebutton": "Confirmar asistencia",
        "back": "Volver",
        "send": "Enviar"
    }
}`;

var messagesJson = JSON.parse(messages);

function i18nInit() {
    var messagesLang = messagesJson.ca;

    if ("es" == param("lang")) {
        messagesLang = messagesJson.es;
    }

    for (message in messagesLang) {
        u( "#i18n-"+message ).text(messagesLang[message]);
        u( ".i18n-"+message ).text(messagesLang[message]);
    }
}

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}