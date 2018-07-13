<%-- 
    Document   : editarReserva
    Created on : 11-jul-2018, 16:20:45
    Author     : Kevin Peinado
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Edicion de Reservas</title>
        <%@include file="WEB-INF/template/header.jspf" %>
        <link href="css/estilos-quebin.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <%
            String id = request.getParameter("idr");
        %>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <div class="mn-inner">
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col s12">
                            <h5>Edicion de reserva</h5>
                            <input id="idresquebin" value="<%=id%>" hidden>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s2">
                            <label for="codigo_r">Codigo Docente</label>
                            <div class="input-field">
                                <input id="codigo_r" type="text" class="validate" disabled="true">
                            </div>
                        </div>
                        <div class="col s4">
                            <label for="nombres_r">Nombres Completos</label>
                            <div class="input-field">
                                <input id="nombres_r" type="text" class="validate" disabled="true">
                                <input type="hidden" id="idprofesor">
                            </div>
                        </div>
                        <div class="col s2">
                            <label for="aula_r">Aula</label>
                            <div class="input-field">
                                <input id="aula_r" type="text" class="validate">
                            </div>
                        </div>
                        <div class="col s4">
                            <div class="row">
                                <div class="col s6 right-align">
                                    <a class="btn-floating btn-large pulse grey darken-4" id="btnRegresar"><i class="material-icons">restore_page</i></a>
                                </div>
                                <div class="col s6">
                                    <a class="btn-floating btn-large pulse light-blue darken-4" id="btnActualizar"><i class="material-icons">edit</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s4">
                            <label for="fe_prestamo_r">Fecha de Prestamo</label>
                            <div class="input-field">
                                <input type="text" id="fe_prestamo_r" class="datepicker">
                            </div>
                        </div>
                        <div class="col s2">
                            <label for="h_prestamo_r">Hora Prestamo</label>
                            <div class="input-field">
                                <input type="text" id="h_prestamo_r">
                            </div>
                        </div>
                        <div class="col s4">
                            <label for="fe_devolucion_r">Fecha Devolucion</label>
                            <div class="input-field">
                                <input type="text" id="fe_devolucion_r" class="datepicker">
                            </div>
                        </div>
                        <div class="col s2">
                            <label for="h_devolucion_r">Hora Devolución</label>
                            <div class="input-field">
                                <input type="text" id="h_devolucion_r">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 center-align">
                            <a href="#modal1" class="waves-effect waves-light btn-large green darken-3 modal-trigger"><i class="material-icons right">dns</i>Añadir Productos</a>                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s2"></div>
                        <div class="col s8">
                            <div class="tabla-contenedor2">
                                <table class="highlight responsive-table" id="reservado">
                                    <thead id="tblCom">
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Codigo</th>
                                            <th>Remover</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col s2"></div>
                    </div>
                    <!--Modal-->
                    <div id="modal1" class="modal modal-fixed-footer">
                        <div class="modal-content">
                            <h4>Busqueda de Productos</h4>
                            <div class="row">
                                <div class="col s1"></div>
                                <div class="col s10">
                                    <div class="input-field">
                                        <i class="material-icons prefix" style="color: green">shopping_cart</i>
                                        <label for="nomProducto">Nombre o Codigo</label>
                                        <input type="text" name="nomProducto" required id="nomProducto">
                                    </div>
                                </div>
                                <div class="col s1"></div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <div class="tabla-contenedor">
                                        <table class="highlight responsive-table" id="actuProd">
                                            <thead id="tblCa">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nombres</th>
                                                    <th>Codigo</th>
                                                    <th>Tipo</th>
                                                    <th>Stock</th>
                                                    <th>Añadir</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <!-- data de los productos -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
                        </div>
                    </div>
                    <!--Fin del Modal-->
                </div>
            </div>
        </div>
        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <!--<script src="js/reservas.js" type="text/javascript"></script>-->
        <!--<script src="js/registrosReservas.js" type="text/javascript"></script>-->
        <script src="js/actualizarReserva.js" type="text/javascript"></script>
    </body>
</html>
