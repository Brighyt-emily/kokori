<%-- 
    Document   : devolucion
    Created on : 05/07/2018, 04:08:05 PM
    Author     : Emanuel Pinaud
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include file="WEB-INF/template/header.jspf"%>
        <link href="cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.18/datatables.min.css"/>

    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>

        <!--INICIO Devolucion.jsp -->


        <main class="mn-inner">
            <nav class="teal lighten-2" style="margin-top: -20px;">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a href="perfil.jsp" class="breadcrumb">Perfil</a>

                    </div>
                </div>
            </nav>
            <div class="card">

                <div class="col s12 m12 l12">
                    <div class="card">
                        <div class="card-content">
                            <div class="col s4">
                                <!-- comienzo -->
                                <div class="container">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <a>Usuario</a>
                                        <input disabled value="${sessionScope.user}" id="usu" type="text" class="validate">
                                        <label for="disabled"></label>
                                    </div>


                                    <div class="input-field col s6">
                                        <a>Contraseña</a>
                                        <input disabled value="${sessionScope.pass}" id="contra" type="text" class="validate">

                                    </div>
                                          <a  id="unin">${sessionScope.iduser}</a>
                                </div>
                                <!-- end -->
                                </div>
                                <div class="col s6">
                                    <a class="btn-floating btn-large pulse light-red darken-4" id="btnActualizar" onclick="editar()"><i class="material-icons">edit</i></a>
                                </div>
                                <div class="col s6">
                                    <a class="btn-floating btn-large pulse red darken-4" id="btnAcept" onclick="acept()" style="padding-top: -60px"><i class="material-icons">check</i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>   

        </main>

        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/perfil.js" type="text/javascript"></script>

    </body>
</html>
