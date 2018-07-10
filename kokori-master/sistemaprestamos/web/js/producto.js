$(document).ready(function()
{
    $('.modal-trigger').leanModal();
    
    listar();
});

function listar()
{
    $.get("pro",{"op":1}, function (data) {
        var bibi = JSON.parse(data);
        $("#tablin tbody tr").remove();
        for (var i = 0; i < data.length; i++) {
             var jop=bibi[i].est;
             
             if (jop==1)
             {
                  $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons' style='color:#2ECC71'>check_circle</i></p>" + "</td><td>" + bibi[i].nomTip + "</td><td><a class='waves-effect waves-light btn ' onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='btn btn-primaty teal modal-trigger' href='#modal2' onclick='jip("+bibi[i].idP+")'><i class='material-icons'>update</i></a></td></tr>");
             }
             if(jop==0)
             {
                  $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons' style='color:#EC7063'>cancel</i></p>" + "</td><td>" + bibi[i].nomTip + "</td><td><a class='waves-effect waves-light btn '  onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn '  onclick= 'jip("+bibi[i].idP+")'><i class='material-icons'>update</i></a></td></tr>");
             }
             if(jop==2)
             {
                   $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons' style='color:#F1C40F'>remove_circle</i></p>" + "</td><td>" + bibi[i].nomTip + "</td><td><a class='waves-effect waves-light btn '  onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn ' onclick= 'jip("+bibi[i].idP+")'><i class='material-icons'>update</i></a></td></tr>");
             }
        }
    });
}
function eliminar(x){
    $.get("pro",{"idP":x,"op":3},function () {
        listar();
        
    });
}


function jip(x)
{
    $.get("pro",{"op":5,"idP":x},function (data) {
       var x = JSON.parse(data);
       $("#ediy").val(x.idP);
        $("#pro").val(x.nom);
        $("#codi").val(x.cod);
        $("#est").val(x.est);
        $("#iTip").val(x.iTip);
        alert(x.est);
    });
    $('.modal-trigger').leanModal();
}

function modal(){
   $('.modal-trigger').leanModal();
   
}

function salva()
{
    var jop=$('#pro').val();
    var kop= $('#codi').val();
    var jip= $('#est').val();
    var uno= $('#iTip').val();
    
    $.get("pro",{"nom":jop,"cod":kop,"est":jip,"iTip":uno,"op":2},function()
    {
        listar();
    });
    
}
function unin(x)
{var toastHTML = '<span>Seguro que desea editar?<button class="btn-flat toast-action" onclick="ok('+x+')">Aceptar</button></span>';
     Materialize.toast(toastHTML,1980);
    
}



 function editar(x){
     
    var toastHTML = '<span>Seguro que desea guardar?<button class="btn-flat toast-action" onclick="salva('+x+')">Aceptar</button></span>';
     Materialize.toast(toastHTML,1980);
}
   
function eco(x){
    
     var toastContent = $('<span>Seguro que desea eliminar?<button class="btn-flat toast-action" onclick="eliminar('+x+')">Aceptar</button></span>');
     Materialize.toast(toastContent,1980);
  
}
$("#nomp").keyup(function () {
    var tableReg = document.getElementById('tablin');
    var searchText = document.getElementById('nomp').value.toLowerCase();
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
        
   