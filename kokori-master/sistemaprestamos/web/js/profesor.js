$(document).ready(function () {

    //$('.collapsible').collapsible();

    console.log("funciona: JQUERY");
    $('select').formSelect();

    
              console.log("funciona: JQUERY");
          $('select').formSelect();
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
 * 
 */

