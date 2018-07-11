 $(document).ready(function () {
    listarRegistroReservas();
    alert("Hola");
});

function listarRegistroReservas() {
    $("#tblRegistro tbody tr").remove();
    $.post("rc", {"op": 6}, function (data) {
        var x = JSON.parse(data);
        alert(data);
        for (var i = 0; i < x.length; i++) {
            $("#tblRegistro").append("<tr><td>" + x[i].feReserva + "</td><td>" + x[i].nomProfesor + " " + x[i].aplProfesor + "</td><td>" + x[i].codigo + "</td><td>" + x[i].dni + "</td><td><a href='#' onclick='editarReserva(" + x[i].idReserva + ")'><i class='material-icons'>mode_edit</i></a></td><td><a href = '#' onclick='eliminarReserva(" + x[i].idReserva + ")'><i class='material-icons'>delete_sweep</i></a></td></tr>");
        }
    });
}

function eliminarReserva(idr) {
    alert("eliminar: " + idr);
}
function editarReserva(idr) {
    alert("editar: " + idr);
}

$("#filtNom").keyup(function () {
    var tableReg = document.getElementById('tblRegistro');
    var searchText = document.getElementById('filtNom').value.toLowerCase();
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