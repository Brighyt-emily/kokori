$(document).ready(function () {
    //$('.collapsible').collapsible();
    
              console.log("funciona: JQUERY");
          $('select').formSelect();
    
    
});

$("#btnRegistrar").click(function () {
    $(location).attr('href', 'http://localhost:8080/sistemaprestamos/registrarProfesores.jsp');
});
$("#btnRegistro").click(function () {
    $(location).attr('href', 'http://localhost:8080/sistemaprestamos/tablaProfesores.jsp');
});

/**
 * diseño del formulario
 */
        