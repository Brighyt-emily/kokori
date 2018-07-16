$(document).ready(function () {
    mostrarDatosReserva();
    $("#codigo_r").val("Hol akevin");
});

var arregloReserva = new Array();// arreglo para guardar los datos de la reserva

var arregloProductoByIdDr = new Array();// arreglo para guardar los iddr(id de detalle reserva)

function mostrarDatosReserva() {
    var id = $("#idresquebin").val();
    var x = parseInt(id);
    //alert(x);
    $.post("rc", {"op": 12, "idreserva": x}, function (data) {
        alert(data);
        var w = JSON.parse(data);
        alert(w);
        /**if (w.length > 0) {
            //$("#reservado tbody tr").remove();// limpiamos la tabla 
            //enviamos valores a los input's
            $("#codigo_r").val(w[0].codigo);
            $("#nombres_r").val(w[0].nombres + " " + w[0].apellidos);
            $("#idprofesor").val(w[0].idprofesor);//valor oculto ID
            $("#aula_r").val(w[0].aula);
            $("#fe_prestamo_r").val(w[0].fe_prestamo);
            $("#h_prestamo_r").val(w[0].h_prestamo);
            $("#fe_devolucion_r").val(w[0].fe_devolucion);
            $("#h_devolucion_r").val(w[0].h_devolucion);
        } else {
            var toastContent = $('<span class="yellow-text"><b>Oops! Ocurrio Algo</b></span>');
            Materialize.toast(toastContent, 1800);
        }*/
    });
}
































/**function recibiendoDatos() {
 var id = $("#idresquebin").val();
 var x = parseInt(id);
 $.get("rc", {"op": 9, "idreserva": x}, function (data) {
 var x = JSON.parse(data);
 if (x.length > 0) {
 for (var i = 0; i < x.length; i++) {
 var obj = new Object();
 obj.idres = x[i].idres;
 obj.fdevo = x[i].fdevolucion;
 obj.aula = x[i].aula;
 obj.fprestamo = x[i].fprestamo;
 obj.hdevo = x[i].hdevo;
 obj.hpresta = x[i].hpresta;
 obj.iddr = x[i].iddr;
 obj.idprofe = x[i].idprofe;
 obj.codprofe = x[i].codprofe;
 obj.nomprofe = x[i].nomprofe;
 obj.apelprofe = x[i].apelprofe;
 obj.idprod = x[i].idprod;
 obj.nomprod = x[i].nomprod;
 obj.codprod = x[i].codprod;
 //comparamos los datos repetitivos
 if (arregloReserva.length > 0) {
 var j = 0;
 while (j < arregloReserva.length) {
 if (arregloReserva[j].idres === obj.idres) {
 //datos repetitivos
 var tt = new Object();
 tt.idres = obj.idres;
 tt.iddres = obj.iddr;
 tt.nomprod = obj.nomprod;
 tt.codprod = obj.codprod;
 arregloProductoByIdDr.push(tt);
 j = arregloReserva.length;
 obj = null;
 }
 j++;
 }
 if (obj !== null) {
 arregloReserva.push(obj);
 //datos repetitivos
 var tt = new Object();
 tt.idres = obj.idres;
 tt.iddres = obj.iddr;
 tt.nomprod = obj.nomprod;
 tt.codprod = obj.codprod;
 arregloProductoByIdDr.push(tt);
 }
 } else {
 arregloReserva.push(obj);
 //datos repetitivos
 var tt = new Object();
 tt.idres = obj.idres;
 tt.iddres = obj.iddr;
 tt.nomprod = obj.nomprod;
 tt.codprod = obj.codprod;
 arregloProductoByIdDr.push(tt);
 }
 }
 } else {
 var toastContent = $('<span class="yellow-text"><b>Oops! Ocurrio Algo</b></span>');
 Materialize.toast(toastContent, 1800);
 }
 });
 }*/
