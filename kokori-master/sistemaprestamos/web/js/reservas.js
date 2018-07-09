$(document).ready(function () {
    listarProducto();
    var f = new Date();
    $("#fecha").val(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
});

//declaracion de variables
var listaReservados = new Array(); //arreglo para guardar los productos a emprestar por parte del profesor

$("#btnBuscar").click(function () {
    var codigo = $("#codigo").val();
    $("#nombres").val("");
    $("#idprofesor").val("");
    if (codigo !== "") {
        $.get("rc", {"op": 1, "codigo": codigo}, function (data) {
            var x = JSON.parse(data);
            if (x.length > 0) {
                $("#nombres").val(x[0].nombres + " " + x[0].apellidos);
                $("#idprofesor").val(x[0].idProfesor);
                var toastHTML = '<span>Profesor encontrado</span><button class="btn-flat toast-action">Ok..!</button>';
                M.toast({html: toastHTML});
            } else {
                M.toast({html: 'Codigo mal ingresado'});
            }
        });
    } else {
        M.toast({html: 'Ingrese un codigo para las reservas', classes: 'rounded'});
    }
});

function listarProducto() {
    $("#tblProductos tbody tr").remove();
    $.get("rc", {"op": 2}, function (data) {
        var w = JSON.parse(data);
        for (var i = 0; i < w.length; i++) {
            $("#tblProductos").append("<tr><td>" + w[i].idProducto + "</td><td>"
                    + w[i].nomProd + "</td><td>" + w[i].codigo + "</td><td>"
                    + w[i].nomTipo + "</td><td>" + w[i].stock + "</td><td>"
                    + "<a href='#' onclick='productoSeleccionado(" + w[i].idProducto + ")'>"
                    + "<i class = 'material-icons prefix'>check_circle</i></a></td</tr>");
        }
    });
}

function productoSeleccionado(w) {
    $.get("rc", {"op": 3, "idProducto": w}, function (data) {
        var x = JSON.parse(data);
        var obj = new Object();
        obj.idp = x[0].idproducto;
        obj.nombre = x[0].nomProducto;
        obj.codigo = x[0].codigo;
        añadirCarrito(obj);
        listarProdReservados();
    });
}

function añadirCarrito(objeto) {
    if (listaReservados.length > 0) {
        var j = 0;
        while (j < listaReservados.length) {
            if (listaReservados[j].codigo === objeto.codigo) {
                M.toast({html: 'Este producto ya esta seleccionado'});
                j = listaReservados.length;
                objeto = null;
            }
            j++;
        }
        if (objeto !== null) {
            listaReservados.push(objeto);
        }
    } else {
        listaReservados.push(objeto);
    }
}

function listarProdReservados() {
    $("#tblRervado tbody tr").remove();
    for (var i = 0; i < listaReservados.length; i++) {
        $("#tblRervado").append("<tr><td>" + listaReservados[i].idp
                + "</td><td>" + listaReservados[i].nombre + "</td><td>"
                + listaReservados[i].codigo
                + "</td><td><a href ='#' onclick='eliminar(" + i + ");'><i class='material-icons'>delete_sweep</i></a></td></tr>");
    }
}

function eliminar(q) {
    listaReservados.splice(q, 1);
    listarProdReservados();
}

$("#nomProducto").keyup(function () {
    var tableReg = document.getElementById('tblProductos');
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

$("#btnRervar").click(function () {
    //obtenemos los valores de las variables requeridas
    var estado = 1;
    var fe_reserva = $("#fecha").val();
    var fe_devolucion = $("#fe_devolucion").val();
    var h_devolucion = $("#h_devolucion").val();
    var aula = $("#aula").val();
    var idProfe = parseInt($("#idprofesor").val());
    var fe_prestamo = $("#fe_prestamo").val();
    var h_prestamo = $("#h_prestamo").val();
    if (idProfe > 0) {
       alert("ok");
    } else {
        alert("Porfavor complete los campos");
    }
});

$("#btnCancelar").click(function () {
    M.toast({html: 'Canelara la reserva'});
});