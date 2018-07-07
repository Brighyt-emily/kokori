$(document).ready(function (){
    
});

$("#btnOk").click(function (){
    var cod = $("#codigo").val();
    if (cod ==="") {
        alert("Ingrese su codigo");
    }else{
        alert("Ingreso correctamente: " + cod);
    }
});