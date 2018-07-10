<%-- 
    Document   : tablaProfesores
    Created on : 04-jul-2018, 23:29:35
    Author     : Kevin Peinado
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include file="WEB-INF/template/header.jspf" %>
         <!-- Compiled and minified CSS -->
          <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    
            
  
            
    </head>
    <body>                          
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <!--INICIO Contenido -->
        <main class="mn-inner">
            <div class="row">
                <div class="col s12">
                    <div class="page-title"> <i class="material-icons smoll" >assignment_ind</i><span>Registro de Profesores</span></div>
                </div>
                <div class="col s12 m12 l12">
                    <div class="card">
                        <div class="card-content">

                            <table class="highlight" id="tblProfesores">
                                <thead>
                                    <tr>
                                        <th>Num</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Dni</th>
                                        <th>Codigo</th>
                                        <th>Escuela</th>
                                        <th>Email</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                </tbody>
                            </table>                                                                                               
                            <!--Modal para ver detalladamente el resgitro de los profesores-->
                            
                            
                            <!-- Modal Structure -->
                            <div id="modal1" class="modal s12 m12 l12" style="max-width: 480px;">
                <div class="modal-content">
                  
                     <div class="col-sm-8 contact-form" > <!-- div da direita -->
                         <form id="contact" method="post" class="form" role="form">
                            <div class="row">
                               
                              
                                
                    
                            </div>
                     </div>
                <div class="modal-footer">
                    <a  class="modal-action modal-close btn-flat" onclick='editar()'>Registrar</a>
                    <a  class="modal-action modal-close btn-flat">Cerrar</a>

                </div>
                     </div>
                            <!-- fin del modal -->
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!--FIN Contenido-->
    </div>
    <div class="left-sidebar-hover"></div>







    <%@include file="WEB-INF/template/footer.jspf" %>
    <script src="js/profesor.js" type="text/javascript"></script>
    <script>
        $(document).ready(function () {
            console.log("funciona");
             
        });
    </script>
</body>
</html>
