<%-- 
    Document   : reservas
    Created on : 06-jul-2018, 11:35:04
    Author     : Kevin Peinado
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Reservas</title>
        <%@include file="WEB-INF/template/header.jspf" %>
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <main class="mn-inner"> 
            <div class="card">
                <div class="card-content">
                    <!-- nuevo diseño-->
                    <div class="row">
                        <div class="col s5 m5 l5">
                            <div class="row">
                                <div class="col s12">
                                    <h4 class="center-align">Reservas</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row">
                                    <div class="col s6">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                        <div class="input-field">
                                            <i class="material-icons prefix">perm_contact_calendar</i>
                                            <label for="codigo">Codigo</label>
                                            <input type="text" name="codigo" required id="codigo">
                                        </div>
                                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                    <div class="col s2 center-align">
                                        <a class="btn-floating btn-large waves-effect waves-light blue-grey" id="btnBuscar"><i class="material-icons">search</i></a>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">event</i>
                                            <label for="fecha">Fecha</label>
                                            <input type="text" name="fecha" required id="fecha" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                        <div class="input-field">
                                            <i class="material-icons prefix">face</i>
                                            <input type="text" name="nombres" required id="nombres" disabled>
                                            <input type="hidden" name="nombres" required id="idprofesor" disabled>
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <div class="input-field">
                                            <i class="material-icons prefix">account_balance</i>
                                            <label for="aula">Aula</label>
                                            <input type="text" name="aula" required id="aula">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <label>Fecha de Prestamo</label>
                                        <div class="input-field">
                                            <i class="material-icons prefix">event</i>
                                            <input type="date" id="fe_prestamo">
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <label>Hora de Prestamo</label>
                                        <div class="input-field">
                                            <i class="material-icons prefix">access_time</i>
                                            <label for="h_prestamo">00:00</label>
                                            <input type="text" required name="h_prestamo" id="h_prestamo" maxlength="5">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <label>Fecha de Devolución</label>
                                        <div class="input-field">
                                            <i class="material-icons prefix">assignment_turned_in</i>
                                            <input type="date" id="fe_devolucion">
                                        </div>
                                    </div>
                                    <div class="col s4">
                                        <label>Hora de Devolucion</label>
                                        <div class="input-field">
                                            <i class="material-icons prefix">access_alarms</i>
                                            <label for="h_devolucion">00:00</label>
                                            <input type="text" name = "h_devolucion"required id="h_devolucion" maxlength="5">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s6">
                                        <button class="btn waves-effect waves-light light-blue darken-4" type="submit" name="action">Reservar
                                            <i class="material-icons right">save</i>
                                        </button>
                                    </div>
                                    <div class="col s6">
                                        <button class="btn waves-effect waves-light grey darken-3" type="submit" name="action">Cancelar
                                            <i class="material-icons right ">delete_forever</i>
                                        </button>
                                    </div>
                                </div>

                                <!-- busqueda de productos -->

                                <!-- fin de la busqueda de productos -->
                            </div>
                            <!-- fin de nuevo diseño -->
                        </div>
                    </div>
                    <div class="left-sidebar-hover"></div>
                    </main>
                    <%@include file="WEB-INF/template/footer.jspf"%>
                    <script src="js/reservas.js" type="text/javascript"></script>
                    </body>
                    </html>
