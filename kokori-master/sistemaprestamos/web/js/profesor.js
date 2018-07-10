$(document).ready(function () {
    listarRegisProfesores();
    /**console.log("funciona: JQUERY");
    $('select').formSelect();*/
  
  $('.modal-trigger').leanModal();
});

/**
 * funciones para abrir otros .jsp's
 */
$("#btnRegistrar").click(function () {
    $(location).attr('href', 'registrarProfesores.jsp');
});
$("#btnRegistro").click(function () {
    $(location).attr('href', 'tablaProfesores.jsp');
});

/**
 * funciones para el crud de profesor
 */

function listarRegisProfesores(){
    $.get("pc",{"op":1}, function (datos) {
        var data = JSON.parse(datos);
        $("#tblProfesores tbody tr").remove();
        for (var i = 0; i < data.length; i++) {
            $("#tblProfesores").append("<tr><td>"+(i+1)+"</td><td>" + data[i].nombres + "</td><td>" + data[i].apellidos + "</td><td>" 
                    + data[i].dni + "</td><td>" + data[i].codigo + "</td><td>" + data[i].escuela + "</td><td>" 
                    + data[i].email + "</td><td><button data-target='modal1' class='btn-floating btn-large red modal-trigger' onclick='verProfesor("+data[i].idProfesor+");'><i class='material-icons'></i></button></td></tr>");
        }
    });
}

function verProfesor(x){
       $('.modal-trigger').leanModal();
       alert(x);
   
}
