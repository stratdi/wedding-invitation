var assistanceDiv = `
    <div class="assistance-item">
        <span class="guest-name" data-guest="{name}">{name}</span>
        <div class="assistance-sel">
            <div class="option">
                <input type="radio" id="yes-{index}" name="assistance-{index}" value="true">
                <label for="yes-{index}">Sí</label>
            </div>
            <div class="option">
                <input type="radio" id="no-{index}" name="assistance-{index}" value="false">
                <label for="no-{index}">No</label>
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
    assist = assistanceDiv.replace(/{name}/g, value).replace(/{index}/g, index);
    u( "#assistance-grid" ).append(assist);
}