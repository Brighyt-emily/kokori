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
        <%@include file="WEB-INF/template/headerMain.jspf" %>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <h3 class="center-align">Registrar Nuevo Profesor</h3><br>
                <div class="row">
                    <div class="col s4">
                        <div class="input-field">
                            <i class="material-icons prefix">perm_identity</i>
                            <label for="nombre">Nombres</label>
                            <input type="text" name="nombre" required>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="input-field">
                            <i class="material-icons prefix">person_pin</i>
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" required>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="input-field">
                            <i class="material-icons prefix">dialer_sip</i>
                            <label for="celular">Numero de Celular</label>
                            <input type="text" name="celular" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s6">
                        <div class="input-field">
                            <i class="material-icons prefix">mail</i>
                            <label for="email">Email</label>
                            <input type="text" name="email" required>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <i class="material-icons prefix">location_city</i>
                            <label for="direccion">Dirección</label>
                            <input type="text" name="direccion" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s4">
                        <div class="input-field">
                            <i class="material-icons prefix">school</i>
                            <label for="grado">Grado Profesional</label>
                            <input type="text" name="grado" required>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="input-field">
                            <i class="material-icons prefix">assignment</i>
                            <label for="nombre">Ingrese Dni</label>
                            <input type="text" name="nombre" required>
                        </div>
                    </div>
                    
                    <div class="col s4">
                        <div class="input-field">
                            <i class="material-icons prefix">select_all</i>
                            <label for="codigo">Codigo Asignado</label>
                            <input type="text" name="codigo" disabled="">                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <i class="material-icons prefix">class</i>
                        <select id="secFacultad">
                            
                        </select>
                        <label>Facultades</label>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">collections_bookmark</i>  
                        <select id="secEscuela">
                            
                        </select>
                        <label>Escuela</label>
                    </div>
                   </div>
                
                <div class="row">
                    <div class="col s12 right-align">
                        <a class="waves-effect waves-light btn-large red"><i class="material-icons right">remove_circle</i>Cancelar Registro</a>
                        <a class="waves-effect waves-light btn-large blue" onclick="M.toast({html: 'Se le asigno un codigo', classes: 'rounded'})"><i class="material-icons right">near_me</i>Registrar</a>
                    </div>
                </div>
            </div>
        </div>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/regisProfesores.js" type="text/javascript"></script>
    </body>
</html>
