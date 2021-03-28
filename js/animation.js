function openTab() {
    $("#tab-wrap").on('click', function () {
        postalOpen();
    });
    $("#tap").on('click', function () {
        postalOpen();
    });
}

function postalOpen() {
    remove("#tap", 0);
    $(this).addClass("wrap-noshadow");
    $("#tab").addClass("opened");


    hide("#postal-card", 2000);
    hide("#tab-wrap", 2000);
    hide("#postal-card-back", 2000);
    hide("#names", 2000);
    move("#invitation-wrap", "left", 3500, false);
    show("#swipe", 7000);
    invitationSwipeLeft();
}

function invitationSwipeLeft() {
    var invitationSwipe = Hammer(document.getElementById("invitation-wrap"));
    invitationSwipe.get('swipe').set({
        direction: Hammer.DIRECTION_LEFT
    });
    invitationSwipe.on('swipe', function(ev) {
        remove("#swipe", 0);
        move($(" #invitation-wrap "), 'left', 0, true);
        rotate("#info", "bottom", 1500);
        rotate("#summary", "top", 1500);
        show(".i18n-assistancebutton", 1500);
        initAssitance();
        openAssistance();
    });

    $("#info").on('click', function () {
        showOnTop(this);
    });
    $("#summary").on('click', function () {
        showOnTop(this);
    });
}

function openAssistance() {
    $( ".i18n-assistancebutton" ).on('click', function() {
        show(" #assistance ");
    });
    $( "#i18n-back" ).on('click', function() {
        noDisplay( '#assistance');
    });

    $( "#i18n-send ").on('click', function() {
        notifyAll();
    });
}

function notifyAll() {
    $( ".assistance-item" ).each(function() {
        var name = $( this ).find( ".guest-name" ).data( "guest" );
        var assist = $( this ).find( ".assistance-sel" ).data( "assist" );

        if (assist != null) {
            $( this ).removeClass("assistance-loaded");
            $( this ).removeClass("assistance-error");
            $( this ).addClass("assistance-loading");
            notify(this, name, assist);
        }
    });
}