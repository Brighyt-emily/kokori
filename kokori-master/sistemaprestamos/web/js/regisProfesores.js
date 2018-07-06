$(document).ready(function () {
    $('select').formSelect();
});

$("#btnMostrar").click(function () {
    var x = $("#secFacultad").val();
    var idf = parseInt(x);
    if (idf !== 0) {
        //alert("valor seleccionado: " + idf);
        $.get("pc", {"op": 3, "idf": idf}, function (data) {
            var w = JSON.parse(data);
            alert(data);
            $("#secEscuela option").remove();
            for (var i = 0; i < w.length; i++) {
                $("#secEscuela").append("<option id='" + w[i].idEscuela+ "'>" + w[i].nomEscuela + "</option>"); 
            }
        });
    } else {
        console.log("seleccione un valor para la caja de texto");
    }
});
$("#btnRegistrar").click(function () {
    var nombres = $("#txtNombres").val();
    var apellidos = $("#txtApellidos").val();
    var celular = $("#txtNumCelular").val();
    var email = $("#txtEmail").val();
    var direccion = $("#txtDireccion").val();
    var grado = $("#txtGrado").val();
    var dni = $("#txtDni").val();
    var codigo = $("#txtCodigo").val();
    $.post("pc", {"nombres": nombres, "apellidos":apellidos, "celular": celular, "email":email, "direccion":direccion,"grado": grado, "dni": dni, "codigo": codigo});
    M.toast({html: 'Se le asigno un codigo', classes: 'rounded'});
    
});