$(document).ready(function () {
    //listarRegistroReservas();
    listarProductoActu();
    listarRegistroReserva();
});

var listData = new Array();//arreglo para la data de la bd -- reportes de reservas

var listRepeatIddr = new Array();//arreglo para guardar los idDetalle_Reserva  --reporte de reservas

var databaseActualizar = new Array();// arreglo para guardar la data de bd -- actulizar reservas ** IDDR and productos

var productoUpdateActu = new Array(); // arreglo para guardar los productos -- actulizar reserva

function listarRegistroReserva() {
    $.post("rc", {"op": 6}, function (data) {
        var x = JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            var objeto = new Object();
            objeto.idr = x[i].idReserva;
            objeto.feRe = x[i].feReserva;
            objeto.idpro = x[i].idprofesor;
            objeto.nombres = x[i].nomProfesor + " " + x[i].aplProfesor;
            objeto.codigo = x[i].codigo;
            objeto.dni = x[i].dni;
            objeto.iddr = x[i].iddr;

            if (listData.length > 0) {// comparamos datos
                var j = 0;
                while (j < listData.length) {
                    if (listData[j].idr === objeto.idr) {
                        var q = new Object();
                        q.idRev = objeto.idr;
                        q.idDRv = objeto.iddr;
                        listRepeatIddr.push(q);
                        j = listData.length;
                        objeto = null;
                    }
                    j++;
                }
                if (objeto !== null) {
                    listData.push(objeto);
                    var q = new Object();
                    q.idRev = objeto.idr;
                    q.idDRv = objeto.iddr;
                    listRepeatIddr.push(q);
                }
            } else {
                listData.push(objeto);
                var q = new Object();
                q.idRev = objeto.idr;
                q.idDRv = objeto.iddr;
                listRepeatIddr.push(q);
            }
        }

        $("#tblRegistro tbody tr").remove();//listamos los datos filtrados 
        for (var i = 0; i < listData.length; i++) {
            $("#tblRegistro").append("<tr><td>"
                    + listData[i].feRe + "</td><td>"
                    + listData[i].nombres + "</td><td>"
                    + listData[i].codigo + "</td><td>"
                    + listData[i].dni + "</td><td><a href='#' onclick='editarReserva(" + listData[i].idr + ")'><i class='material-icons'>mode_edit</i></a></td>\n\
                    <td><a href = '#' onclick='eliminarReserva(" + listData[i].idr + ")'><i class='material-icons'>delete_sweep</i></a></td>\n\
                    <td><form action='Prestamo.jsp' method='POST'><input type='text' value='"+ listData[i].idr +"' name='idr' hidden><button type='submit' class='material-icons' style='background:none;border:none; color:lightblue'>kitchen</button></form></td></tr>");
        }
    });
}
function listarProductoActu() {
    $("#actuProd tbody tr").remove();
    $.get("rc", {"op": 2}, function (data) {
        var w = JSON.parse(data);
        for (var i = 0; i < w.length; i++) {
            $("#actuProd").append("<tr><td>" + w[i].idProducto + "</td><td>"
                    + w[i].nomProd + "</td><td>" + w[i].codigo + "</td><td>"
                    + w[i].nomTipo + "</td><td>" + w[i].stock + "</td><td>"
                    + "<a href='#' onclick='productoSeleccionado(" + w[i].idProducto + ")'>"
                    + "<i class = 'material-icons prefix'>check_circle</i></a></td</tr>");
        }
    });
}

function eliminarReserva(idr) {
    var newArr = listRepeatIddr.filter(function (quebin) {//filatramo el arreglo
        return (quebin.idRev === idr);
    });
    newArr.map(function (bar) {//imprimimos el arreglos filtrado de acuerdo a la busqueda
        var e = bar.idDRv;
        $.get("rc", {"op": 7, "iddr": e}, function () {
            $.get("rc", {"op": 8, "idr": idr}, function () {
                listarRegistroReserva();
                listData.length = 0;
                listRepeatIddr.length = 0;
            });
        });
    });
}
function editarReserva(idr) {//funcion para enviar los datos de reserva hacia una nueva vista

    $.get("rc", {"op": 9, "idreserva": idr}, function (data) {
        alert(data);
        var x = JSON.parse(data);
        if (x.length > 0) {
            $(location).attr('href', 'editarReserva.jsp');//primero se habre la vista 
            //como el IDreserva se repite los almacenamos en arreglos
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
                if (databaseActualizar.length > 0) {
                    var j = 0;
                    while (j < databaseActualizar.length) {
                        if (databaseActualizar[j].idres === obj.idres) {
                            //ingresamos los datos repetitivos al arreglo para los productos
                            var tt = new Object();
                            tt.idr = obj.idres;
                            tt.iddres = obj.iddr;
                            tt.idprod = obj.idprod;
                            tt.nomprod = obj.nomprod;
                            tt.codprod = obj.codprod;
                            productoUpdateActu.push(tt);
                            j = databaseActualizar.length;
                            obj = null;
                        }
                        j++;
                    }
                    if (obj !== null) {
                        databaseActualizar.push(obj);
                        //ingresamos los datos repetitivos al arreglo para los productos
                        var tt = new Object();
                        tt.idr = obj.idres;
                        tt.iddres = obj.iddr;
                        tt.idprod = obj.idprod;
                        tt.nomprod = obj.nomprod;
                        tt.codprod = obj.codprod;
                        productoUpdateActu.push(tt);
                    }
                } else {
                    databaseActualizar.push(obj);
                    //ingresamos los datos repetitivos al arreglo para los productos
                    var tt = new Object();
                    tt.idr = obj.idres;
                    tt.iddres = obj.iddr;
                    tt.idprod = obj.idprod;
                    tt.nomprod = obj.nomprod;
                    tt.codprod = obj.codprod;
                    productoUpdateActu.push(tt);
                }
                enviarDtosUpdate();
            }
        } else {
            var toastContent = $('<span class="yellow-text"><b>Oops! Ocurrio Algo</b></span>');
            Materialize.toast(toastContent, 1800);
        }
    });
}

function enviarDtosUpdate() {
    $("#reservado tbody tr").remove();// limpiamos la tabla 
    //enviamos valores a los input's
    $("#codigo_r").val(databaseActualizar[0].codprofe);
    $("#nombres_r").val(databaseActualizar[0].nomprofe + " " + databaseActualizar[0].apelprofe);
    $("#idprofesor").val(databaseActualizar[0].idprofe);//valor oculto ID
    $("#aula_r").val(databaseActualizar[0].aula);
    $("#fe_prestamo_r").val(databaseActualizar[0].fprestamo);
    $("#h_prestamo_r").val(databaseActualizar[0].hpresta);
    $("#fe_devolucion_r").val(databaseActualizar[0].fdevo);
    $("#h_prestamo_r").val(databaseActualizar[0].hpresta);
    for (var i = 0; i < productoUpdateActu.length; i++) {
        $("#reservado").append("<tr><td>" + productoUpdateActu[i].idprod + "</td><td>" + productoUpdateActu[i].nomprod + "</td><td>" + productoUpdateActu[i].codprod + "</td><td><a href='#!' id=''><i></i></a></td></tr>");
    }
}

$("#btnActualizar").click(function () {

});

$("#btnRegresar").click(function () {
    $(location).attr('href', 'registrosReserva.jsp');
});

$("#filtNom").keyup(function () {
    var tableReg = document.getElementById('tblRegistro');
    var searchText = document.getElementById('filtNom').value.toLowerCase();
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


/// PARTE PARA GERSON MALCA CODIGO

