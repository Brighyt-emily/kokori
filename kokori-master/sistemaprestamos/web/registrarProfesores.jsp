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
        <main class="mn-inner">
            <div class="row">
                <div class="col s12">
                    <div class="page-title">
                        <i class="material-icons">add</i>

                        Registrar Profesor   
                    </div>
                </div>
                <div class="col s12 m12 l12">
                    <div class="card">
                        <div class="card-content">
                            Ingrese los datos de profesor:
                            <div class="row">
                                <div class="row">
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">perm_identity</i>
                                            <label for="nombre">Nombres</label>
                                            <input type="text" name="nombre" required id="nombre">
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">person_pin</i>
                                            <label for="apellidos">Apellidos</label>
                                            <input type="text" name="apellidos" required id="apellidos">
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">dialer_sip</i>
                                            <label for="celular">Numero de Celular</label>
                                            <input type="text" name="celular" required maxlength="9" id="celular">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s6">
                                        <div class="input-field">
                                            <i class="material-icons prefix">mail</i>
                                            <label for="email">Email</label>
                                            <input type="email" name="email"  id="email">
                                        </div>
                                    </div>
                                    <div class="col s6">
                                        <div class="input-field">
                                            <i class="material-icons prefix">location_city</i>
                                            <label for="direccion">Dirección</label>
                                            <input type="text" name="direccion" required id="direccion">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">school</i>
                                            <label for="grado">Grado Profesional</label>
                                            <input type="text" name="grado" required id="grado">
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">assignment</i>
                                            <label for="dni">Ingrese Dni</label>
                                            <input type="text" name="dni" required maxlength="8" id="dni">

                                        </div>
                                    </div>
                                    </div>   
                                
                                <div class="row">
                                          <div class="input-field col s5">
                                                 <i class="material-icons prefix">class</i>
                                                 <select id="secFacultad">
                                                 <option value="0" disabled selected>Facultades de la UPeU</option>
                                                 <option value="1">FIA</option>
                                                 <option value="2">FACTEO</option>
                                                 <option value="3">FCE</option>
                                                 <option value="4">FACIHED</option>
                                                 </select>
                                                 <label>Facultades</label>
                                           </div>
                                                        <div class="col s2 center-align">
                                                            <a class="btn-floating btn-large waves-effect waves-light blue-grey" id="btnMostrar"><i class="material-icons">keyboard_arrow_right</i></a>
                                                        </div>
                                    
                                                        <div class="input-field col s5">
                                                            <select id="selectBox" name="selectBox">
                                                                <option value="option1"> option1 </option>
                                                                <option value="option2"> option2 </option>
                                                                <option value="option3"> option3 </option>
                                                                <option value="option4"> option4 </option>
                                                            </select>
                                                        </div>
                                    
                                    
                                    
                                                    </div>
                                
                                <div class="left-sidebar-hover"></div>
                                <%@include file="WEB-INF/template/footer.jspf" %>
                                <script src="js/regisProfesores.js" type="text/javascript"></script>
                                </body>
                                </html>
