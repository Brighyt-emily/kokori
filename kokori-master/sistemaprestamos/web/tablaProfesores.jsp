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
        </div>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
    </body>
</html>
