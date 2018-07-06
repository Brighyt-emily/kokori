$(document).ready(function () {
    //$('select').formSelect();
    //$("#secEscuela").formSelect();
});

$("#btnMostrar").click(function () {
    var x = $("#secFacultad").val();
    var idf = parseInt(x);
    if (idf !== 0) {
        //alert("valor seleccionado: " + idf);
        $.get("pc", {"op": 3, "idf": idf}, function (data) {
            var w = JSON.parse(data);
            alert(data);
           
            for (var i = 0; i < w.length; i++) {
                alert(w[i].nomEscuela);
                
                
                
                $("#secEscuela").append('<option value='+( i) +'>'+(w[i].nomEscuela)+'</option>');
                
            }
        });
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