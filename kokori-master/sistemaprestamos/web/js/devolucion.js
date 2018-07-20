$(document).ready(function(){
    ltProductosForDev();
});
var lis=[];
//LISTADO DE LOS PRODUCTOS PRESTADOS DE LA BD//
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
    //SE OBTIENEN LOS DATOS LISTADOS EN LA TABLA Y SE GUARDA EN UN OBJETO//
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
    //SE EVALUA QUE EL ARRAY ESTÉ VACIO//
    if (lis.length > 0) {
        var d = 0;
        while (d < lis.length) {
            //SE EVALUA QUE EL NOMBRE,APELLIDO y FECHAS SEAN DISTINTAS,SI SON IGUALES ENTONCES NO DEBE DE REPETIRSE EN EL LISTADO//
            if ((lis[d].nom=== c.nom && lis[d].ape===c.ape && lis[d].fep=== c.fep && lis[d].fed===c.fed)) {
                d = lis.length;
                c = null;
            }
            d++;
        }
        if (c !== null) {
            //SE AGREGAN LOS DATOS DEL OBJETO AL ARRAY//
            lis.push(c);
        }
    } else {
        //SE AGREGAN LOS DATOS DEL OBJETO AL ARRAY//
        lis.push(c);
    }
}

function listarObject() {
    //ESTO ES EL LISTADO DEL OBJETO DESPUES DE SU VALIDACION//
    $("#tb_prestamos tbody").remove();
    $("#tb_prestamos").append("<tbody></tbody>");
    for (var j = 0; j < lis.length; j++) {
        $("#tb_prestamos tbody").append("<tr><td>"+(j+1)+"</td><td>"+lis[j].nom+"</td><td>" + lis[j].ape + "</td><td>" + lis[j].fep + "</td><td>"+lis[j].fed+"</td><td>" + lis[j].ho + "</td><td>" + lis[j].ha + "</td>" +
                "<td><button class='btn btn modal-trigger' href='#modal1' onclick='modal(\""+lis[j].fep+"\",\""+lis[j].nom+"\",\""+lis[j].ape+"\")'><i class='material-icons'>visibility</i></button></td></tr>"); 
    }

}

//ABRIR EL MODAL//
function modal(fe,no,ape){
    $('.modal-trigger').leanModal();
    datosModal(fe,no,ape);
}

//MODAL CON LOS PRODUCTOS LISTOS PARA SU DEVOLUCION//
function datosModal(fe,no,ape){
    //PRODUCTOS//
    $.get("de", {"fecha":fe,"nom":no,"ape":ape,"opc": 5}, function (dat) {
        var x=JSON.parse(dat);
        var lista=new Array();
        lista.length = 0;
        $("#cuerpo").remove();
        $("#caja").append("<form action='#' class='form' id='cuerpo'></form>");
        lista.push(x);
        var a="a";
        
        for (var i = 0; i < x.length; i++) {
            kio=lista[0][i].idPro;
            $("#cuerpo").append("<p><label><input type='checkbox' id="+lista[0][i].idP+" value="+lista[0][i].idP+" /><span>"+lista[0][i].nom+"</span></label></p>"+"<label for='n'>Observación:(Opcional)</label><input type='text' id="+(a+lista[0][i].idP)+">");  
        }
        //BOTON 'DEVOLVER'//
        $("#cuerpo").append("<button class='btn btn-primary teal' onclick='devolver(\""+fe+"\",\""+no+"\",\""+ape+"\")' >Devolver</button>");
    });
 
};

//TOAST DE CONFIRMACION DE DEVOLUCION//
function devolver(fe,no,ape){
   
    var toastHTML = "<span>¿Está seguro de continuar?</span><br><button class='btn-flat toast-action red-text' onclick='can()'>Cancelar</button><button class='btn-flat toast-action teal-text' onclick='Aceptar(\""+fe+"\",\""+no+"\",\""+ape+"\")'>Aceptar</button>";
    Materialize.toast( toastHTML,3085);
}

//DEVOLUCION,CAMBIA EL ESTADO DEL PRESTAMO Y ENVIA UNA OBSERVACION DEL PROUDCTO EN CASO DE DEVOLUCION CON FALLO//
function Aceptar(fe,no,ape){
    var map=new Map();
    for (var i =0; i<100; i++) {
        if( $("#"+i).prop('checked') ) {
            var checkbox=$("#"+i).val(); 
            var texto=$("#a"+i).val();  
            if(texto===""){
                alert(checkbox);
                /*$.post("de",{"idprestamo":checkbox,"idproducto":kio,"opc":2}, function () {
                    $("#tb_prestamos tbody tr").remove();
                    datosModal(fe,no,ape);
                    listarObject();
                    modal(fe,no,ape);
                    location.reload();
                });
    		continue;
            }else{
	    	map.set(checkbox,texto);
                $.post("de",{"idprestamo":checkbox,"estado":0,"idproducto":kio,"opc":2}, function () {
                    $("#tb_prestamos tbody tr").remove();
                    datosModal(fe,no,ape);
                    listarObject();
                   modal(fe,no,ape);
                });
                for (var [clave, valor] of map) {   
                }
                $.post("de",{"det":valor,"iddetapre":clave,"opc":3}, function(){});
                location.reload();
    	    }*/
            
       // }
   // }
//}

function can()
{
    $("#modal1").closeModal();
}

$("#cerrar").click(function(){
     location.reload();
});

//BUSQUEDA SENSITIVA DE LA TABLA//
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


function okp()
{
    $.post("de",{"opc":6},function(data)
    {
        alert(data);
        var x=JSON.parse(data);
      
        for (var i = 0; i < x.length; i++) {
            $("#tabp tbody").append("<tr><td>"+(i+1)+"</td><td>"+x[i].nom+"</td><td>"+x[i].detal+"</td></tr>"); 
             
        }    
       
    });
}

