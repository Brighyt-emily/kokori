<%-- 
    Document   : logeoReservas
    Created on : 06-jul-2018, 23:02:45
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
    <body style="background-image: url('images/fondo.jpg'); background-repeat: no-repeat; background-size:cover;">
        <!-- recarga de pagina -->
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>
        <!-- end -->
        <!-- inicio de logeo para profesores por codigo -->
        <div class="mn-content valign-wrapper">
            <main class="mn-inner container">
                <div class="valign">
                    <div class="row">
                        <div class="col s6">
                            <img src="images/upeu.jpg" class="responsive-img">
                        </div>
                        <div class="col s6">
                            <div class="card">
                                <div class="card-content responsive-img">
                                    <h5 class="center-align">
                                        Ingrese su Codigo Asignado
                                    </h5>
                                    <form>
                                        <div class="row" style="margin-top: 80px;">
                                            <div class="col s12">
                                                <div class="row">
                                                    <div class="input-field col s12">
                                                        <i class="material-icons prefix">grain</i>
                                                        <input id="codigo" type="text" class="validate">
                                                        <label for="codigo">Codigo #####</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col s12 center-align">
                                                        <a class="btn-large waves-effect waves-light blue" id="btnOk"><i class="material-icons">last_page </i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </main>
</div>
<%@include file="WEB-INF/template/footer.jspf" %>
<script src="js/reservas.js" type="text/javascript"></script>
</body>
</html>
