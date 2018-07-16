/*
 * Filtrado de tablas
 */

$(document).ready(function () {
    $("#usua").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tbldetpressm tbody td").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    listardtp();
});

/*
 * Listar Detalle Prestamo
 */
function listardtp() {
    $.get("Pc", {"opc": 2}, function (data) {
        var x = JSON.parse(data);
        $("#tbldetpressm tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tbldetpressm").append("\
<tr><td>" + (i + 1) + "</td>\n\
<td>" + x[i].id_user + "</td>\n\
<td>" + x[i].id_profe + "</td>\n\
<td><a href='#modal1' onclick='detalleSeleccionado(" + x[i].id_profe + ")' class='waves-effect waves-light modal-trigger' ><i class='material-icons'>remove_red_eye</i></a></td></td></tr>");
        }
    });
}

function detalleSeleccionado(id_profe) {
    $('.modal-trigger').leanModal();
    $.get("Pc", {"opc": 2}, function (id_profe) {
        var x = JSON.parse(id_profe);
        $("#tbldetpres tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tbldetpres").append("\
<tr><td>" + (i + 1) + "</td>\n\
<td>" + x[i].nom_alumno + "</td>\n\
<td>" + x[i].fe_prestamo + "<br>" + x[i].hora_pre + "</td>\n\
<td>" + x[i].fe_devolucion + "<br>" + x[i].hora_devo + "</td>\n\
<td><a href='#modal3' onclick='listarproducto(" + x[i].idprestamo + ")' class='waves-effect waves-light modal-trigger'><i class = 'material-icons prefix'>remove_red_eye</i></a></td></tr>");

        }
    });
} 

function listarproducto(idprestamo) {
    $('.modal-trigger').leanModal();
    $.get("DPC", {"opc": 2}, function (idprestamo) {
        var x = JSON.parse(idprestamo);
         alert(x);
        $("#tbldetpro tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tbldetpro").append("\
<tr><td>" + (i + 1) + "</td>\n\
<td>" + x[i].id_prestamo + "</td>\n\
<td>" + x[i].id_prod + "</td>\n\
<td>" + (1) + "</td></tr>");

        }
    });
}