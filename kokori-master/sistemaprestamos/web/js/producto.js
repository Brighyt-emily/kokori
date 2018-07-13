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
            var jop =bibi[i].est;
             
             if (jop===1)
             {
                  $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons' style='color:#2ECC71'>check_circle</i></p>" + "</td><td>" + bibi[i].nomTip + "</td><td><a class='waves-effect waves-light btn-floating red' onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn-floating modal-trigger' href='#modal2' onclick='jip("+bibi[i].idP+")'><i class='material-icons'>update</i></a></td></tr>");
             }
             if(jop===0)
             {
                  $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons' style='color:#EC7063'>cancel</i></p>" + "</td><td>" + bibi[i].nomTip + "</td><td><a class='waves-effect waves-light btn '  onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn-floating' onclick='jip("+bibi[i].idP+")'><i class='material-icons'>update</i></a></td></tr>");
             }
             if(jop===2)
             {
                   $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons' style='color:#F1C40F'>remove_circle</i></p>" + "</td><td>" + bibi[i].nomTip + "</td><td><a class='waves-effect waves-light btn '  onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn ' href='#modal2'  onclick= 'jip("+bibi[i].idP+")'><i class='material-icons'>update</i></a></td></tr>");
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
     $('.modal-trigger').leanModal();

    var jip= $('#est').val();

    $.get("pro",{"op":4,"idP":x,"idTip":jip},function (data) {
    });
    
}

function modal(){
   $('.modal-trigger').leanModal();
    $.post("pro",{ "op":7}, function (data) {
            var w = JSON.parse(data);
            for (var i = 0; i < w.length; i++) {  
                $("#combin").append(
		"<option value='"+w[i].iTip+"'>"+w[i].nomTip+"</option>");
            }
            $("#combin").material_select();
        });
  
   
}

function salva()
{
    alert('tututu');
    var jop=$('#pro').val();
    var kop= $('#codi').val();
    var jip= $('#loco').val();
    var x = $("#combin").val();
    var ide = parseInt(x);

    
    $.post("pro",{"nom":jop,"cod":kop,"est":jip,"iTip":ide,"op":2},function()
    {
        console.log("controlador op 2");
        listar();
    });
    
}
function unin(x){var toastHTML = '<span>Seguro que desea editar?<button class="btn-flat toast-action" onclick="ok('+x+')">Aceptar</button></span>';
     Materialize.toast(toastHTML,1980);
    
}



 function editar(x){
     
    var toastHTML = '<span>Seguro que desea guardar?<button class="btn-flat toast-action" onclick="salva()">Aceptar</button></span>';
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
        
   