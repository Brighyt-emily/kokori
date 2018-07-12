/*
 * Filtrado de tablas
 */
$(document).ready(function () {
    $("#usua").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tbldetpressm tbody td").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

/*
 * Listar Detalle Prestamo
 */
function listardtp() {
    $.get("DPC", {"opc": 2}, function (data) {
        var x = JSON.parse(data);

        $("#tbldetpressm tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tbldetpressm").append("\
<tr><td>" + (i + 1) + "</td>\n\
<td>" + x[i].id_detpre + "</td>\n\
<td>" + x[i].id_profesor + "</td>\n\
<td>" + "<a href='DetallePrestamos.jsp#modal2' onclick='detalleSeleccionado(" + x[i].id_profesor + ")'>" + "<i class = 'material-icons prefix'>remove_red_eye</i></a></td></tr>");
        }
    });
}

function detalleSeleccionado() {
    $.get("Pc", {"opc": 2}, function (data) {
        var x = JSON.parse(data);
        $("#tbldetpres tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tbldetpres").append("<tr><td>" + (i + 1) + "</td><td>" + x[i].nom_alumno + "</td><td>" + x[i].fe_prestamo + "</td><td>" + e + "</td><td>" + x[i].fe_devolucion + "</td>"
                    + "<a href='DetallePrestamos#modal3' onclick='listarproducto(" + x[i].idP + ")'>"
                    + "<i class = 'material-icons prefix'>remove_red_eye</i></a></td</tr>");

        }
    });
}

function listarproducto() {
    $.get("DPC", {"opc": 2}, function (data) {
        var x = JSON.parse(data);
        $("#tbldetpressm tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tbldetpressm").append("\
<tr><td>" + (i + 1) + "</td>\n\
<td>" + x[i].idproducto + "</td>\n\
<td>" + x[i].id_profesor + "</td></tr>");

        }
    });
}