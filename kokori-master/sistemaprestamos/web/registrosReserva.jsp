<%-- 
    Document   : registrosReserva
    Created on : 10-jul-2018, 15:06:22
    Author     : Kevin Peinado
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro Reservas</title>
        <%@include file="WEB-INF/template/header.jspf" %>
        <link href="css/estilos-quebin.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <main class="mn-inner">
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col s12">
                            <p><b>Lista Reservas Hechas</b><p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s3"></div>
                        <div class="col s6">
                            <div class="input-field">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="filtNom" type="text" class="validate" name="filtNom">
                                <label for="filtNom">Nombre o Codigo del Profesor</label>
                            </div>
                        </div>
                        <div class="col s3"></div>
                    </div>
                    <div class="row">
                        <div class="col s1"></div>
                        <div class="col s10">
                            <div class="contenedor-tabla">
                                <table class="striped highlight responsive-table" id="tblRegistro">
                                    <thead id="tblRegis">
                                        <tr>
                                            <th>Fecha Reserva</th>
                                            <th>Nombres Profesor</th>
                                            <th>Codigo</th>
                                            <th>#Dni</th>
                                            <th>Editar</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <!-- data de la bd -->
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div class="col s1"></div>
                    </div>
                </div>
            </div>
        </main>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/registrosReservas.js" type="text/javascript"></script>
    </body>
</html>
