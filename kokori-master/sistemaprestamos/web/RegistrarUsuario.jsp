<%-- 
    Document   : registroProfesores
    Created on : 04-jul-2018, 22:35:43
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

        <!--INICIO Contenido -->
        <main class="mn-inner" >
            <nav class="teal lighten-2" style="margin-top: -20px;">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a href="RegistrarUsuario.jsp" class="breadcrumb">Añadir Usuario
                        </a>

                    </div>
                </div>
            </nav>
            <div class="col s12">

                <div class="action-btn-wrapper">
                    <div class="fixed-action-btn my-custom-btn vertical">
                        <a class="btn-floating btn-large red">
                            <i class="large material-icons">settings
                            </i>
                        </a>
                        <ul>
                            <li><a class="btn-floating #f06292 blue lighten-2 tooltipped" data-position="left" data-delay="50" data-tooltip="Registrar Usuario" href="#modalusu"><i class="material-icons">add</i></a></li>
                            <li><a class="btn-floating #f06292 green lighten-2 tooltipped" data-position="left" data-delay="50" data-tooltip="Lista de Profesores" href='tablaProfesores.jsp'><i class="material-icons">grid_on</i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <!--Modal-->
            <div id="modalusu" class="modal modal-fixed-footer">
                <div class="modal-content">
                    <div class="card-content">
                        <div class="row">
                            <div class="row">
                                <div class="col s8 row center-align">
                                    <div class="input-field">
                                        <i class="material-icons prefix">face</i>
                                        <label for="nomusu">Nombre de Usuario</label>
                                        <input id="nomusu" type="text" class="validate">
                                    </div>
                                </div>
                                <div class="col s8 row center-align">
                                    <div class="input-field">
                                        <i class="material-icons prefix">person_pin</i>
                                        <label for="pass">Contraseña</label>
                                        <input type="text" name="password" id="pass1" class="validate" required>

                                    </div>
                                </div>
                            </div>   
                            <div class="row">
                                <div class="input-field col s5">
                                    <i class="material-icons prefix">class</i>
                                    <select id="secRol">
                                        <option value="0" disabled selected>ROL</option>
                                        <option value="1">TRABAJADOR</option>
                                        <option value="2">PROFESOR</option>
                                    </select>
                                    <label>ROLES</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s8">

                            </div>
                            <div class="col s2">
                                <button class="btn-large teal lighten-2" type="submit" name="action" id="btnRegistrar">Registrar
                                    <i class="material-icons right">save</i>
                                </button>
                            </div>
                            <div class="col s2">
                                <button class="btn-large grey darken-3" type="submit" name="action" id="btnCancelar">Cancelar
                                    <i class="material-icons right ">delete_forever</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
                </div>
            </div>
            <!--Fin del Modal-->
            <div class="row">
                <div class="col s12">

                </div>
                <div class="col s12 m12 l12">
                    <div class="card" style="padding:20px;">
                        <div class="card-content">
                            <div class="row">
                                <div class="row">
                                    <div class="col s8 row center-align">
                                        <div class="input-field">
                                            <i class="material-icons prefix">face</i>
                                            <label for="nomusu">Nombre de Usuario</label>
                                            <input id="nomusu" type="text" class="validate">
                                        </div>
                                    </div>
                                    <div class="col s8 row center-align">
                                        <div class="input-field">
                                            <i class="material-icons prefix">person_pin</i>
                                            <label for="pass">Contraseña</label>
                                            <input type="text" name="password" id="pass1" class="validate" required>

                                        </div>
                                    </div>
                                </div>   
                                <div class="row">
                                    <div class="input-field col s5">
                                        <i class="material-icons prefix">class</i>
                                        <select id="secRol">
                                            <option value="0" disabled selected>ROL</option>
                                            <option value="1">TRABAJADOR</option>
                                            <option value="2">PROFESOR</option>
                                        </select>
                                        <label>ROLES</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s8">

                                </div>
                                <div class="col s2">
                                    <button class="btn-large teal lighten-2" type="submit" name="action" id="btnRegistrar">Registrar
                                        <i class="material-icons right">save</i>
                                    </button>
                                </div>
                                <div class="col s2">
                                    <button class="btn-large grey darken-3" type="submit" name="action" id="btnCancelar">Cancelar
                                        <i class="material-icons right ">delete_forever</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div class="left-sidebar-hover"></div>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/regisProfesores.js" type="text/javascript"></script>
    </body>
</html>
