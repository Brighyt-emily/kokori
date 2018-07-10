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
            <div class="row">
                <div class="col s12">
                    
                </div>
                <div class="col s12 m12 l12">
                    <div class="card" style="padding:20px;">
                        
                        <i class="material-icons">add_circle</i>

                        Añadir Profesor   
                    
                        <div class="card-content">
                           
                            <div class="row">
                                <div class="row">
                                    <div class="col s4">
                                        <div class="input-field">
                                        <i class="material-icons prefix">face</i>
                                        <label for="nombres">Nombres</label>
                                        <input id="nombres" type="text" class="validate">
                                        </div>
                                       
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                        <i class="material-icons prefix">person_pin</i>
                                        <label for="apellidos">Apellidos</label>
                                        <input id="apellidos" type="text" class="validate">
                                            
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">dialer_sip</i>
                                            <label for="celular">Numero de Celular</label>
                                            <input class="validate" type="text" name="celular" placeholder="#"  required maxlength="9" id="celular">
                                            
                                            
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
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">school</i>
                                            
                                            <input type="text" class="validate" name="grado" required id="grado" placeholder="">
                                            <label for="grado">Grado Profesional</label>
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">assignment</i>
                                            
                                            <input type="text" name="dni" class="validate" required maxlength="8" id="dni" placeholder="#">
                                            <label for="dni">Ingrese Dni</label>

                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">assignment</i>

                                            <input type="text" name="codigo" class="validate" required maxlength="9" id="codigo" placeholder="#">
                                            <label for="codigo">Ingrese Codigo</label>

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
                                                <select id="comboEscuela" name="selectBox">
                                                 <option value="0" disabled selected>Escuelas de la UPeU</option>             
                                                </select>
                                                <label>Escuelas</label>
                                                </div>
                            
                                            </div>
                                            </div>
                             <div class="row">
                            <div class="col s8">
                                
                            </div>
                            <div class="col s2">
                                <button class="btn-large light-blue darken-4" type="submit" name="action" id="btnRegistrar">Registrar
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
