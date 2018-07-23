$(document).ready(function () {
    $('#btnAcept').css('visibility', 'hidden'); 
$('#usu').attr("disabled", true);
 $('#contra').attr("disabled", true);
$("#unin").css('visibility', 'hidden'); 
});



//editar usuario
function editar()
{
 $('#usu').attr("disabled", false);
  $('#contra').attr("disabled", false);

 $('#btnActualizar').css('visibility', 'hidden'); 
 $('#btnAcept').css('visibility', 'visible'); 
  $('input[type="text"]').val('');
 
}
function acept()
{
    var uno=$("#usu").val();
    var dos=$("#contra").val();
    var tres=$("#unin").html();
    
    $.post("UsuCon",{"idu":tres,"usu":uno,"cont":dos,"op":3}, function () {
      var toastHTML = "<span>Usuario actualizado</span>";
    Materialize.toast( toastHTML,2085);  
    
     window.location.href = "lgt";
                   
                });
}