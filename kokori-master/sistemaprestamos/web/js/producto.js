$(document).ready(function()
{
    alert("sd");
    listar();
});

function listar()
{
    $.get("pro",{"op":1}, function (dat) {
        var data = JSON.parse(dat);
        $("#tablin tbody tr").remove();
        for (var i = 0; i < data.length; i++) {
            $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + data[i].nom + "</td><td>" + data[i].codi + "</td><td>" 
                    + data[i].est + "</td><td>" + data[i].tip + "</td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' onclick= 'verProfesor("+data[i].idProfesor+");'><i class='material-icons'>visibility</i></a></td></tr>");
        }
    });
}
        
        
   