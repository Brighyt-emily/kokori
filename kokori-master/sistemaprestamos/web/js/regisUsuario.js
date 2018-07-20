$(document).ready(function () {
});

$("#btnRegistrar").click(function () {

    var es = 1;
    var nomusu = $("#nomusu").val();
    var password = $("#pass1").val();
    var select = document.getElementById('secRol');
    select.addEventListener('change',
            function () {
                var selectedOption = this.options[select.selectedIndex];
            });
    alert(selectedOption);
    $.get("UsuCon", {"op": 1, "usu": nomusu, "cont": password, "idr": options, "idt": es}, function (data) {
        alert("Registro exitoso");
    });
});

$("#btnregispers").click(function () {

    var es = 1;
    var nomusu = $("#nombres").val();
    var apellido=$("#apellidos").val();
    var celular=$("#celular").val();
    var dni=$("#dni").val();
    var email=$("#email").val();
    var direccion=$("#direccion").val();
    $.get("UsuCon", {"op": 2, "nom": nomusu, "ape": apellido,"num": celular,"dn": dni,"ema": email,"dire": direccion}, function (data) {
        alert("Registro exitoso");
    });
});