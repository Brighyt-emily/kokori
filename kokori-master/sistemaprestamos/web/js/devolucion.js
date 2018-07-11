$(document).ready(function(){
    ltProductosForDev();
});

function ltProductosForDev(){
    $.get("de", {"opc": 1}, function (data) {
        var x=JSON.parse(data);
    $.get("de", {"opc": 2}, function (data) {
        var x = JSON.parse(data);
        $("#tipo option").remove();
        listarTipo();

        for (var i = 0; i < x.length; i++) {
            $("#tb_prestamos tbody").append("<tr><td>"+x[i].codi+"</td><td>"+ x[i].nom+" "+x[i].ape+"</td><td>"+ x[i].fep+"</td><td>"+ x[i].fed+"</td><td><button class='btn btn modal-trigger' href='#modal1' onclick='modal(\""+x[i].fep+"\",\""+x[i].nom+"\",\""+x[i].ape+"\")'><i class='material-icons'>visibility</i></button></td></tr>"); 
        }    
    });   
}

function editarEstado(idp){
    var toastHTML = '<span>Seguro que desea eliminar?<button class="btn-flat toast-action" onclick="holi('+idp+')">Aceptar</button></span>';
     Materialize.toast( toastHTML,1985);
}

function holi(idp){ 
    $.post("de",{"idprestamo":idp,"estado":0,"opc":2}, function () {
    $("#tb_prestamos tbody tr").remove();
        console.log("fiyi");  
       ltProductosForDev();
    });
}


function modal(fe,no,ape){
    $('.modal-trigger').leanModal();
    editar(fe,no,ape);
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

function modal2(){
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

function editar(fe,no,ape){
    $.get("de", {"fecha":fe,"nom":no,"ape":ape,"opc": 5}, function (dat) {
        var x=JSON.parse(dat);
        var lista=new Array();
        lista.length = 0;
        $("#cuerpo").remove();
        $("#caja").append("<form action='#' class='form' id='cuerpo'></form>")
        lista.push(x);
        for (var i = 0; i < x.length; i++) {
            $("#cuerpo").append("<p><label><input type='checkbox' value="+lista[0][i].nom+"/><span>"+lista[0][i].nom+"</span></label></p>"); 

        }
    });
 
};

$("#nomp").keyup(function () {
    var tableReg = document.getElementById('tb_prestamos');
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

