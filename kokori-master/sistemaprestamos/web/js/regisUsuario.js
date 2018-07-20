$(document).ready(function () {
});

$("#btnRegistrar").click(function () {

    var es = 1;
    var nomusu = $("#nomusu").val();
    var password = $("#pass1").val();
    var select = document.getElementById("secRol");
    var options = document.getElementsByTagName("option");

    $.get("UsuCon", {"op": 1, "nomu": nomusu, "apellidos": password,"apellidos": options, "estado": es}, function (data) {
        alert("Registro exitoso");
    });
});