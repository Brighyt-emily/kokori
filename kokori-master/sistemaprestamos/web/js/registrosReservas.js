$(document).ready(function (){
    listarRegistroReservas();
});

function listarRegistroReservas(){
    $("#tblRegistro tbody tr").remove();
    $.post("rc",{"op":6},function (data) {
        var x = JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            $("#tblRegistro").append("<tr><td>" + x[i].feReserva + "</td><td>" + x[i].nomProfesor + " " + x[i].aplProfesor + "</td><td>" + x[i].codigo + "</td><td>" + x[i].dni + "</td><td><a href='#' onclick='editarReserva("+x[i].idReserva+")'><i class='material-icons'>mode_edit</i></a></td><td><a href = '#' onclick='eliminarReserva("+x[i].idReserva+")'><i class='material-icons'>delete_sweep</i></a></td></tr>");
        }
    });
}

function eliminarReserva(idr){
    alert("eliminar: "+idr);
}
function editarReserva(idr){
    alert("editar: " + idr);
}