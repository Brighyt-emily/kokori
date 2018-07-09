$(document).ready(function () {
    //$('select').formSelect();
    //$("#secEscuela").formSelect();
    $('.modal').modal();
});

$("#btnMostrar").click(function () {
    var x = $("#secFacultad").val();
    $('#campo_select_append').append('<option value="opcion_nueva_1" selected="selected">Opción nueva 1</option>');
    var idf = parseInt(x);
    if (idf !== 0) {
        //alert("valor seleccionado: " + idf);
        $.get("pc", {"op": 3, "idf": idf}, function (data) {
            var w = JSON.parse(data);
            alert(data);
            alert(w.nomEscuela);
           
            for (var i = 0; i < w.length; i++) {
                alert(w[i].nomEscuela);
                
                $("#opciones option:last").after(
				"<option value='"+w[i].idEscuela+"'>"+w[i].nomEscuela+"</option>");
                
            }
        });
        $('#opciones').material_select();
    } else {
        alert("seleccione un valor para la caja de texto");
    }
});
$("#btnRegistrar").click(function () {
    var nombres = $("#nombres").val();
    var apellidos = $("#apellidos").val();
    var celular = $("#celular").val();
    var email = $("#email").val();
    var direccion = $("#direccion").val();
    var grado = $("#grado").val();
    var dni = $("#dni").val();
    var codigo = $("#codigo").val();
    var x = $("#secEscuela").val();
    var ide = parseInt(x);
    $.post("pc", {"nombres": nombres, "apellidos":apellidos, "celular": celular, "email":email, "direccion":direccion,"grado": grado, "dni": dni, "codigo": codigo, "escuela":ide});
        
});