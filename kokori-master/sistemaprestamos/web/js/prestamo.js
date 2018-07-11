$(document).ready(function () {
    ListarProd();
    ListarDoc();
});
function ListarProd() {
    $.get("Pc", {"opc": 4}, function (data) {
        var x = JSON.parse(data);

        $("#tablaPrestamo tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            if (x[i].est === 0) {
                var e = x[i].est = "Mal estado";

            }
            if (x[i].est === 1) {
                var e = x[i].est = "Buen estado";

            }
            if (x[i].est === 2) {
                var e = x[i].est = "Estado intermedio";

            }
            $("#tablaPrestamo").append("<tr><td>" + (i + 1) + "</td><td>" + x[i].nom + "</td><td>" + x[i].cod + "</td><td>" + e + "</td><td>" + x[i].nomTip + "</td><td style='text-align:center'>" + x[i].stock + "</td><td>"
                    + "<a href='#' onclick='productoSeleccionado()'>"
                    + "<i class = 'material-icons prefix'>check_circle</i></a></td</tr>");

        }
    });
}
$("#searchpro").keyup(function () {
    var tableReg = document.getElementById('tablaPrestamo');
    var searchText = document.getElementById('searchpro').value.toLowerCase();
    for (var i = 1; i < tableReg.rows.length; i++) {
        var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        var encontrado = false;
        for (var j = 0; j < cellsOfRow.length && !encontrado; j++) {
            var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            if (searchText.length === 0 || (compareWith.indexOf(searchText) > -1)) {
                encontrado = true;
            }
        }
        if (encontrado) {
            tableReg.rows[i].style.display = '';
        } else {
            tableReg.rows[i].style.display = 'none';
        }
    }
});
$("#registrarPrestamo").click(function () {
    var toastContent = $('<span>Desea completar el prestamo?<a class="btn-flat toast-action red-text" onclick="RegistrarPrestamo()">ACEPTAR</a></span>');
    Materialize.toast(toastContent, 1980);

});


function RegistrarPrestamo() {
    var alum = $("#responsable").val();
    var fe_pre = $("#fecha_pre").val();
    var fe_dev = $("#fecha_dev").val();
    var h_pre = $("#hora_pre").val();
    var h_dev = $("#hora_dev").val();
    var aul = $("#aula").val();
    var prof = $("#prof").val();
    var docu = $("#docu").val();
    var user = 1;//$("#user").val();

    $.post("Pc", {"fec_pre": fe_pre, "alu": alum, "fe_devo": fe_dev, "horaPre": h_pre, "horadev": h_dev, "aula": aul, "prof": prof, "docu": docu, "user": user, "opc": 1}, function () {

    });
    $('#tablaDetalle tbody tr').each(function () {
        var nom = $(this).find("td").eq(0).text();
        alert(nom);
        $.post("DPC", {"prod": nom, "opc": 1}, function () {
        });
    });

    // Materialize.Toast.dismiss();     
}


$('#tablaPrestamo tbody tr').click(function () {
    var nom;
    var est;
    var tip;
    nom = $(this).find("td").eq(1).text();
    est = $(this).find("td").eq(3).text();
    tip = $(this).find("td").eq(4).text();
    alert(nom + est + tip);
    //    $("#tablaDetalle").append("<tr><td>"+nom+"</td><td>"+est+"</td><td>"+tip+"</td></tr>");
    $('#tablaDetalle tr:last').after("<tr><td>" + nom + "</td><td>" + est + "</td><td>" + tip + "</td></tr>");
});

$("#dnipro").keyup(function () {
    var dni = $("#dnipro").val();
    if (dni.length === 8)
    {
        $.get("Pc", {"dni": dni, "opc": 5}, function (data) {
            var x = JSON.parse(data);
            alert(data);
            $("#dnipro").val(x.nomApe);
            $("#prof").val(x.idProfesor);
        });
    }
});
function ListarDoc() {
    $.get("Pc", {"opc": 6}, function (data) {
        var x = JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            $("#docu").append("<option value='" + x[i].id + "'>" + x[i].nombre + "</option>");
        }
        $("#docu").material_select();
    });
}


