$(document).ready(function () {
   ltProductosForDev();
});

function ltProductosForDev(){
    $.get("de", {"opc": 1}, function (data) {
        var x = JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            $("#tb_prestamos tbody").append("<tr><td>"+x[i].codi+"</td><td>"+ x[i].nom+" "+x[i].ape+"</td><td>"+ x[i].fep+"</td><td>"+ x[i].fed+"</td><td>"+ x[i].no+"</td><td>"+ x[i].noTipo+"</td><td><button class='btn btn-primary teal' onclick='Materialize.fadeInImage('#image-test')'>Devuelto</button></td></tr>");
            
        }
    });       
}

function editarEstado(idp){
    var estado =0;
    $.post("de",{"idprestamo":idp,"estado":estado,"opc":2}, function () {
      $("#tb_prestamos tbody tr").remove();
      ltProductosForDev();
    });
   
}
