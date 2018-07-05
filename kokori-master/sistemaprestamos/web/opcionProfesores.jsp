<%-- 
    Document   : opcionProfesores
    Created on : 04-jul-2018, 22:54:01
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
            <h1 class="center-align">
                Opciones
            </h1><br>
            <div class="row">
                <div class="col s6">
                    <h4 class="center-align">Registrar Profesor</h4><br>
                    <a class="btn-floating btn-large pulse" id="btnRegistrar"><i class="large material-icons">group_add</i></a>
                </div>
                <div class="col s6">
                    <h4 class="center-align">Registro de Profesores</h4><br>
                    <a class="btn-floating btn-large cyan pulse" id="btnRegistro"><i class="large material-icons">assignment_ind</i></a>
                </div>
            </div>
        </div>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/profesor.js" type="text/javascript"></script>
    </body>
</html>