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
                    + "buen estado" + "</td><td>" + bibi[i].iTip + "</td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' href='#modal1' onclick='modal()'><i class='material-icons'>update</i></a></td></tr>");
        
             }
             if(jop==0)
             {
                  $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "mal estado" + "</td><td>" + bibi[i].iTip + "</td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn modal-trigger' data-target='modal1' onclick= 'koko("+data[i].id+");'><i class='material-icons'>update</i></a></td></tr>");
            
            }
        }
    });
}
function eliminar(x)
{
    $.get("pro",{"idP":x,"op":3},function () {
        alert("erer");
        listar();
        
    });
}

function editar()
{
    alert("sd");
    $.get("pro",{"op":4},function()
    {
        
    });
}
function modal(){
   $('.modal-trigger').leanModal();
   
}
function ver(df)
{
    alert("df");
}
function salva()
{
    var jop=$('#nom').val();
    var kop= $('#cod').val();
    var jip= $('#est').val();
    var uno= $('#iTip').val();
    
    
    $.get("pro",{"nom":jop,"cod":kop,"est":jip,"iTip":uno,"op":2},function()
    {
        alert("as");
        listar();
    });
    $('.modal-trigger').hide();
}
 function editar(){
   
    var toastHTML = '<span>Seguro que desea guardar?</span><button class="btn-flat toast-action" onclick="salva()">Aceptar</button>';
     M.toast({html: toastHTML});
}
   
function eco(x){
    var toastHTML = '<span>Seguro que desea eliminar?</span><button class="btn-flat toast-action" onclick="eliminar('+x+')">Aceptar</button>';
     M.toast({html: toastHTML});
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
        
   