function fill_dropdowns() {
    var options = "";
    for (var i = 0; i < items.bodies.length; i++) {
        options += "<option>" + items.bodies[i].name + "</option>";
    }
    $("#body").html(options);
}

fill_dropdowns();