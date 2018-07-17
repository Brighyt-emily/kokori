$(document).ready(function () {

    DatosByReserva();
});

var arregloReserva = new Array();// arreglo para guardar los datos de la reserva

var arregloProductoByIdDr = new Array();// arreglo para guardar los iddr(id de detalle reserva)

var productosReserva = new Array();//arreglo para guardar productos de la reserva-- productos antiguos


$("#nomProducto").keyup(function () {
    var tableReg = document.getElementById('actuProd');
    var searchText = document.getElementById('nomProducto').value.toLowerCase();
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

function DatosByReserva() {
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

        //enviamos los datos de la reserva
        $("#reservado tbody tr").remove();// limpiamos la tabla 
        var id = $("#idresquebin").val();
        var x = parseInt(id);
        //funcion get para los primero datos
        $.get("rc", {"op": 12, "idreserva": x}, function (data) {
            var w = JSON.parse(data);
            //enviamos valores a los input's
            $("#codigo_r").val(w[0].codigo);
            $("#nombres_r").val(w[0].nombres + " " + w[0].apellidos);
            $("#idprofesor").val(w[0].idprofesor);//valor oculto ID
            $("#aula_r").val(w[0].aula);
            $("#fe_prestamo_r").val(w[0].fe_prestamo);
            $("#h_prestamo_r").val(w[0].h_prestamo);
            $("#fe_devolucion_r").val(w[0].fe_devolucion);
            $("#h_devolucion_r").val(w[0].h_devolucion);
            //mostramos los datos de lista
            $.get("rc", {"op": 9, "idreserva": x}, function (dtos) {
                var y = JSON.parse(dtos);
                for (var i = 0; i < y.length; i++) {
                    $("#reservado").append("<tr><td>" + y[i].idproducto + "</td><td>" + y[i].nomprod + "</td><td>" + y[i].codprod + "</td><td><a href='#!'><i class='material-icons'>delete_sweep</i></a></td></tr>");
                }
            });
        });
    });
}
function datosProductos() {
    var obj = new Object();
    $("#reservado tr").each(function () {
        obj.idp = $(this).find("td").eq(0).html();
        obj.nombre = $(this).find("td").eq(1).html();
        obj.codigo = $(this).find("td").eq(2).html();
        productosReserva.push(obj);
    });
}

function productoSeleccionado(w) {
    $.get("rc", {"op": 3, "idProducto": w}, function (data) {

        var x = JSON.parse(data);
        var obj = new Object();
        obj.idp = x[0].idproducto;
        obj.nombre = x[0].nomProducto;
        obj.codigo = x[0].codigo;
        añadirListado(obj);
        listarProdReservados();
    });
}
function añadirListado(objeto) {
    if (productosReserva.length > 0) {
        var j = 0;
        while (j < productosReserva.length) {
            if (productosReserva[j].codigo === objeto.codigo) {
                var toastContent = $('<span class="white-text"><b>Producto en lista!!</b></span>');
                Materialize.toast(toastContent, 1800);
                j = productosReserva.length;
                objeto = null;
            }
            j++;
        }
        if (objeto !== null) {
            productosReserva.push(objeto);
        }
    } else {
        productosReserva.push(objeto);
    }
}

function listarProdReservados() {
    $("#reservado tbody tr").remove();
    for (var i = 0; i < productosReserva.length; i++) {
        $("#reservado").append("<tr><td>" + productosReserva[i].idp
                + "</td><td>" + productosReserva[i].nombre + "</td><td>"
                + productosReserva[i].codigo
                + "</td><td><a href ='#' onclick='eliminar(" + i + ");'><i class='material-icons'>delete_sweep</i></a></td></tr>");
    }
}

function eliminar(i) {
    alert(i);
}