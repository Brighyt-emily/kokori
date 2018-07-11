$(document).ready(function () {
    //listarRegistroReservas();
    listarRegistroReserva();
});

var listData = new Array();//arreglo para la data de la bd

var listRepeatIddr = new Array();//arreglo para guardar los idDetalle_Reserva 

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
                    + listData[i].dni + "</td><td><a href='#' onclick='editarReserva(" + listData[i].idr + ")'><i class='material-icons'>mode_edit</i></a></td><td><a href = '#' onclick='eliminarReserva(" + listData[i].idr + ")'><i class='material-icons'>delete_sweep</i></a></td><td><a href='#' onclick='realizarPrestamo(" + listData[i].idr + ")'><i class='material-icons'>kitchen</i></a></td></tr>");
        }
    });
}

function eliminarReserva(idr) {
    var newArr = listRepeatIddr.filter(function (quebin) {
        return (quebin.idRev === idr);
    });
    newArr.map(function (bar) {
        var e = bar.idDRv;
        $.get("rc",{"op": 7, "iddr": e}, function () {
            $.get("rc",{"op":8, "idr":idr},function (){
                listarRegistroReserva();
                listData.length = 0;
                listRepeatIddr.length = 0;
            });
        });
    });
}
function editarReserva(idr) {
    alert("editar: " + idr);
    
}

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
function realizarPrestamo(idr){
    alert(idr);
}

