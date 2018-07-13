$(document).ready(function () {
    ListarProd();
    ListarDoc();
    VerificacionReserva();
});
function ListarProd() {
    $.get("Pc", {"opc": 4}, function (data) {
        var x = JSON.parse(data);

        $("#tablaPrestamo tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            if (x[i].est === 0) {
                var e = x[i].est = "Mal estado";

            }
            if (x[i].est === 1) {
                var e = x[i].est = "Buen estado";

            }
            if (x[i].est === 2) {
                var e = x[i].est = "Estado intermedio";

            }
            $("#tablaPrestamo").append("<tr><td>" + (i + 1) + "</td><td>" + x[i].nom + "</td><td>" + x[i].cod + "</td><td>" + e + "</td><td>" + x[i].nomTip + "</td><td style='text-align:center'>" + x[i].stock + "</td>\n\
            <td>"+ "<button id='bt"+x[i].idP+"' class='material-icons prefix' style='background:none;border:none; color:lightblue' onclick='productoSeleccionado("+x[i].idP+")'>check_circle</button></td</tr>");
         //  <i class = 'material-icons prefix'>check_circle</i>
        }
    });
}
$("#searchpro").keyup(function () {
    var tableReg = document.getElementById('tablaPrestamo');
    var searchText = document.getElementById('searchpro').value.toLowerCase();
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
$("#registrarPrestamo").click(function () {
    var alum = $("#responsable").val();
    var fe_pre = $("#fecha_pre").val();
    var fe_dev = $("#fechadev").val();
    var h_pre = $("#hora_pre").val();
    var h_dev = $("#hora_dev").val();
    var aul = $("#aula").val();
    var prof = $("#prof").val();
    var docu = $("#docu").val();
    var user = 1;//$("#user").val();
    if(alum==="" || fe_pre==="dd/mm/aaaa" || fe_dev==="dd/mm/aaaa" || aul==="" || prof==="" || user===""){
        Materialize.toast("Completar todos los campos de datos", 1980);
    }
    else  {
        if($("#tablaDetalle tbody tr").length===0)
        {
            Materialize.toast("No hay equipos seleccionados", 1980);
        }
        else{
            $.post("Pc", {"fec_pre": fe_pre, "alu": alum, "fe_devo": fe_dev, "horaPre": h_pre, "horadev": h_dev, "aula": aul, "prof": prof, "docu": docu, "user": user, "opc": 1}, function () {
            });
    $('#tablaDetalle tbody tr').each(function () {
        var nom = $(this).find("td").eq(0).text();
        $.post("DPC", {"prod": nom, "opc": 1}, function () {
        });
    });
    Materialize.toast("Prestamo exitoso", 1980); 

        }
     
    }
});

function productoSeleccionado(x){
    $.get("Pc", {"id":x,"opc": 7}, function (data) {
        var y = JSON.parse(data);
        if(document.getElementById("bt"+y.idP+"").style.color === 'green')
        {
           Materialize.toast("El equipo ya esta en la lista!", 1980);  
        }
        else{
            if (y.est === 0) {
                var e = y.est = "Mal estado";

            }
            if (y.est === 1) {
                var e = y.est = "Buen estado";

            }
            if (y.est === 2) {
                var e = y.est = "Estado intermedio";

            }
        $("#tablaDetalle").append("<tr><td hidden>"+y.idP+"</td><td>" + y.nom + "</td><td>" + e + "</td><td>" + y.nomTip + "</td></tr>");
        document.getElementById("bt"+y.idP+"").style.color = 'green';
        }
     });
}

$("#dnipro").keyup(function () {
    var dni = $("#dnipro").val();
    if (dni.length === 8)
    {
        $.get("Pc", {"dni": dni, "opc": 5}, function (data) {
            var x = JSON.parse(data);
            alert(data);
            $("#dnipro").val(x.nomApe);
            $("#prof").val(x.idProfesor);
        });
    }
});
function ListarDoc() {
    $.get("Pc", {"opc": 6}, function (data) {
        var x = JSON.parse(data);
        for (var i = 0; i < x.length; i++) {
            $("#docu").append("<option value='" + x[i].id + "'>" + x[i].nombre + "</option>");
        }
        $("#docu").material_select();
    });
}
function VerificacionReserva(){
        var x=$("#ress").val();
        alert(x);
        if(x===null){
        }
        else{
           $.get("Pc", {"idd":x,"opc": 11}, function (data) {
            var y = JSON.parse(data);
            var e;
            alert(data);
            for (var i = 0; i < y.length; i++) {
                if (y[i].est === 0) {
                e  = "Mal estado";

            }
            if (y[i].est === 1) {
                e  = "Buen estado";

            }
            if (y[i].est === 2) {
                e = "Estado intermedio";

            }
                $("#tablaDetalle").append("<tr><td>" + y[i].nom + "</td><td>" + e + "</td><td>" + y[i].nomTip + "</td></tr>");
            }    
            });
           $.get("Pc", {"idr":x,"opc": 10}, function (dat) {
            var y = JSON.parse(dat); 
            alert(dat);
                $("#fecha_pre").val(y.fe_prestamo);
                $("#fechadev").val(y.fe_devolucion);
                $("#hora_pre").val(y.hora_pre);
                $("#hora_dev").val(y.hora_devo);
                $("#aula").val(y.aula);
                $("#prof").val(y.id_profe);
                $("#dnipro").val(y.nom_profe);          
            });
        }
        
}

