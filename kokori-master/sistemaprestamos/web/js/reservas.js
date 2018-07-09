$(document).ready(function () {
    //$("#tblRervado").css("display", "none");
    listarProducto();
    var f = new Date();
    $("#fecha").val(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
});

//declaracion de variables
var listadoReserva = new Array(); //arreglo para escogidos

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
            } else {
                alert("ingreso mal su codigo");
            }
        });
    } else {
        alert("Ingrese un codigo para las reservas");
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
                    + "<a class= 'waves-effect waves-light btn grey' onclick='productoSeleccionado(" + w[i].idProducto + ")'>"
                    + "<i class = 'material-icons prefix'>check_circle</i></a></td</tr>");
        }
    });
}

function productoSeleccionado(x) {
    
    var obj = new Object();//instanciamos obj
    
    $("#tblProductos tr").each(function (){
        obj.idProducto = $(this).find("td").eq(0).html();
        obj.nomProducto = $(this).find("td").eq(1).html();
        obj.codigo = $(this).find("td").eq(2).html();
        obj.tipo = $(this).find("td").eq(3).html();
    });
    $("#nomProducto").val("");
    $("#nomProducto").val("").focus();
    añadirObjetos(obj);
    $("#tblRervado").css("display", "block");
}

function añadirObjetos(obj){
    if (listadoReserva.length>0) {
        var j = 0;
        while(j<listadoReserva.length){
            if (listadoReserva[j].codigo === obj.codigo) {
                alert("Producto en la lista");
            }
            j++;
        }
        if (obj !== null) {
            listadoReserva.push(obj);
        }
    }else{
        listadoReserva.push(obj);
    }
}

function listarObjectos(){
    
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