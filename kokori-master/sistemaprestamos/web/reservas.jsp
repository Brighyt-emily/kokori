<%-- 
    Document   : reservas
    Created on : 06-jul-2018, 11:35:04
    Author     : Kevin Peinado
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include file="WEB-INF/template/header.jspf" %>
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <main class="mn-inner"> 
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col s12">
                            <h4 class="center-align">Reservas</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s2">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                            <div class="input-field">
                                <i class="material-icons prefix">perm_contact_calendar</i>
                                <label for="codigo">Codigo</label>
                                <input type="text" name="codigo" required id="codigo">
                            </div>
                        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                        <div class="col s2 center-align">
                            <a class="btn-floating btn-large waves-effect waves-light blue-grey" id="btnBuscar"><i class="material-icons">search</i></a>
                        </div>
                        <div class="col s5">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                            <div class="input-field">
                                <i class="material-icons prefix">face</i>
                                <input type="text" name="nombres" required id="nombres" disabled>
                                <input type="hidden" name="nombres" required id="idprofesor" disabled>
                            </div>
                        </div>
                        <div class="col s3">
                            <div class="input-field">
                                <i class="material-icons prefix">event</i>
                                <label for="fecha">Fecha de Hoy</label>
                                <input type="text" name="fecha" required id="fecha" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s3">
                            <div class="input-field">
                                <i class="material-icons prefix">account_balance</i>
                                <label for="aula">Aula</label>
                                <input type="text" name="aula" required id="aula">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <%@include file="WEB-INF/template/footer.jspf" %>
        <script src="js/reservas.js" type="text/javascript"></script>
    </body>
</html>
