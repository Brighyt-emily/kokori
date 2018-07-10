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
                    + "<p><i class='small material-icons'>check_circle</i></p>" + "</td><td>" + bibi[i].iTip + "</td><td><a class='waves-effect waves-light btn modal-trigger' onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn '   onclick='edit()'><i class='material-icons'>update</i></a></td></tr>");
             }
             if(jop==0)
             {
                  $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons'>highlight_off</i></p>" + "</td><td>" + bibi[i].iTip + "</td><td><a class='waves-effect waves-light btn modal-trigger'  onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn '  onclick= 'edit()'><i class='material-icons'>update</i></a></td></tr>");
             }
             if(jop==2)
             {
                   $("#tablin").append("<tr><td>"+(i+1)+"</td><td>" + bibi[i].nom + "</td><td>" + bibi[i].cod + "</td><td>" 
                    + "<p><i class='small material-icons'>remove_circle</i></p>" + "</td><td>" + bibi[i].iTip + "</td><td><a class='waves-effect waves-light btn modal-trigger'  onclick='eco("+bibi[i].idP+")'><i class='material-icons'>delete_forever</i></a></td><td><a class='waves-effect waves-light btn ' onclick= 'edit()'><i class='material-icons'>update</i></a></td></tr>");
             }
        }
    });
}
function eliminar(x){
    $.get("pro",{"idP":x,"op":3},function () {
        listar();
        
    });
}

function edit(x)
{
    
    var valores="";
    $('#tablin').parent("tr").find('td').each(function()
    {
       if($(this).html() != "")
       {
           valores += $(this).html()+"";
       }
       valores = valores +"\n";
       alert(valores);
    });
    
    
    var obj = new Object();
    $('#tablin tr').each(function () {
        obj.nom = $(this).find("td").eq(1).html();
        obj.codi = $(this).find("td").eq(2).html();
        obj.est = $(this).find("td").eq(3).html();
        obj.iTip = $(this).find("td").eq(4).html();
        alert(obj.nom);
        
    });
    $.post("pro",{"idP":x,"op":4}, function(data)
    {
    var bibi = JSON.parse(data);
    var jop=bibi.nom;
    alert(jop);
    });
    

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
 function editar(){
     
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
        
   