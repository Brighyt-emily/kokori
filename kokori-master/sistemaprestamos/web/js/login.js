<<<<<<< HEAD
$(document).ready(function () {
});
$("#btnIngresar").click(function () {
    var x = $("#user").val();
    var y = $("#pass").val();
    alert(x + y);
    $.post("main", {"user": x, "pass": y, "opc": 1}, function (data) {
        alert(data);
        if (data > 0)
        {
            $(location).attr('href', 'http://localhost:8080/sistemaprestamos/main.jsp');
        } else {
    
        }
    });
});


=======
$(document).ready(function () {
});
$("#btnIngresar").click(function () {
    var x = $("#user").val();
    var y = $("#pass").val();
    alert(x + y);
    $.post("main", {"user": x, "pass": y, "opc": 1}, function (data) {
        alert(data);
        if (data > 0)
        {
            $(location).attr('href', 'http://localhost:8080/sistemaprestamos/main.jsp');
        } else {
            $("#alertNotificacion").show(200);
            $("#alertNotificacion").delay(3000).hide(600);
        }
    });
});


>>>>>>> 11bf5fc0b202c5ef7806f750f40882bcadcf0cef
