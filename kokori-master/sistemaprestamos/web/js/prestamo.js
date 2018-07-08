$(document).ready(function () {
    $("#registrarVenta").attr('disabled', 'true');
});
/* 
 * Autocompletado de DNI
 */
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
});

$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });
});

/* 
 * Fecha y hora 
 */

var mydate = new Date();
var year = mydate.getYear();
if (year < 1000)
    year += 1900;
var day = mydate.getDay();
var month = mydate.getMonth() + 1;
if (month < 10)
    month = "0" + month;
var daym = mydate.getDate();
if (daym < 10)
    daym = "0" + daym;

document.fechas.fecha.value = daym + "/" + month + "/" + year

//////////////////////////

var fecha = new Date()
var horas = fecha.getHours()
var minutos = fecha.getMinutes()
var segundos = fecha.getSeconds()

document.horas.hora.value = horas + ":" + minutos + ":" + segundos

/* 
 * Prestamo de producto
 */

$("#prod").keyup(function () {
    var cod = $("#prod").val();
    var w = 0.0;
    if (cod.length == 3) {
        $.get("vc", {"opc": 1, "cod": cod}, function (data) {
            if (data == 0) {
                $("#prod").val("No existe el producto...!");
            } else {
                var x = JSON.parse(data);
                if (x.stock > 0) {
                    $("#tablaVentas").append("\
<tr><td><input type='text' id='cant' value='1' class='form-control' style='width: 50px;' maxlength='3'></td>\n\
<td>" + x.idprod + "</td>\n\
<td>" + x.cod + "</td>\n\
<td>" + x.nomprod + "</td>\n\
<td>" + x.precio + "</td>\n\
<td>" + x.stock + "</td><\n\td>" +
                            "<a href='#' onclick='prodDatos()'><i class='fas fa-cart-arrow-down fa-2x' style='color: #43d503;'></i></a></td></tr>");
                    $("#visualizarProducto").css("display", "block");
                } else {
                    $("#tablaVentas").append("<tr><td><input type='text' id='cant' value='1' class='form-control' style='width: 50px;'" +
                            "maxlength='3' disabled='true'></td><td>" + x.idprod + "</td><td>" + x.cod + "</td><td>" + x.nomprod + "</td><td>" + x.precio + "</td><td>" + x.stock + "</td><td>" +
                            "<a href='#' onclick='#'><i class='fas fa-cart-arrow-down fa-2x' style='color: #43d503;'></i></a></td></tr>");
                    $("#visualizarProducto").css("display", "block");
                }
            }
        });
    }
    if (cod.length == 0) {
        $('#tablaPrestamo tbody tr').remove();
        $("#visualizarProducto").css("display", "none");
    }
});
function imprimir() {
    window.print();
}

var carrito = new Array();
function prodDatos() {
    $("#prod").val("");
    $("#prod").val("").focus();
    var obj = new Object();
    $('#tablaVentas tr').each(function () {
        obj.cant = $("#cant").val();
        obj.idp = $(this).find("td").eq(1).html();
        obj.cod = $(this).find("td").eq(2).html();
        obj.prod = $(this).find("td").eq(3).html();
        obj.pre = $(this).find("td").eq(4).html();
    });
    $('#tablaVentas tbody tr').remove();
    addObject(obj);
    listarObject();
}
function addObject(cad) {
    if (carrito.length > 0) {
        var j = 0;
        while (j < carrito.length) {
            if (carrito[j].cod === cad.cod) {
                carrito[j].cant = parseInt(carrito[j].cant) + parseInt(cad.cant);
                j = carrito.length;
                cad = null;
            }
            j++;
        }
        if (cad !== null) {
            carrito.push(cad);
        }
    } else {
        carrito.push(cad);
    }
}
function listarObject() {
    var item = 1, st = 0, igv = 0, total = 0;

    $("#visualizarProducto").css("display", "none");//0cultar la tabla de busqueda  
    $('#tablitaDetalle tbody tr').remove();
    for (var j = 0; j < carrito.length; j++) {
        $("#tablitaDetalle").append("<tr><td>" + item + "</td><td>" + carrito[j].cod + "</td><td>" + carrito[j].prod + "</td><td>" + carrito[j].pre + "</td><td>" + carrito[j].cant + "</td><td>" +
                "<a href='#' onclick='eliminarDetalle(" + j + ")'><i class='fas fa-trash-alt fa-2x' style='color: black;'></i></a></td></tr>");
        total = total + parseFloat(carrito[j].cant) * parseFloat(carrito[j].pre);
        item++;
    }

    igv = total * 0.18;
    st = total - igv;//numero.toFixed(2); 
    $("#total").html("S/. " + total.toFixed(2));
    $("#st").html("S/. " + st.toFixed(2));
    $("#igv").html("S/. " + igv.toFixed(2));
    $("#totalcito").html("S/. " + total.toFixed(2));

}
function eliminarDetalle(j) {
    carrito.splice(j, 1);
    listarObject();

}
$('#prod').numeric({});
$('#cliente').numeric({});
//buscar cliente
$("#cliente").keyup(function () {
    var d = $("#cliente").val();
    if (d.length === 8) {
        $.post("vc", {"dni": d, "opc": 2}, function (data) {
            if (data == 0) {
                $("#cliente").val("Cliente no existe...!");
            } else {
                var x = JSON.parse(data);
                var nombre = x[0].nombres + " " + x[0].apellidos;
                $("#idcliente").val(x[0].idpersona);
                $("#cliente").attr('disabled', 'true');
                $("#cliente").val(nombre);
                $("#registrarVenta").removeAttr('disabled');
            }
        });
    }
});
$("#registrarVenta").click(function () {
    var idc = parseInt($("#idcliente").val());
    var det = JSON.stringify(carrito);
    alert();
    if (idc > 0) {
        $.post("vc", {"opc": 3, "idc": idc}, function (w) {
            var idv = parseInt(w);
            if (idv > 0) {
                $.post("vc", {"carrito": det, "opc": 4, "id": idv}, function (data) {
                    if (data > 0) {
                        alert("Venta realizada satisfactoriamente...!");
                        limpiar();
                    } else {
                        alert("No se pudo realizar la venta...!");
                        limpiar();
                    }
                });
            } else {
                alert("No se pudo registrar la venta...!");
                limpiar();
            }
        });
    } else {
        alert("Insertar Cliente...!");
    }
});
function limpiar() {
    $("#prod").val("");
    $('#tablitaDetalle tbody tr').remove();
    $("#cliente").val("");
    $("#idcliente").val("");
    $("#prod").val("").focus();
    $("#total").html("");
    $("#st").html("");
    $("#igv").html("");
    $("#totalcito").html("S/.0.0");
    $("#registrarVenta").attr('disabled', 'true');
    $("#cliente").prop('disabled', false);
    $('#tablaVentas tbody tr').remove();
    carrito.length = 0;
}