$(document).ready(function(){
    ltProductosForDev();
});

function ltProductosForDev(){
    $.get("de", {"opc": 1}, function (data) {
        var x = JSON.parse(data);
        $("#tipo option").remove();
        listarTipo();
        for (var i = 0; i < x.length; i++) {
            $("#tb_prestamos tbody").append("<tr><td>"+x[i].codi+"</td><td>"+ x[i].nom+" "+x[i].ape+"</td><td>"+ x[i].fep+"</td><td>"+ x[i].fed+"</td><td><button class='waves-effect waves-light btn modal-trigger' href='#modal1' onclick='modal()'><i class='material-icons'>visibility</i></button></td><td><button class='btn btn-primary teal' onclick='editarEstado("+x[i].idprestamo+")'>Devuelto</button></td></tr>"); 
        }
    });       
}

$("#tipo").click(function(){
    var tipo =  $("#tipo").val();
    if(tipo=="TODOS"){
        $("#tb_prestamos tbody tr").remove();
        ltProductosForDev();
    }else{
         $.get("de", {"opc": 3, "nom_tipo": tipo}, function (data) {
            $("#tb_prestamos tbody tr").remove();
            var x = JSON.parse(data);
            for (var j = 0; j < x.length; j++) {
                $('.modal-trigger').leanModal();
                $("#tb_prestamos tbody").append("<tr><td>"+x[j].codi+"</td><td>"+ x[j].nom+" "+x[j].ape+"</td><td>"+ x[j].fep+"</td><td>"+ x[j].fed+"</td><td>"+ x[j].no+"</td><td>"+ x[j].noTipo+"</td><td><button class='btn btn-primary teal' onclick='editarEstado("+x[j].idprestamo+")'>Devuelto</button></td></tr>");
            }
        });
    }
});

function editarEstado(idp){
    var toastHTML = '<span>Seguro que desea eliminar?</span><button class="btn-flat toast-action" onclick="holi('+idp+')">Aceptar</button>';
     M.toast({html: toastHTML});
}

function holi(idp){
    console.log(idp);  
    $.post("de",{"idprestamo":idp,"estado":0,"opc":2}, function () {
    $("#tb_prestamos tbody tr").remove();
       ltProductosForDev();
    });
}

function listarTipo(){
    $.get("de",{"opc":4},function(data){
        $("#tipo").append("<option disabled='disabled'>Buscar por Tipo</option>");
        var x=JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            $("#tipo").append("<option>"+x[i].noTipo+"</option>");
        }
        $("#tipo").append("<option>TODOS</option>");
    });
}

function modal(){
   $('.modal-trigger').leanModal();
}

$(document).ready( function () {
    $('#tb_prestamos').DataTable();
} );