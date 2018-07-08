$(document).ready(function () {
    listarProducto();
    var f = new Date();
    $("#fecha").val(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
});

$("#btnBuscar").click(function () {
    var codigo = $("#codigo").val();
    $("#nombres").val("");
    $("#idprofesor").val("");
    if (codigo !== "") {
        $.get("rc", {"op": 1, "codigo": codigo}, function (data) {
            var x = JSON.parse(data);
            if (x.length > 0) {
                $("#nombres").val(x[0].nombres + " " + x[0].apellidos);
                $("#idprofesor").val(x[0].idProfesor);
            } else {
                alert("ingreso mal su codigo");
            }
        });
    } else {
        alert("Ingrese un codigo para las reservas");
    }
});

function listarProducto() {
    $("#tblProductos tbody tr").remove();
    $.get("rc", {"op": 2}, function (data) {
        var w = JSON.parse(data);
        for (var i = 0; i < w.length; i++) {
            $("#tblProductos").append("<tr><td>" + w[i].idProducto + "</td><td>" + w[i].nomProd + "</td><td>" + w[i].codigo + "</td><td>" + w[i].nomTipo + "</td><td>" + w[i].stock + "</td><td><a><i>vertical_align_bottom</i></a></td</tr>");
        }
    });
}