$(document).ready(function () {
    console.log("funciona: JQUERY");
    $('select').formSelect();
    listarFacultad();
});

function listarFacultad() {
    $.get("pc", {"op": 3}, function (data) {
        var x = JSON.parse(data);
        alert(data);
        $("#secFacultad option").remove();
        for (var i = 0; i < x.length; i++) {
            $("#secFacultad").append("<option value='" + x[i].idFacultad +"'>" + x[i].nomFacultad + "</option>");
            console.log(x[i].idFacultad + "  " + x[i].nomFacultad);
            $("#secEscuela").append("<option value='" + x[i].idFacultad +"'>" + x[i].nomFacultad + "</option>");
        }
    });
}