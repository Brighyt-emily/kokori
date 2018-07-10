$(document).ready(function (){
    ListarProd();
    ListarDoc();
}); 
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
            $("#tablaPrestamo").append("<tr><td>"+(i+1)+"</td><td>"+x[i].nom+"</td><td>"+x[i].cod+"</td><td>"+e+"</td><td>"+x[i].nomTip+"</td><td style='text-align:center'>"+x[i].stock+"</td><td  >"
                    + "<a href='#' onclick='productoSeleccionado()'>"
                    + "<i class = 'material-icons prefix'>check_circle</i></a></td</tr>");
        
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

$("#registrarPrestamo").click(function (){
    var alum = $("#responsable").val();
    var fe_pre = $("#fecha_pre").val();
    var fe_dev = $("#fecha_dev").val();
    var h_pre = $("#hora_pre").val();
    var h_dev = $("#hora_dev").val();
    var aul = $("#aula").val();
    var codCli = $("#codCli").val();
    if(codCli==="" || ($("#tabla tr").length-1)===0){
      $("#Alert").html("Ingresar un producto y un cliente!");
      $("#Alert").addClass('alert alert-danger');
      $("#Alert").show(200);
      $("#Alert").delay(3000).hide(600);
    }
    else{
        $.post("../venta",{"cliente":cli,"documento":docu,"usuario":user,"sede":sed,"total":tot,"opc":1},function () {
        $.post("../venta",{"imp":tot,"tip":tipPago,"sed":sed,"opc":4},function () {
        
      });
    });
    $('#tabla tbody tr').each(function () {    
        var precio = $(this).find("td").eq(1).html();
        var cant = $(this).find("td").eq(2).find("input").val();
        var prod = $(this).find("td").eq(0).text();
        $.post("../venta",{"precio":precio,"cant":cant,"prod":prod,"opc":3},function () {     
      }); 
      });
    $("#codCli").val("");
    $('#tabla tbody tr').remove();
    $('#totalS').html("S/.00.00");
    $("#Alert").removeClass();
    $("#Alert").addClass('alert alert-success');
    $("#Alert").html("Venta exitosa");
    $("#Alert").show(200);
    $("#Alert").delay(3000).hide(600);
    
    }
  
    if($("#CE").is(':checked')) {
        var ruc = $("#CERuc").val();
    var razonsocial = $("#CERazSo").val();
    var direccion = $("#CEDireccion").val();
    var telefono = $("#CETelefono").val();
    $.post("../persona",{"ruc":ruc,"razonso":razonsocial,"direccion":direccion,"telefono":telefono,"opc":7},function () {
    });
  
   $("#ModalClient").modal('hide'); 
    };  
});

$("#dnipro").keyup(function () {
    var dni =$("#dnipro").val();
    if(dni.length===8)
    {
        $.get("Pc",{"dni":dni,"opc":5},function (data) {
            var x = JSON.parse(data);
            $("#dnipro").val(x.nomApe);
            });
        }
});
function ListarDoc(){
    $.get("Pc",{"opc":6},function (data) {
        var x = JSON.parse(data);
        alert(data);
        for(var i = 0;i<x.length;i++){
            $("#docu").append("<option>"+x[i].nombre+"</option>");
        }
        $("#docu").material_select();
    });
}


