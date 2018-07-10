$(document).ready(function () {
    //$('select').formSelect();
    //$("#secEscuela").formSelect();
   
});

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



$("#btnRegistrar").click(function () {
    
    var es=0;
    var nombres = $("#nombres").val();
    var apellidos = $("#apellidos").val();
    var celular = $("#celular").val();
    var email = $("#email").val();
    var direccion = $("#direccion").val();
    var grado = $("#grado").val();
    var dni = $("#dni").val();
    var codigo = $("#codigo").val();
    var x = $("#comboEscuela").val();
    var ide = parseInt(x);
    
alert(ide);
$.get("pc", {"op":4, "nombres": nombres,"apellidos":apellidos,"celular":celular,"email":email,"direccion":direccion,"grado":grado,"dni":dni,"codigo":codigo,"escuela":ide,"estado":0}, function (data) {
alert("Registro exitoso");
});     
});