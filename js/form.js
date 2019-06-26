function fill_dropdown(slot) {
    var options = '';
    for (var i = 0; i < items[slot].length; i++) {
        options += '<option>' + items[slot][i].name + '</option>';
    }
    $('#' + slot).html(options);
}

function fill_dropdowns() {
    fill_dropdown('bodies');
    fill_dropdown('decals');
    fill_dropdown('wheels');
    fill_dropdown('boosts');
    fill_dropdown('toppers');
}

$('#tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
});

fill_dropdowns();