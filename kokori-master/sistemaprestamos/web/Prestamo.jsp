<%-- 
    Document   : Prestamo
    Created on : 05/07/2018, 02:17:04 PM
    Author     : nicob
--%>

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
                            <div class="container input-field col s7" id="visualizarProducto">
                                <table class="table" id="tablaPrestamo">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Item Name</th>
                                            <th>Item Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Alvin</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alan</td>
                                            <td>Jellybean</td>
                                            <td>$3.76</td>
                                        </tr>
                                        <tr>
                                            <td>Jonathan</td>
                                            <td>Lollipop</td>
                                            <td>$7.00</td>
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
                                        <input type="text" id="fecha" name="fecha" id="fecha" required>
                                    </form>
                                </div>
                            </div>
                            <!--Fecha devolucion-->
                            <div class="col s4">
                                <div class="input-field">
                                    <form name="fechasdev" id="fechasdev">
                                        <i class="material-icons prefix">insert_invitation</i>
                                        <label for="fechadev">Fecha Devolucion</label>
                                        <input type="text" id="fechadev" name="fechadev" id="fecha" required>
                                        <input type="text" class="datepicker">
                                    </form>
                                </div>
                            </div>
                            <div class="col s4">
                                <div class="input-field">
                                    <form name="horas" id="horas">
                                        <i class="material-icons prefix">access_time</i>
                                        <label for="hor">Hora</label>
                                        <input type="text" name="hora" id="hora" required>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 right-align">
                                <a class="waves-effect waves-light btn-large red"><i class="material-icons right">block</i>Cancelar Prestamo</a>
                                <a class="waves-effect waves-light btn-large blue" onclick="M.toast({html: 'Se registro exitosamente <br>', classes: 'rounded'})"><i class="material-icons right">add_circle</i>Registrar</a>

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
