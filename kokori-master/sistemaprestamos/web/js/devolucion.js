$(document).ready(function(){
    ltProductosForDev();
});
var lis=[];
function ltProductosForDev(){
    $.get("de",{"opc": 1}, function (data) {
        var x=JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            $("#tb_prestamos tbody").append("<tr><td>"+x[i].codi+"</td><td>"+ x[i].nom+"</td><td>"+x[i].ape+"</td><td>"+ x[i].fep+"</td><td>"+ x[i].fed+"</td><td>"+x[i].horap+"</td><td>"+ x[i].horad+"</td><td><button class='btn btn modal-trigger' href='#modal1' onclick='modal(\""+x[i].fep+"\",\""+x[i].nom+"\",\""+x[i].ape+"\")'><i class='material-icons'>visibility</i></button></td></tr>"); 
            validar(); 
        }    
       
    });
     
}

function validar(){
    var obj=new Object();
    $('#tb_prestamos tr').each(function () {
        obj.codi = $(this).find("td").eq(0).html();
        obj.nom = $(this).find("td").eq(1).html();
        obj.ape = $(this).find("td").eq(2).html();
        obj.fep = $(this).find("td").eq(3).html();
        obj.fed = $(this).find("td").eq(4).html();
        obj.ho = $(this).find("td").eq(5).html();
        obj.ha = $(this).find("td").eq(6).html();
    });
    addObject(obj);
    listarObject();
}   
function addObject(c) {
    if (lis.length > 0) {
        var d = 0;
        while (d < lis.length) {
            if ((lis[d].nom=== c.nom && lis[d].ape===c.ape && lis[d].fep=== c.fep && lis[d].fed===c.fed)) {
                d = lis.length;
                c = null;
            }
            d++;
        }
        if (c !== null) {
            lis.push(c);
        }
    } else {
        lis.push(c);
    }
}

function listarObject() {
    $("#tb_prestamos tbody").remove();
    $("#tb_prestamos").append("<tbody></tbody>");
    for (var j = 0; j < lis.length; j++) {
        $("#tb_prestamos tbody").append("<tr><td>"+lis[j].codi+"</td><td>"+lis[j].nom+"</td><td>" + lis[j].ape + "</td><td>" + lis[j].fep + "</td><td>"+lis[j].fed+"</td><td>" + lis[j].ho + "</td><td>" + lis[j].ha + "</td>" +
                "<td><button class='btn btn modal-trigger' href='#modal1' onclick='modal(\""+lis[j].fep+"\",\""+lis[j].nom+"\",\""+lis[j].ape+"\")'><i class='material-icons'>visibility</i></button></td></tr>"); 
    }

}


function modal(fe,no,ape){
    $('.modal-trigger').leanModal();
    datosModal(fe,no,ape);
}

function editarEstado(fe,no,ape){
    var toastHTML = '<span>Seguro que desea devolver?<button class="btn-flat toast-action" onclick="datosModal('+fe+no+ape+')">¿Desea agregar una observacion?</button></span>';
     Materialize.toast( toastHTML,1985);
}

function datosModal(fe,no,ape){
    $.get("de", {"fecha":fe,"nom":no,"ape":ape,"opc": 5}, function (dat) {
        var x=JSON.parse(dat);
        
        var lista=new Array();
        lista.length = 0;
        $("#cuerpo").remove();
        $("#caja").append("<form action='#' class='form' id='cuerpo'></form>")
        lista.push(x);

        for (var i = 0; i < x.length; i++) {
            $("#cuerpo").append("<p><label><input type='checkbox' id="+lista[0][i].idP+" value='"+lista[0][i].idP+"' /><span>"+lista[0][i].nom+"</span></label></p>");  
      
        }
        
        $("#cuerpo").append("<button class='btn btn-primary teal' onclick='devolver(\""+fe+"\",\""+no+"\",\""+ape+"\")' >Devolver</button>")
    });
 
};

function devolver(fe,no,ape){
    for (var i =0; i<100; i++) {
        if( $("#"+i).prop('checked') ) {
            var checkbox=$("#"+i).val();  
            var toastHTML = "<span>¿Desea agregar una observacion del producto?<br><button class='btn-flat toast-action' style='color:#F5B7B1' onclick='continuar(\""+fe+"\",\""+no+"\",\""+ape+"\","+checkbox+")'>Cerrar</button><button class='btn btn modal-trigger' href='#modal5' onclick='observacion(\""+fe+"\",\""+no+"\",\""+ape+"\","+checkbox+")'>Aceptar</button></span>";
            Materialize.toast( toastHTML,3085);
	}
    }	 
}

function continuar(fe,no,ape,checkbox){
    $.post("de",{"idprestamo":checkbox,"estado":0,"opc":2}, function () {
        $("#tb_prestamos tbody tr").remove();
        datosModal(fe,no,ape);
        listarObject();
        modal(fe,no,ape);
    });
}

function observacion(fe,no,ape,checkbox)
{
    $('.modal-trigger').leanModal();
    $("#regis").click(function(){
        $.post("de",{"idprestamo":checkbox,"estado":0,"opc":2}, function () {
            $("#tb_prestamos tbody tr").remove();
            datosModal(fe,no,ape);
            listarObject();
            modal(fe,no,ape);
        });
       var deta= $('#lop').val();
         $.post("de",{"det":deta,"iddetapre":checkbox,"opc":3}, function(){
         });
       
    });
   
}


$("#cerrar").click(function(){
    location.reload();
});

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

