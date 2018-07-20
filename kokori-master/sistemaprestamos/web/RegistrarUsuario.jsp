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
                        <a href="RegistrarUsuario.jsp" class="breadcrumb">Añadir Persona
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
                            <li><a class="btn-floating #f06292 blue lighten-2 tooltipped modal-trigger" data-position="left" data-delay="50" data-tooltip="Registrar Usuario" href="#modalusu"><i class="material-icons">add</i></a></li>
                            <li><a class="btn-floating #f06292 green lighten-2 tooltipped" data-position="left" data-delay="50" data-tooltip="Lista de Profesores" href='tablaProfesores.jsp'><i class="material-icons">grid_on</i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <!--Modal-->
            <div id="modalusu" class="modal modal-fixed-footer">
                <div class="modal-content">
                    <div class="card-content">
                        <nav class="teal lighten-2" style="margin-top: -20px;">
                            <div class="nav-wrapper">
                                <div class="col s12">
                                    <a href="RegistrarUsuario.jsp" class="breadcrumb">Añadir Persona </a>
                                    <a href="RegistrarProfesores.jsp" class="breadcrumb">Registro de Usuarios</a>

                                </div>
                            </div>
                        </nav>
                        <div class="row">
                            <div class="center">
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
                                        <input type="text" name="password" id="pass1" class="validate">

                                    </div>
                                </div>
                            </div>   
                            <div class="row ">
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

                    </div>
                </div>
                <div class="modal-footer row">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    <a class="modal-action modal-close waves-effect waves-blue btn-flatr" type="submit" name="action" id="btnRegistrar">Registrar<i class="material-icons right">save</i></a>

                </div>
            </div>
            <!--Fin del Modal-->
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="card" style="padding:20px;">
                        <div class="row">
                            <div class="row">
                                <div class="center col s12">
                                    <div class="input-field col s6">
                                        <i class="material-icons prefix">face</i>
                                        <label for="nombres">Nombres</label>
                                        <input id="nombres" type="text" class="validate">
                                    </div>
                                    <div class="input-field col s6">
                                        <i class="material-icons prefix">person_pin</i>
                                        <label for="apellidos">Apellidos</label>
                                        <input id="apellidos" type="text" class="validate">
                                    </div>

                                </div>
                                <div class=" center col s12">
                                    <div class="input-field col s6">
                                        <i class="material-icons prefix">dialer_sip</i>
                                        <label for="celular">Numero de Celular</label>
                                        <input class="validate" type="text" name="celular" placeholder="#"  required maxlength="9" id="celular">
                                    </div>
                                    <div class="input-field col s6">
                                        <i class="material-icons prefix">assignment</i>

                                        <input type="text" name="dni" class="validate" required maxlength="8" id="dni" placeholder="#">
                                        <label for="dni">Ingrese Dni</label>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s6">
                                    <div class="input-field">
                                        <i class="material-icons prefix">mail</i>
                                        <input type="email" name="email"  id="email" class="validate">
                                        <label for="email">Email</label>

                                    </div>
                                </div>
                                <div class="col s6">
                                    <div class="input-field">
                                        <i class="material-icons prefix">location_city</i>                                           
                                        <input class="validate" type="text" name="direccion" required id="direccion" placeholder="">
                                        <label for="direccion">Dirección</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s8">

                                </div>
                                <div class="col s2">
                                    <button class="btn-large teal lighten-2" type="submit" name="action" id="btnregispers">Registrar
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
        <script src="js/regisUsuario.js" type="text/javascript"></script>
    </body>
</html>
