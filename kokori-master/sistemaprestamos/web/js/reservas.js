$(document).ready(function () {
   var f = new Date();
   $("#fecha").val(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
});

$("#btnBuscar").click(function (){
    var codigo = $("#codigo").val();
    $("#nombres").val("");
    $("#idprofesor").val("");
    if (codigo !== ""){
        $.get("rc",{"op":1, "codigo":codigo},function (data) {
            var x = JSON.parse(data);
            if (x.length > 0) {
                $("#nombres").val(x[0].nombres + " " + x[0].apellidos);
                $("#idprofesor").val(x[0].idProfesor);
            }else{
                alert("ingreso mal su codigo");
            }
        });
    }else{
        alert("Ingrese un codigo para las reservas");
    }
});