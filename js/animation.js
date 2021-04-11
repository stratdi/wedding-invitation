function openTab() {
    u("#tab-wrap").on('click', function () {
        postalOpen();
    });
    u("#tap").on('click', function () {
        postalOpen();
    });
}

function postalOpen() {
    remove("#tap", 0);
    u(this).addClass("wrap-noshadow");
    u("#tab").addClass("opened");


    hide("#postal-card", 2000);
    hide("#tab-wrap", 2000);
    hide("#postal-card-back", 2000);
    hide("#names", 2000);
    move("#invitation-wrap", "left", 3500, false);
    show("#swipe", 7000);

    setTimeout(function() {
        invitationSwipeLeft();
    }, 3500);
}

function invitationSwipeLeft() {
    var invitationSwipe = Hammer(document.getElementById("invitation-wrap"));
    invitationSwipe.get('swipe').set({
        direction: Hammer.DIRECTION_LEFT
    });
    invitationSwipe.on('swipe', function(ev) {
        remove("#swipe", 0);
        move(u(" #invitation-wrap "), 'left', 0, true);
        rotate("#info", "bottom", 1500);
        rotate("#summary", "top", 1500);
        show(".i18n-assistancebutton", 1500);
        openAssistance();
    });

    u("#info").on('click', function () {
        showOnTop(this);
    });
    u("#summary").on('click', function () {
        showOnTop(this);
    });
}

function openAssistance() {
    u( ".i18n-assistancebutton" ).on('click', function() {
        show(" #assistance ");
    });
    u( "#i18n-back" ).on('click', function() {
        noDisplay( '#assistance');
    });

    u( "#i18n-send ").on('click', function() {
        notifyAll();
    });
}

function notifyAll() {
    u( ".assistance-item" ).each(function(item) {
        var name = u( item ).find( ".guest-name" ).data( "guest" );
        var assist = u( item ).find( ".assistance-sel" ).data( "assist" );

        if (assist != null) {
            u( item ).removeClass("assistance-loaded");
            u( item ).removeClass("assistance-error");
            u( item ).addClass("assistance-loading");
            notify(item, name, assist);
        }
    });
}