$(document).ready(function()
{
   
    listar();
});

function listar()
{
    $.get("pro",{"op":1}, function (data) {
        var bibi = JSON.parse(data);
        $("#tablin tbody tr").remove();
        for (var i = 0; i < data.length; i++) {
            $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + bibi[i].est + "</td><td>" + bibi[i].iTip + "</td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' onclick= 'verProfesor("+data[i].id+");'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' onclick= 'verProfesor("+data[i].id+");'><i class='material-icons'>update</i></a></td></tr>");
        }
    });
}
function eliminar(x)
{
    $.get("pro",{"idpro":x,"opc":3},function () {
        listarCatalogo();
    });
}
        
        
   