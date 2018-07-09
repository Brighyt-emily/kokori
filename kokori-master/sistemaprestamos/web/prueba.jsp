<%-- 
    Document   : prueba
    Created on : 09-jul-2018, 11:49:44
    Author     : dieguito
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include file="WEB-INF/template/headerMain.jspf" %>
    </head>
    <body>
         <%@include file="WEB-INF/template/min.jspf" %>
        
        <aside id="right-sidebar-nav">
                
            
            <div class="container">
                <!-- Aqui va todo :)-->
                <input type="text" class="datepicker" placeholder="hola bb ">
                <input type="text" class="timepicker">
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
                                <a class="waves-effect waves-light btn modal-trigger" data-target="modal1">Modal</a>
                                <!-- Modal Structure -->
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                        <h4>Titulo del modal</h4>
                                        <p>Cuerpo del modal</p>
                                    </div>
                                    <div class="modal-footer">
                                        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                                    </div>
                                </div>
                                <!-- fin del modal -->
                            </div>
                        </div>
                    </div>
                </div>
                            
                
                
                
                
                  <!-- Modal Trigger -->
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
          
            </div>
        </aside>
      </div>
    </div>
  
        
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/profesor.js" type="text/javascript"></script>
        
<script>
    
          
    
</script>
        
    </body>
</html>
