$(document).ready(function () {
    $('#btnAcept').css('visibility', 'hidden'); 
$('#usu').attr("disabled", true);
 $('#contra').attr("disabled", true);
$("#unin").css('visibility', 'hidden'); 
listado();

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

function listado()
{
    var unin= $("#unin").html();
    
    $.get("pro",{"id":unin,"op":10}, function (data) {
        var bibi = JSON.parse(data);
        alert(bibi);
           $("#nop").text(bibi[0].nom+" "+bibi[0].ape);
          $("#dn").text(bibi[0].dn);
          $("#celuar").text(bibi[0].nucel);
          $("#dire").text(bibi[0].dire);
          $("#corre").text(bibi[0].corr);
          $("#ro").text(bibi[0].nor);
        
          
          
         
        
    });
}