<%-- 
    Document   : Prestamo
    Created on : 05/07/2018, 02:17:04 PM
    Author     : nicob
--%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Prestamo </title>
        <%@include file="WEB-INF/template/header.jspf" %>
        <link href="css/diego.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <main class="mn-inner">
            <div class="card">
                <div class="card-content ">
                    <div class="container">                        
                        <h3 class="center-align row">Registro de Prestamo</h3><br>
                        <div class="row" name="1">
                            <div class="input-field col s5">

                                <div class="row ">
                                    <div class="input-field col s24">
                                        <i class="material-icons prefix">person_pin</i>
                                        <input disabled value="No editable" id="disabled" type="text" class="validate">
                                        <label for="disabled">Usuario </label>
                                    </div>
                                </div>
                                <div class="row center">
                                    <div class="col s24">
                                        <div class="input-field">
                                            <i class="material-icons prefix">assignment</i>
                                            <label for="dnipro">Ingrese DNI profesor</label>
                                            <input  id="dnipro" class="autocomplete" type="text" maxlength="8" name="dnipro" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row center">
                                    <div class="col s24">
                                        <div class="input-field">
                                            <i class="material-icons prefix">chrome_reader_mode</i>
                                            <label for="responsable">Responsable</label>
                                            <input type="text" name="responsable" id="responsable" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col s24">
                                        <div class="input-field">
                                            <i class="material-icons prefix">scanner</i>
                                            <label for="equipo">Equipo</label>
                                            <input type="text" name="equipo" id="equipo" class="autocompleteEquipo"  required>
                                        </div>
                                    </div>
                                    <div class="col s2">
                                        <a class="btn-floating btn-small waves-effect waves-light blue-grey"><i class="material-icons">search</i></a>
                                    </div>
                                </div>

                            </div>
                            <div class="container input-field col s7" >
                                <div id="visualizarProducto" style="border: 1px solid #eae8e8; border-radius: 5px; margin: 10px 0px 5px 0px; padding: 10pX 10Px 0px 10px;display: none;">
                                    <table class="table" id="tablaPrestamo">
                                        <thead>
                                            <tr>
                                                <th scope="col">NOMBRE</th>
                                                <th scope="col">CODIGO</th>
                                                <th scope="col">ESTADO</th>
                                                <th scope="col">TIPO</th>
                                                <th scope="col">DISPONIBLE</th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>

                                <table class="table" id="tablaDetalle">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>N° Prestados</th>
                                            <th>Estado</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Cañon</td>
                                            <td>1</td>
                                            <td>Optimo</td>
                                        </tr>
                                        <tr>
                                            <td>HDMI</td>
                                            <td>1</td>
                                            <td>Optimo</td>
                                        </tr>
                                        <tr>
                                            <td>Cable de poder</td>
                                            <td>1</td>
                                            <td>Medio Optimo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s4">
                                <div class="input-field">
                                    <i class="material-icons prefix">pin_drop</i>
                                    <label for="aula">Aula</label>
                                    <input type="text" name="aula" id="aula" required>
                                </div>
                            </div>
                            <div class="col s4">
                                <div class="input-field">
                                    <form name="fechas" id="fechas">
                                        <i class="material-icons prefix">insert_invitation</i>
                                        <label for="fechawe">Fecha</label>
                                        <input disabled id="fecha" name="fecha" type="text" class="validate">
                                    </form>
                                </div>
                            </div>
                            <!--Fecha devolucion-->
                            <div class="col s4">
                                <div class="input-field">
                                    <form name="fechasdev" id="fechasdev">
                                       <i class="material-icons prefix active">insert_invitation</i>
                                        <label for="fechadev" class="active">Fecha Devolucion</label>
                                        <input id="fechadev" name="fechadev" type="text">
                                    </form>
                                </div>
                            </div>
                            <div class="col s4">
                                <div class="input-field">
                                    <form name="horas" id="horas">
                                        <i class="material-icons prefix">access_time</i>
                                        <label for="hor">Hora</label>
                                        <input disabled value="No editable" name="hora" id="hora" type="text" class="validate">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 right-align">
                                <a class="waves-effect waves-light btn-large red"><i class="material-icons right">block</i>Cancelar Prestamo</a>
                                <a class="waves-effect waves-light btn-large blue" id="registrarPrestamo" onclick="M.toast({html: 'Se registro exitosamente <br>', classes: 'rounded'})"><i class="material-icons right">add_circle</i>Registrar</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <script src="js/prestamo.js" type="text/javascript"></script>
        </main>
        <%@include file="WEB-INF/template/footer.jspf" %>
    </body>
</html>
