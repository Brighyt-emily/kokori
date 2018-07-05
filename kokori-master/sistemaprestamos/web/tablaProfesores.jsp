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
        <%@include file="WEB-INF/template/headerMain.jspf" %>
    </head>
    <body>
        <div class="container">
            <h3 class="center-align">Profesores Registrados</h3><br>
            <table class="highlight" id="tblProfesores">
                <thead>
                    <tr>
                        <th>#Num</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>#Dni</th>
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
            <!-- Modal Trigger -->
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
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/profesor.js" type="text/javascript"></script>
        <script>
            $(document).ready(function (){
                $('.modal-trigger').leanModal();
            });
        </script>
    </body>
</html>
