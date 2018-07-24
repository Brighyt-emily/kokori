$(document).ready(function () {   
   cardVer();   
});

function cardVer(){    
   var id = $("#idP").val();
   var idpars = parseInt(id);
    $.get("pc",{"op":2,"idp":idpars}, function (data) {
        var w = JSON.parse(data);
        alert(w[0].nombres);
       
        $("#nombres").text(w[0].nombres+" "+w[0].apellidos);
        $("#dni").text(w[0].numDni);
        $("#codigo").text(w[0].codigo);
        $("#celular").text(w[0].numCelular);
        $("#email").text(w[0].email);
        $("#grado").text(w[0].grado);
        $("#escuela").text(w[0].escuela);
        $("#direccion").text(w[0].direccion);
        
        
        
        $("#txtnombre").val(w[0].nombres);
           $("#txtapellido").val(w[0].apellidos);
        $("#txtdni").val(w[0].numDni);
        $("#txtcodigo").val(w[0].codigo);
        $("#txtcelular").val(w[0].numCelular);
        $("#txtemail").val(w[0].email);
        $("#txtgrado").val(w[0].grado);
        $("#txtescuela").val(w[0].escuela);
        $("#txtdireccion").val(w[0].direccion);
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


function actualizapro(){
    
}