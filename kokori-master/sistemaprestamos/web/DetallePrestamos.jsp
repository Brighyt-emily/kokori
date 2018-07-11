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
    </head>
    <body>                          
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <!--INICIO Contenido -->
        <main class="mn-inner">
            <div class="col s12">
                <div class="action-btn-wrapper">
                    <div class="fixed-action-btn my-custom-btn vertical">
                        <a class="btn-floating btn-large red">
                            <i class="large material-icons">build</i>
                        </a>
                        <ul>
                            <li><a class="btn-floating #f06292 pink lighten-2 modal-trigger" href='#modal1'><i class="material-icons">add</i></a></li>                                                  
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <div class="page-title"> <i class="material-icons smoll" >assignment_ind</i><span>Detalles Prestamos</span></div>
                </div>
                <div class="col s12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="row center col s10">                                                       
                                <div class="input-field">
                                    <i class="material-icons prefix">assignment</i>
                                    <label for="usua">Ingrese Usuario</label>
                                    <input  id="usua" class="autocomplete" type="text" name="usua" required>
                                </div>                                                       
                            </div>    

                            <table class="highlight" id="tbldetpressm">
                                <thead>
                                    <tr>
                                        <th>Usuario</th>
                                        <th>Profesor</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>

                                <tbody>
                                </tbody>
                            </table>                                                                                               
                            <!--Modal para ver detalladamente el resgitro de los profesores-->
                            <!-- Modal Structure -->
                            <div id="modal1" class="modal s12" style="max-width: 890px;">
                                <div class="modal-content">
                                    <div class="s12 contact-form" > <!-- div da direita -->
                                        <div class="row">
                                            <table class="highlight" id="tbldetpres">
                                                <thead>
                                                    <tr>
                                                        <th>Documento Responsable</th>
                                                        <th>Fecha Prestamo</th>
                                                        <th>Fecha Devolucion</th>
                                                        <th>Equipos Prestados</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                </tbody>
                                            </table>                   
                                        </div>
                                        <div class="modal-footer">

                                            <a  class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>         
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="modal3" class="modal s12" style="max-width: 890px;">
                                <div class="modal-content">
                                    <div class="s12 contact-form" > <!-- div da direita -->
                                        <div class="row">
                                            <table class="highlight" id="tbldetpro">
                                                <thead>
                                                    <tr>
                                                        <th>Nombre</th>
                                                        <th>Cantidad</th>
                                                        <th>Estado</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                </tbody>
                                            </table>                   
                                        </div>
                                        <div class="modal-footer">

                                            <a  class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
        <!--FIN Contenido-->
    </div>
    <div class="left-sidebar-hover"></div>
    <script src="js/detallePrestamo.js" type="text/javascript"></script>

    <%@include file="WEB-INF/template/footerMain.jspf" %>
</body>
</html>
