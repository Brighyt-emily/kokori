$(document).ready(function () {
    alert("testeo quebin");
    recibiendoDatos();
});

var arregloReserva = new Array();// arreglo para guardar los datos de la reserva

var arregloProductoByIdDr = new Array();// arreglo para guardar los iddr(id de detalle reserva)
function recibiendoDatos() {
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
}
