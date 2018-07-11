$(document).ready(function () {
    listarRegisProfesores();
    /**console.log("funciona: JQUERY");
    $('select').formSelect();*/
  
 
});

/**
 * funciones para abrir otros .jsp's
 */
$("#btnRegistrar").click(function () {
    $(location).attr('href', 'registrarProfesores.jsp');
});
$("#btnRegistro").click(function () {
    $(location).attr('href', 'tablaProfesores.jsp');
});

/**
 * funciones para el crud de profesor
 */

function listarRegisProfesores(){
    $.get("pc",{"op":1}, function (datos) {
        alert("sdsd");
        
        var data = JSON.parse(datos);
        $("#tblProfesores tbody tr").remove();
       
        for (var i = 0; i < data.length; i++) {
            
           
        
            var jop = data[i].estado;

            if (jop === 1)
            {
                $("#tblProfesores").append("<tr><td>" + "<p><i class='small material-icons' style='color:#2ECC71'>check_circle</i></p>"  + "</td><td>" + data[i].nombres + "</td><td>" + data[i].apellidos + "</td><td>"
                        + data[i].dni + "</td><td>" + data[i].codigo + "</td><td>" + data[i].escuela + "</td><td>"
                        + data[i].email + "</td><td><button data-target='modal1' class='btn-floating red modal-trigger' onclick='verProfesor(" + data[i].idProfesor + ");'><i class='material-icons'>update</i></button></td><td><button  class='btn-floating' onclick='eliminar(" + data[i].idProfesor + ");'><i class='material-icons'>delete</i></button></td></tr></tr>");
            }
            if (jop === 0)
            {
                $("#tblProfesores").append("<tr><td>" + "<p><i class='small material-icons' style='color:#ff0000'>cancel</i></p>"  + "</td><td>" + data[i].nombres + "</td><td>" + data[i].apellidos + "</td><td>"
                        + data[i].dni + "</td><td>" + data[i].codigo + "</td><td>" + data[i].escuela + "</td><td>"
                        + data[i].email + "</td><td><button data-target='modal1' class='btn-floating  red modal-trigger' onclick='verProfesor(" + data[i].idProfesor + ");'><i class='material-icons'>update</i></button></td><td><button  class='btn-floating' onclick='eliminar(" + data[i].idProfesor + ");'><i class='material-icons'>delete</i></button></td></tr></tr>");
            }
            if (jop === 2)
            {
                $("#tblProfesores").append("<tr><td>" + "<p><i class='small material-icons red' style='color:#ff0000'>remove_circle</i></p>"  + "</td><td>" + data[i].nombres + "</td><td>" + data[i].apellidos + "</td><td>"
                        + data[i].dni + "</td><td>" + data[i].codigo + "</td><td>" + data[i].escuela + "</td><td>"
                        + data[i].email + "</td><td><button data-target='modal1' class='btn-floating  red modal-trigger' onclick='verProfesor(" + data[i].idProfesor + ");'><i class='material-icons'>update</i></button></td><td><button  class='btn-floating' onclick='eliminar(" + data[i].idProfesor + ");'><i class='material-icons'>delete</i></button></td></tr>");
            }
        
        
        
        }
    });
}

function verProfesor(x){
    idProfe=x;
       $('.modal-trigger').leanModal();
     $.get("pc",{"op":2,"idp":x}, function (datos) {
         var data = JSON.parse(datos);
      alert("llego al controlador");
      
      alert(data[0].apellidos);
       $("#nombres").val(data[0].nombres);
       $("#apellidos").val(data[0].apellidos);
       $("#email").val(data[0].email);
       $("#codigo").val(data[0].codigo);
        $("#direccion").val(data[0].direccion);
         $("#codigo").val(data[0].codigo);
       
          $("#celular").val(data[0].numCelular);
           $("#dni").val(data[0].numDni);
    });
}


$("#btnMostrar").click(function () {
    var x = $("#secFacultad").val();
    var idf = parseInt(x);
    alert(idf);
    if (idf !== 0) {
        $.get("pc", {"op": 3, "idf": idf}, function (data) {
            var w = JSON.parse(data);
            for (var i = 0; i < w.length; i++) {  
                $("#comboEscuela").append(
		"<option value='"+w[i].idEscuela+"'>"+w[i].nomEscuela+"</option>");
            }            
            $("#comboEscuela").material_select();
        });
    $("#comboEscuela option").remove();
    } else {
        alert("seleccione un valor para la caja de texto");
    }
    
});

var idProfe=0;
function update(){
    alert();
    var nom=$("#nombres").val();
    var ape=$("#apellidos").val();
    var ema=$("#email").val();
    var direc=$("#direccion").val();
    var cod=$("#codigo").val();
    var cell=$("#celular").val();
    var dni=$("#dni").val();
    var idee=parseInt(idProfe);
     var x = $("#comboEscuela").val();
    var ide = parseInt(x);
    $.get("pc", {"id":idee,"codigo":cod,"ides":ide,"nombre":nom,"apellido":ape,"direccion":direc,"celular":cell,"dni":dni,"email":ema,"op": 5}, function (data) {
        console.log("Registro exitoso"); 
        listarRegisProfesores();
    });
}

function eliminar(x){
    $.get("pro",{"idProfe":x,"op":6},function () {
      
        console.log("eliminno Profe");
         listarRegisProfesores();
          $.get("pro",{"idTraba":x,"op":7},function () {
   listarRegisProfesores();
        console.log("eliminno Trabajdor");
    });
    });
    
   
}


