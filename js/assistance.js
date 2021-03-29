var assistanceDiv = `
    <div class="assistance-item">
        <span class="guest-name" data-guest="{name}">{name}</span>
        <div class="assistance-sel">
            <div class="option">
                <input type="radio" id="yes" name="assistance-{index}" value="true">
                <label for="yes">Sí</label>
            </div>
            <div class="option">
                <input type="radio" id="no" name="assistance-{index}" value="false">
                <label for="no">No</label>
            </div>
        </div>
    </div>
`;

function initAssitance() {
    window.GUESTS.forEach(addGuest);

    u('input[name^="assistance-"]').on('click', function() {
        u( this ).closest( ".assistance-sel" ).data("assist", this.defaultValue);
    });
}

function addGuest(value, index, array) {
    assist = assistanceDiv.replaceAll("{name}", value).replaceAll("{index}", index);
    u( "#assistance-grid" ).append(assist);
}