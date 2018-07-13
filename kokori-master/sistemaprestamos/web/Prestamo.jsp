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
        <script src="js/material/jquery.js" type="text/javascript"></script>
        <link href="assetsd/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assetsd/css/paper-bootstrap-wizard.css" rel="stylesheet" />
        <link href="assetsd/css/demo.css" rel="stylesheet" />
        <%@include file="WEB-INF/template/header.jspf" %>
    </head>
    <body>
        <%
          String id = request.getParameter("idr");  
            %>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <main class="mn-inner">
            <div class="card">
                <div class="card-content ">

                    <!--      Wizard container        -->
                    <div class="card wizard-card" data-color="orange" id="wizardProfile">

                        <div class="wizard-header text-center">
                            <input id="ress" value="<%=id%>" hidden>
                            <h3 class="wizard-title">Prestamo de equipos</h3>
                            <p class="category">Esta informacion es importante.</p>
                        </div>

                        <div class="wizard-navigation">
                            <div class="progress-with-circle">
                                <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="3" style="width: 21%;"></div>
                            </div>
                            <ul>
                                <li>
                                    <a href="#about" data-toggle="tab">
                                        <div class="icon-circle">                                              
                                            <span class="ti-arrow-up"><i class="material-icons prefix small">chrome_reader_mode</i></span>
                                        </div>
                                        Datos 
                                    </a>
                                </li>
                                <li>
                                    <a href="#account" data-toggle="tab">
                                        <div class="icon-circle">
                                            <i class="ti-arrow-up"><i class="material-icons prefix">important_devices</i></i>
                                        </div>
                                        Equipos
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--Steep container-->
                        <div class="tab-content">
                            <!--Steep #1-->
                            <div class="tab-pane" id="about">
                                <div class="row">
                                    <h5 class="info-text"> Porfavor ingresar datos requeridos.</h5>
                                    <div class="container" name="1">
                                        <center> 
                                            <div class="row  ">
                                                <div class="row center col s6" name="rigth">
                                                    <div class="input-field row col s10">
                                                        <i class="material-icons prefix">person_pin</i>
                                                        <input disabled value="Emily Ccana" id="disabled" type="text" class="validate">
                                                        <label for="disabled">Usuario </label>
                                                    </div>
                                                    <div class="row center col s10">                                                       
                                                        <div class="input-field">
                                                            <i class="material-icons prefix">assignment</i>
                                                            <label for="dnipro">Ingrese DNI profesor</label>
                                                            <input  id="dnipro" class="autocomplete" type="text" maxlength="8" name="dnipro" required>
                                                            <input  id="prof" class="autocomplete" type="hidden" name="dnipro" required>
                                                        </div>                                                       
                                                    </div>    
                                                    <div class="row center col s10 input-field">
                                                        <i class="material-icons prefix">chrome_reader_mode</i>
                                                        <label for="responsable">Alumno</label>
                                                        <input type="text" name="responsable" id="responsable" required>
                                                    </div>
                                                    <div class="col s10 " >
                                                        <label for="dnipro"> <i class="material-icons prefix">face</i>Documento Responsable</label>
                                                        <select id="docu" class="input-field" onmessage="Documento Responsable"></select>                                                       
                                                    </div>      

                                                </div>
                                                <div class="row center col s6 " name="left">

                                                    <div class="col s10 input-field">
                                                        <i class="material-icons prefix">pin_drop</i>
                                                        <label for="aula">Aula</label>
                                                        <input type="text" name="aula" id="aula" required>
                                                    </div>
                                                </div>
                                                <div class="col s6 input-field">                                                        
                                                    <form name="fechas" id="fechas">
                                                        <i class="material-icons prefix active">insert_invitation</i>
                                                        <label for="fechawe" class="active">Fecha prestamo</label>
                                                        <input id="fecha_pre" name="fecha" type="date" class="validate">
                                                    </form> 
                                                </div>
                                                <div class="col s6 input-field">
                                                    <form name="horas" id="horas">
                                                        <i class="material-icons prefix active">access_time</i>
                                                        <label for="hor" class="active">Hora prestamo</label>
                                                        <input name="hora" id="hora_pre" type="time" class="validate">
                                                    </form>
                                                </div>
                                                <!--Fecha devolucion-->
                                                <div class="col s6 input-field">
                                                    <form name="fechasdev" id="fechasdev">
                                                        <i class="material-icons prefix active">insert_invitation</i>
                                                        <label for="fechadev" class="active">Fecha Devolucion</label>
                                                        <input id="fechadev" name="fecha_dev" type="date">
                                                    </form>
                                                </div>
                                                <div class="col s6 input-field">
                                                    <form name="horas" id="horas">
                                                        <i class="material-icons prefix active">access_time</i>
                                                        <label for="hora" class="active">Hora devolucion</label>
                                                        <input name="hora" id="hora_dev" type="time" class="validate">
                                                    </form>
                                                </div>                                                
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <!--Final Steep #1-->
                            <!--Steep #2-->
                            <div class="tab-pane" id="account">
                                <h5 class="info-text">Productos </h5>
                                <div class="row">
                                    <div class="container input-field col s12">
                                        <div class="row center">
                                            <div class="col s7">
                                                <div class="input-field">
                                                    <i class="material-icons prefix">scanner</i>
                                                    <label for="searchpro">Equipo</label>
                                                    <input  id="searchpro" class="autocomplete" type="text" maxlength="8" name="dnipro" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row center ">

                                            <div class="row center col s7" id="visualizarProducto" style="border: 1px solid #eae8e8; border-radius: 5px; margin: 10px 0px 5px 0px; padding: 10pX 10Px 0px 10px; ">
                                                <table class="table" id="tablaPrestamo">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">NOMBRE</th>
                                                            <th scope="col">CODIGO</th>
                                                            <th scope="col">ESTADO</th>
                                                            <th scope="col">TIPO</th>
                                                            <th scope="col">DISPONIBLE</th>
                                                            <th scope="col">ACCION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                            <div class="row center col s5">
                                                <table class="table" id="tablaDetalle" >
                                                    <thead>
                                                        <tr>
                                                            <th>PRODUCTO</th>
                                                            <th>ESTADO</th>
                                                            <th>TIPO</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--Final Steep #2-->
                        </div>
                        <div class="wizard-footer">
                            <div class="pull-right">
                                <input type='button' class='btn btn-next btn-fill btn-warning btn-wd' name='next' value='Siguiente' />
                                <input type='button' class='btn btn-finish btn-fill btn-warning btn-wd' name='finish' value='Completar' id="registrarPrestamo" />
                            </div>

                            <div class="pull-left">
                                <input type='button' class='btn btn-previous btn-default btn-wd' name='previous' value='Atras' />
                            </div>
                            <div class="clearfix"></div>
                            <div class="col s12">
                                <div class="action-btn-wrapper">
                                    <div class="fixed-action-btn my-custom-btn vertical">
                                        <a class="btn-floating btn-large red">
                                            <i class="large material-icons">build</i>
                                        </a>
                                        <ul>
                                            <li><a class="btn-floating #f06292 pink lighten-2 modal-trigger" href='#modal1' onclick="modalres()"><i class="material-icons">add</i></a></li>
                                            <li><a class="btn-floating black lighten-1" href="registrosReserva.jsp" title="Registro de Reservas"><i class="material-icons">remove_red_eye</i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- wizard container -->
                </div>
            </div>
        </main>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
    </body>
    <script src="js/prestamo.js" type="text/javascript"></script>
    <!--   Wizard   -->
    <script src="assetsd/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assetsd/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>
    <script src="assetsd/js/paper-bootstrap-wizard.js" type="text/javascript"></script>
    <script src="assetsd/js/jquery.validate.min.js" type="text/javascript"></script>
    <script src="assetsd/plugins/jquery/jquery-2.2.4.min.js"></script>
    <!-- Finish Wizard-->
</html>