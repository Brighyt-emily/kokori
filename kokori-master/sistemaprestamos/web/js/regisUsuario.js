
$("#btnregispers").click(function () {

    var es = 1;
    var nomusu = $("#nombres").val();
    var apellido = $("#apellidos").val();
    var celular = $("#celular").val();
    var dni = $("#dni").val();
    var email = $("#email").val();
    var direccion = $("#direccion").val();
    $.post("UsuCon", {"op": 2, "nom": nomusu, "ape": apellido, "num": celular, "dn": dni, "ema": email, "dire": direccion}, function (data) {
        Materialize.toast("Trabajador Creado Exitosamente", 2000);
        var bibi = JSON.parse(data);
        $("#btnRegistrar").click(function () {
            var idt = bibi;
            var es = 1;
            var nomusu = $("#nomusu").val();
            var password = $("#pass1").val();
            var cod = document.getElementById("secRol").value;
            alert(idt + " " + es + " " + nomusu + " " + password + " " + cod);
            $.post("UsuCon", {"op": 1, "usu": nomusu, "cont": password, "idr": cod, "std": es, "idt": idt}, function (data) {
                Materialize.toast("Usuario Creado Exitosamente", 1980);
                limpiar2();
            });
        });
        limpiar();
    });
});
function limpiar() {
    $("#nombres").val("");
    $("#apellidos").val("");
    $("#celular").val("");
    $("#dni").val("");
    $("#email").val("");
    $("#direccion").val("");
}
function limpiar2() {
    $("#nomusu").val("");
    $("#pass1").val("");
}

