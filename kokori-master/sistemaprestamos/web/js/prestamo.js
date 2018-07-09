$(document).ready(function (){
    ListarProd();
}); 
/* 
 * Autocompletado de DNI
 */
    /*document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
});

$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        }
    });
}); 

/* 
 * Fecha y hora 
 */
/*
var mydate = new Date();
var year = mydate.getYear();
var day = mydate.getDay();
var month = mydate.getMonth() + 1;
var daym = mydate.getDate();

document.fechas.fecha.value = daym + "/" + month + "/" + year;

//////////////////////////

var fecha = new Date();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

document.horas.hora.value = horas + ":" + minutos + ":" + segundos;

/* 
 * Prestamo de producto
 */
/*$("#equipo").keyup(function (){
    var codigo = $("#").val();
    if(codigo.length===1){
    $.get("../Pr",{"opc":1,"cod":codigo},function(data) {
        var x = JSON.parse(data);
        alert(data);
        if(x.id===0){
            $("#codPro").val("No existe el libro");
        }else{     
            if(x.stock >0){            
                $("#tabla").append("<tr class='row-content'><td>" + x.nombre+ "</td><td>" + x.edicion + "</td><td>" + x.año +"</td><td>" + x.stock + "</td><td>" +
                        "<a class='btn btn-danger edit' onclick='EliminarProdCarrito()'  href='#' aria-label='Settings'><i class='fa fa-trash' aria-hidden='true'></i></a></td></tr>");
                $("#codPro").val('');
            }
            else{
                alert('Atencion el stock de este libro es 0 y no puede ser prestado');
            }
        }       
    });
    }
});
*/
function ListarProd(){
    $.get("Pc",{"opc":4},function (data) {
        var x = JSON.parse(data);
        
          $("#tablaPrestamo tbody tr").remove(); 
        for(var i = 0;i<x.length;i++){
            if(x[i].est === 0){
                var e= x[i].est="Mal estado";
                
            }
            if(x[i].est === 1){
                var e= x[i].est="Buen estado";
                
            }
            if(x[i].est === 2){
                var e= x[i].est="Estado intermedio";
                
            }
            $("#tablaPrestamo").append("<tr><td>"+(i+1)+"</td><td>"+x[i].nom+"</td><td>"+x[i].cod+"</td><td>"+e+"</td><td>"+x[i].nomTip+"</td><td>"+x[i].stock+"</td></tr>");
        
        }
    });
}
